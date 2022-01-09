import { FormEvent, useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { ArrowBack } from "../ArrowBack";
import styles from './styles.module.scss';
export function LoginScreen() {
	const {signIn } = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const {isAuthenticated} = useContext(AuthContext);
	const [success, setSuccess] = useState(false);
	async function handleSubmit(event : FormEvent) {
		event.preventDefault();
		const authenticated = await signIn({email,password});
		if(authenticated) {
			setSuccess(true);
		}
	}
	return (
		<div className={styles.container}>
			<div><ArrowBack link = "/" /></div> 
			{success && <Navigate to="/" />}
			{isAuthenticated() && <Navigate to = "/" />}
			<h1>Entrar</h1>
			<div className={styles.formContainer}>
				<Form>
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
              Enviar
					</Button>
				</Form>
			</div>
		</div>
	
	);
}