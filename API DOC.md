# KOHIHIHIHI API DOCUMENTATION

## Endpoints :

List of available endpoints :

- `POST /register`
- `POST /login`
- `POST /google-login`
- `GET /beverages`
- `GET /transactions`
- `GET /payment`
- `GET /weather`

## 1. POST /register

Description :

- Add new user to database

- body =

```json
{
	"username": "string",
	"email": "string",
	"password": "string"
}
```

_Response (201 - OK)_

```json
{
	"id": "integer",
	"email": "string"
}
```

_Response (400 - Error)_

```json
{
    "message": "username must be unique"
}

OR

{
    "message": "Email has been registered!"
}
```

## 2. POST /login

Description :

- Accessing database (accessing the authentication to proceed to payment)

Request :

- body :

```json
{
	"email": "string",
	"password": "password"
}
```

_Response (200 - OK)_

```json
{
	"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY4MTM4MzM3fQ.D2I8kFsfF4LnZTjk8c9bIo__oOrXwi5qStEvWhJJ9gc",
	"email": "kohineko@mail.com"
}
```

_Response (400 - Bad Request)_
