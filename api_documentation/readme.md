
[Authentication](Authentication)  


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

[Student](Student)  


### Types response

---


#### General response
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
| field   | required  | description                                                     | 
| ------- | --------- | --------------------------------------------------------------- |
| data    |           | data                                                            |       
| message | *         | message, can be localized or as a localization key at the front |
| errors  |           | errors, example below                                           |


---

#### Validation

##### Code 422
##### Response example
```json
{
    "message": "The given data was invalid.",
    "errors": {
        "user_id": [
            "The user id field is required."
        ]
    }
}
```
