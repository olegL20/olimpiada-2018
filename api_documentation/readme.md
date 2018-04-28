
[Authentication](Authentication.md)  


### Типы ответов

---


#### Общий ответ
```json
{
    "message": "message",
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