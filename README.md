# Introducao-Apps-com-Next

## Repositório explicando sobre o Next

![Banner_Next](https://miro.medium.com/max/966/1*8g-FaXXbEUFP11oZD1kfaA.jpeg)

O Next é um framework criado para desenvolver de forma simples aplijcações com React, para desenvolver uma aplicação 
com Next é necessário ter instalado em seu sistema operacional o NodeJS. Trabalhar com Next é super easy! A vantagem é que não existe restrição sobre as plataformas, pois, o Node é multiplataforma. 
Para criar um projeto no Next vamos criar uma pasta com nome projeto_next, feito isso vamos abrir a pasta no terminal e criar um package.json. O nosso arquivo package pode ser criado a partir do seguinte comando: npm init -y, após digitado o comando clique enter e preencha as informações que o terminal irá pedir. Podemos agora instalar o React, React Dom e o Next, para isso é importante está dentro da pasta da aplicação no terminal ou linha de comando do Windows, caso esteja tudo ok, você deverá mandar esse comando: 

```Comando para executar no terminal, CMD ou PowerShell
npm install --save react react-dom next
```
 Aguarde até que os pacotes estejam todos instalados. Após a instalação concluída crie um diretório chamado pages, ele será responsável por guardar nossas páginas. Abra o package.json e substitua as linhas do script pelas seguintes:

```Código do Package.json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```
Nossa etapa de configuração está concluída. Para iniciar um servidor basta executar o seguinte comando no terminal:

```
npm run dev
```
Em seguida, abra http://localhost:3000 no seu navegador. Ao abrir o endereço você deve ter notado que foi aprensentado uma tela de erro não é? Isso acontece devido a falta de conteúdos, vamos então criar nossa primeira página. Vamos criar um arquivo dentro do diretório pages chamado index.js e dentro dele colocaremos o seguinte código:

``` Código JavaScript
export default function Index() {
  return (
    <div>
      <p>Funcionou!</p>
    </div>
  );
}
```
