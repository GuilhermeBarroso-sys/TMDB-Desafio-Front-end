import { FormEvent, useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { ArrowBack } from "../ArrowBack";
import styles from './styles.module.scss';
export function RegisterScreen() {
	const {signUp} = useContext(AuthContext);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const {isAuthenticated} = useContext(AuthContext);
	const [success, setSuccess] = useState(false);
	async function handleSubmit(event : FormEvent) {
		event.preventDefault();
		const register = await signUp({name,email,password});
		if(register) {
			setSuccess(true);
		}
	}
	return (
		
		<div className={styles.container}>
			<div><ArrowBack link = "/" /></div> 
			{isAuthenticated() && <Navigate to = "/" />}
			{success && <Navigate to="/" />}
			<h1>Registrar-se</h1>
			<div className={styles.formContainer}>
				<Form>
					<Form.Group className="mb-3" >
						<Form.Label>Nome</Form.Label>
						<Form.Control type="name" onChange={(event) => {
							setName(event.target.value);
						}} placeholder="Digite seu nome" />
						<Form.Text className="text-muted">
						</Form.Text>
					</Form.Group>
					<Form.Group className="mb-3" >
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" onChange={(event) => {
							setEmail(event.target.value);
						}} placeholder="Digite seu Email" />
						<Form.Text className="text-muted">
						</Form.Text>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Senha</Form.Label>
						<Form.Control type="password" onChange={(event) => {
							setPassword(event.target.value);
						}} placeholder="Digite sua senha" />
					</Form.Group>
					<Button variant="success" onClick={handleSubmit} type="submit">
              Criar 
					</Button>
				</Form>
			</div>
		</div>
	
    
	
	);
}