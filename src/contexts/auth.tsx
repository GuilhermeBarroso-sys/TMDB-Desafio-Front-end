import { createContext, ReactNode, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { api } from "../services/api";
type User = {
	id:string;
	name:string;
	email:string;
}
type AuthResponse = {
	token: string;
	user: User;
}

type AuthContextData = {
	user: User|null;
	signOut: () => void;
	signIn: ({email,password}:ISignIn) => Promise<boolean>
	signUp: ({name,email,password}:ISignUp) => Promise<boolean>
	isAuthenticated: () =>  boolean;
	loginWarning: (text : string) => void;
}
interface ISignIn {
	email: string;
	password: string;
}
type RegisterResponse = {
	name: string;
	email: string;
}
interface ISignUp {
	name:     string
	email:    string;
	password: string;
}

export const AuthContext = createContext({} as AuthContextData);
type AuthProvider = {
	children: ReactNode;
}

export function AuthProvider(props : AuthProvider) {
	const [user, setUser] = useState<User|null>(null);

	async function signIn({email,password}: ISignIn)  {
		try {
			const response = await api.post<AuthResponse>('authenticate', {
				email,
				password
			});
			const {token,user} = response.data;
			localStorage.setItem('@desafioD1:token', token);
			api.defaults.headers.common.authorization = `Bearer ${token}`;
			setUser(user);
			return true;
		} catch({response}) {
			if(response.status == 400) {
				Swal.fire({
					title: "Erro",
					text: "Por favor, preencha todos os campos!",
					icon: "error",
					confirmButtonColor: '#f27474'
				});
			}
			else if(response.status == 401) {
				Swal.fire({
					title: "Erro",
					text: "Senha inválida!",
					icon: "error",
					confirmButtonColor: '#f27474'
				});
			}
			else if(response.status == 404) {
				Swal.fire({
					title: "Erro",
					text: "Esse Usuário não existe!",
					icon: "error",
					confirmButtonColor: '#f27474'
				});
			}
			return false;
		}
	}

	async function signUp({name,email,password}:ISignUp) {
		try {
			await api.post<RegisterResponse>('register', {
				name,
				email,
				password,
			});
			await signIn({ email , password});
			return true;
		} catch({response}) {
			if(response.status == 400) {
				Swal.fire({
					title: "Erro",
					text: "Por favor, preencha todos os campos!",
					icon: "error",
					confirmButtonColor: '#f27474'
				});
			}
			else if(response.status == 409) {
				Swal.fire({
					title: "Erro",
					text: "Esse email já está sendo utilizado!",
					icon: "error",
					confirmButtonColor: '#f27474'
				});
			}
			return false;
		}	
	}

	function signOut() {
		setUser(null);
		localStorage.removeItem('@desafioD1:token');
	}

	function isAuthenticated() {
		const token = localStorage.getItem('@desafioD1:token');
		if(!token) {
			return false;
		}
		return true;
	}
	function loginWarning(text : string) {
		Swal.fire({
			title: "Aviso",
			text: text,
			icon: "warning",
		});
	}
	useEffect(() => {
		const token = localStorage.getItem('@desafioD1:token');
		if(token) {
			api.defaults.headers.common.authorization = `Bearer ${token}`;
		}
	},[]);

	return (
		<AuthContext.Provider value ={{user, signOut, signIn, signUp, isAuthenticated, loginWarning}}>
			{props.children}
		</AuthContext.Provider>
	);
}