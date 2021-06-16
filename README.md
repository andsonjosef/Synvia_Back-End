# Synvia_Back-End

# Instalação

1. Clone este repositório
2. Excute o comando npm install
3. Execute o comando npm run dev

# Uso

<h1 align="center">
     Usuário
</h1>

<h3>Cadastro</h3>

<b>Metódo:</b> Post<br>
<b>URL:</b> localhost:3000/auth/register<br>
<b>Corpo:</b>    {<br>
            "email": string,<br>
            "name": string,<br>
            "password": string<br>
          }


<h3>Login</h3>

<b>Metódo:</b> Post<br>
<b>URL:</b> localhost:3000/auth/authenticate<br>
<b>Corpo:</b>    {<br>
            "email": string,<br>
            "password": string<br>
          }

 

 <h1 align="center">
     Exames
</h1>

<h3>Verificar resultado do exame</h3>

<b>Metódo:</b> Post<br>
<b>URL:</b> localhost:3000/exams/testExamSample<br>
<b>Authorization:</b> token retornado ao criar o usuário ou ao fazer o login<br>
<b>Corpo:</b>    {<br>
            "codigo_amostra": string,<br>
            "Cocaína": number,<br>
            "Anfetamina": number,<br>
            "Metanfetamina": number,<br>
            "MDA": number,<br>
            "MDMA": number,<br>
            "THC": number,<br>
            "Morfina": number,<br>
            "Codeína": number,<br>
            "Heroína": number,<br>
            "Benzoilecgonina":number,<br>
            "Cocaetileno":number,<br>
            "Norcocaína": number<br>
          }'


<h3>Listar Todos os resultados</h3>

<b>Metódo:</b> Get<br>
<b>Authorization:</b> token retornado ao criar o usuário ou ao fazer o login<br>
<b>URL:</b> localhost:3000/exams<br>





