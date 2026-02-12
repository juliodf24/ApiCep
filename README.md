# ApiCep

 **ApiCep** é um projeto simples em **Node.js com TypeScript** que realiza consultas de CEP utilizando a **BrasilAPI (CEP)**.

O objetivo principal deste projeto é **consultar a BrasilAPI e adaptar o retorno** para o **mesmo formato de resposta utilizado por um sistema interno corporativo previamente existente.**, permitindo que a aplicação consuma dados consistentes durante o desenvolvimento.

Dessa forma, a aplicação pode ser desenvolvida e testada localmente utilizando o mesmo contrato de resposta esperado em produção, sem a necessidade de consumir diretamente APIs produtivas ou internas da empresa.

---

## Funcionalidades

* Consulta de endereço por CEP
* Retorno dos dados em formato JSON
* Estrutura simples e organizada
* Ideal para estudos de API REST

---

## Tecnologias Utilizadas

* **Node.js**
* **TypeScript**
* **Express**

---

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

* Node.js (v14 ou superior)
* npm ou yarn

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/juliodf24/ApiCep.git
cd ApiCep
```

Instale as dependências:

```bash
npm install
```

---

## Executando o projeto

Para rodar o projeto em ambiente de desenvolvimento:

```bash
npm run test
```

Para rodar em produção:

```bash
npm run build
npm start
```

---

## Exemplo de uso
> **Observação:** Os campos `"tipoCep": "logradouro"` e `"subTipoCep": "D"` possuem **valores fixos**, pois a **BrasilAPI não retorna essas informações**. Esses campos são incluídos apenas para manter compatibilidade com o contrato de resposta esperado pelo sistema interno.

### Requisição

```http
GET /cep/01001000
```

### Resposta

```json
{
  "success": true,
  "msg": "Consulta realizada com sucesso.",
  "data": {
    "cep": "01001000",
    "tipoCep": "logradouro",
    "subTipoCep": "D",
    "uf": "SP",
    "cidade": "São Paulo",
    "bairro": "Sé",
    "endereco": "Praça da Sé",
    "complemento": "",
    "codigoIBGE": ""
  }
}
```

---

## Docker 

Para utilizar o docker execute:

```bash
docker build -t apicep .
docker run -p 3333:3333 apicep
```

---
## Autor

Desenvolvido por **Julio**
🔗 GitHub: [https://github.com/juliodf24](https://github.com/juliodf24)