import { createContext, ReactNode, useEffect, useState } from "react";
interface LanguageContextData {
	language: string;
	setLanguage : (value : string) => void;
	getLanguage: () => string;
	storageLanguage: (language: string) => void;
}
type AuthProvider = {
	children: ReactNode;
}

export const LanguageContext = createContext({} as LanguageContextData);
export function HandleLanguage(props : AuthProvider) {
	function storageLanguage(language: string) {
		localStorage.setItem('@desafioD1:language', language);
	}
	const [language, setLanguage] = useState('');
	function getLanguage() {
		const language = localStorage.getItem('@desafioD1:language');
		if(!language) {
			storageLanguage('pt-BR');
			setLanguage('pt-BR');
			return 'pt-BR';
		}
		return language;
	}
	useEffect(() => {
		getLanguage();
	},[]);
  
	return (
		<LanguageContext.Provider value = {{language,setLanguage, getLanguage, storageLanguage}}>
			{props.children}
		</LanguageContext.Provider>
	);
}