
## Префикс `/question/`


---
### Поле `type` тип ответа, один/несколько
`"type": 1` - один ответ  
`"type": 2` - несколько ответов

### Поле `type_fill` ручной/автоматический ввод
`"type_fill": 1` - автоматический ввод `by id`  
`"type_fill": 2` - ручной ввод по значению

### Типы ответов, поле `answer` (`AnswerTypes`) при создании обновлении

`right` - правильный ответ  
`other` - все ответы

#### Автоматический ввод, `by id`
##### Один ответ
```json
{
		"right": 1,
		"other": [ 1, 2, 3, 4 ]
}
```

##### Несколько ответов
```json
{
		"right": [1, 2],
		"other": [ 1, 2, 3, 4 ]
}
```

---



### Листинг, с пагинацией

##### URL: `/question/`
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
                "test_id": 1,
                "name": "q 1",
                "type": 1,
                "type_fill": 1,
                "answer": AnswerTypes,
                "created_at": "2018-05-12 10:26:32",
                "updated_at": "2018-05-12 10:26:32"
            }
        ],
        "first_page_url": "http://localhost:8000/api/admin/question?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://localhost:8000/api/admin/question?page=1",
        "next_page_url": null,
        "path": "http://localhost:8000/api/admin/question",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

---


### Показать отдельный вопрос

##### URL: `/question/id`
##### Method: `GET`

#### Body - empty

##### Response
```json
{
    "data": {
        "test_id": 1,
        "name": "question",
        "type": 1,
        "type_fill": 1,
        "updated_at": "2018-05-12 15:00:29",
        "created_at": "2018-05-12 15:00:29",
        "id": 2,
        "answer": AnswerTypes
    }
}
```
#### Обязательные параметры URL
| name | required 
|---|---|
| id  | * 


---

### Удалить вопрос

##### URL: `/question/id`
##### Method: `DELETE`

#### Body - empty

##### Response - empty

#### Обязательные параметры URL
| name | required 
|---|---|
| id  | * 

#### Код ответа 204

___

### Создать вопрос

##### URL: `/question/`
##### Method: `POST`

#### Body
```json
{
	"test_id": 1,
	"name": "question",
	"type": 1,
	"type_fill": 1
}
```

##### Response
```json
{
    "data": {
        "name": "question 1",
        "updated_at": "2018-05-12 10:18:50",
        "created_at": "2018-05-12 10:18:50",
        "id": 1,
        "answer": AnswerTypes,
        "answers": []
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

### Обновление теста

##### URL: `/question/id`
##### Method: `PUT`

#### Body - тоже самое что и при создании
```json
{
          "name": "question 1",
          "updated_at": "2018-05-12 10:18:50",
          "created_at": "2018-05-12 10:18:50",
          "id": 1,
          "answer": AnswerTypes,
          "answers": []
}

```


##### Response
```json
{
    "data": {
        "id": 1,
        "name": "question 11",
        "created_at": "2018-05-12 10:18:50",
        "updated_at": "2018-05-12 10:21:17",
        "answers": []
    },
    "message": "api.updated"
}
```
#### Обязательные параметры URL
| name | required 
|---|---|
| id  | * 


---