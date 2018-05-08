
 - [Authentication](Authentication.md)  
 - [Invite](Invite.md)  


Защищенные роуты
 - Admin prefix `admin`
     - [University](Auth/Admin/University.md) 
     - [Faculty](Auth/Admin/Faculty.md) 
     - [Invite](Auth/Admin/Invite.md) 
 - User prefix `user`
     - [University](Auth/User/University.md) 


### Типы ответов

---


#### Общий ответ
```json
{
    "message": "message",
    "data": {},
    "errors": {
        "email": [
            "The email has already been taken."
        ]
    }
}
```
| field | required  | description  | 
|---|---|---|
| data  |   | данные  |
| message  | *  |  сообщение, может быть локализировано или как ключ локализации на фронте |
| errors  |   |  ошибки, пример ниже |


___


#### Роуты только для аутентифицированных пользователей
Слать запросы нужно только с заголовком `Authorization`

Токен получаем с роута `auth/signin` у поле `token`

Пример
```text
Content-Type:application/json
Accept:application/json
Authorization:Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI5LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvc2lnbmluIiwiaWF0IjoxNTI1Mjc4NTk5LCJleHAiOjE1MjUzNjQ5OTksIm5iZiI6MTUyNTI3ODU5OSwianRpIjoiRjIwME5SeFhwTDhKMEk0ayJ9.2tcwjCK507v0qd3PYaooT7Y9LPTJmhhe7cmzFLhXQuQ
```

---

#### Валидация

##### Code 422
##### Response example
```json
{
    "message": "The given data was invalid.",
    "errors": {
        "email": [
            "The email has already been taken."
        ]
    }
}
```