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

Metódo: Post
URL: localhost:3000/auth/register
Corpo:    {
            "email": string,
            "name": string,
            "password": string
          }


<h3>Login</h3>

Metódo: Post
URL: localhost:3000/auth/authenticate
Corpo:    {
            "email": string,
            "password": string
          }

 

 <h1 align="center">
     Exames
</h1>

<h3>Verificar resultado do exame</h3>

Metódo: Post
URL: localhost:3000/exams/testExamSample
Authorization: token retornado ao criar o usuário ou ao fazer o login
Corpo:    {
            "codigo_amostra": string,
            "Cocaína": number,
            "Anfetamina": number,
            "Metanfetamina": number,
            "MDA": number,
            "MDMA": number,
            "THC": number,
            "Morfina": number,
            "Codeína": number,
            "Heroína": number,
            "Benzoilecgonina":number,
            "Cocaetileno":number,
            "Norcocaína": number
          }'


<h3>Listar Todos os resultados</h3>

Metódo: Get
Authorization: token retornado ao criar o usuário ou ao fazer o login
URL: localhost:3000/exams





