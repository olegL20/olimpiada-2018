
## Префикс `/answer/`

### Листинг, с пагинацией

##### URL: `/answer/`
##### Method: `GET`

#### Body - empty

##### Response
```json
{
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "name": "answer 1",
                "question_id": 1,
                "created_at": "2018-05-12 10:18:50",
                "updated_at": "2018-05-12 10:18:50"
            }
        ],
        "first_page_url": "http://localhost:8000/api/admin/answer?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://localhost:8000/api/admin/answer?page=1",
        "next_page_url": null,
        "path": "http://localhost:8000/api/admin/answer",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

---


### Показать отдельный ответ

##### URL: `/answer/id`
##### Method: `GET`

#### Body - empty

##### Response
```json
{
    "data": {
                "id": 1,
                "name": "answer 1",
                "question_id": 1,
                "created_at": "2018-05-12 10:18:50",
                "updated_at": "2018-05-12 10:18:50"
    }
}
```
#### Обязательные параметры URL
| name | required 
|---|---|
| id  | * 


---

### Удалить ответ

##### URL: `/answer/id`
##### Method: `DELETE`

#### Body - empty

##### Response - empty

#### Обязательные параметры URL
| name | required 
|---|---|
| id  | * 

#### Код ответа 204

___

### Создать ответ

##### URL: `/answer/`
##### Method: `POST`

#### Body
```json
{
                "name": "answer 1",
                "question_id": 1

}
```

##### Response
```json
{
    "data": {
                "id": 1,
                "name": "answer 1",
                "question_id": 1,
                "created_at": "2018-05-12 10:18:50",
                "updated_at": "2018-05-12 10:18:50"
    },
    "message": "api.created"
}
```
#### Параметры body
| name | required | дополнительно
|---|---|---|
| name  | *  | |
| description  |  | |




---

### Обновление ответа

##### URL: `/answer/id`
##### Method: `PUT`

#### Body - тоже самое что и при создании

##### Response
```json
{
    "data": {
                "id": 1,
                "name": "answer 1",
                "question_id": 1,
                "created_at": "2018-05-12 10:18:50",
                "updated_at": "2018-05-12 10:18:50"
    },
    "message": "api.updated"
}
```
#### Обязательные параметры URL
| name | required 
|---|---|
| id  | * 


---