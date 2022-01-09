# TMDB-Desafio-Front-end
## Sobre o projeto
  Esse projeto é um desafio propôsto pela D1, que resumidamente consome uma API de filmes. Para a criação da interface, essas tecnologias foram utilizadas:
  - React (Vite App)
  - Typescript
  - Bootstrap
  - Axios
  - Sass
  - Eslint
  
## Layout

<p> O projeto é composto por 4 telas que se encontram na pasta pages.</p>
<details> <summary> Clique Aqui para ver o layout </summary>
  <h2>Visualizar filme</h2>
  
  ![visualizar](https://imgur.com/HfxZYX4.png) 
  
  <h2> Tela principal </h2>
  
  
  ![principal1](https://imgur.com/5VsoR8X.png) 
    
    
  ![principal2](https://imgur.com/2DrbA6e.png) 
    
    
  ![principal3](https://imgur.com/79vr7X5.png) 
  
  <h2> Registrar-se <h2>
    
  ![registrar](https://imgur.com/qT2ajY7.png)
    
  <h2> Login </h2>
  
  ![login](https://imgur.com/EwVlFrd.png)
</details>
    
    
    
    
## Como executar o projeto  
### 1 - Configurar o Backend
  Primeiro de tudo, temos que configurar backend que se encontra aqui: https://github.com/GuilhermeBarroso-sys/TMDB-Desafio-Back-end
### 2 - Configurar Variáveis de ambiente
Para executar o projeto, primeiro é preciso configurar o .env

Renomeie o arquivo .env.example para .env, logo em seguida coloque as informações necessarias, que são:
    
    1- VITE_REACT_APP_API_KEY -> É o endereço do backend
    
    2- VITE_IMAGE_URL -> Endereço de imagem do TMDB
    
<h5> obs: A Variável de ambiente VITE_IMAGE_URL já está inserida para facilitar os testes. </h5>
    
### 3 - Baixar dependências e executar o projeto
Nesse Projeto eu utilizei o yarn, então:
```ts
  yarn // Baixar dependências 
  yarn dev // Executar o projeto
```
Pronto, o projeto está rodando! <br>
  
    
Atenciosamente <br>
Guilherme
    


