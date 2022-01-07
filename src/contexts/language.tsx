import { createContext, ReactNode } from "react";
interface LanguageContextData {
	getLanguage: () => string;
	storageLanguage: (language: string) => void;
}
type AuthProvider = {
	children: ReactNode;
}

export const LanguageContext = createContext({} as LanguageContextData);
export function HandleLanguage(props : AuthProvider) {
	function getLanguage() {
		const language = localStorage.getItem('@desafioD1:language');
		if(!language) {
			localStorage.setItem('@desafioD1:language', 'pt-BR');
			return 'pt-BR';
		}
		return language;
	}
	function storageLanguage(language: string) {
		localStorage.setItem('@desafioD1:language', language);
	}
 
	return (
		<LanguageContext.Provider value = {{getLanguage, storageLanguage}}>
			{props.children}
		</LanguageContext.Provider>
	);
}