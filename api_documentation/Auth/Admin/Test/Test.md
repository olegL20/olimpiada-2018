
## Префикс `/test/`

### Листинг, с пагинацией

##### URL: `/test/`
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
                "name": "Test 1",
                "created_at": "2018-05-12 10:18:50",
                "updated_at": "2018-05-12 10:18:50"
            }
        ],
        "first_page_url": "http://localhost:8000/api/admin/test?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://localhost:8000/api/admin/test?page=1",
        "next_page_url": null,
        "path": "http://localhost:8000/api/admin/test",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

---


### Показать отдельный тест

##### URL: `/test/id`
##### Method: `GET`

#### Body - empty

##### Response
```json
{
    "data": {
                "id": 1,
                "name": "Test 1",
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

### Удалить тест

##### URL: `/test/id`
##### Method: `DELETE`

#### Body - empty

##### Response - empty

#### Обязательные параметры URL
| name | required 
|---|---|
| id  | * 

#### Код ответа 204

___

### Создать тест

##### URL: `/test/`
##### Method: `POST`

#### Body
```json
{
	"name": "Test 1"
}
```

##### Response
```json
{
    "data": {
        "name": "Test 1",
        "updated_at": "2018-05-12 10:18:50",
        "created_at": "2018-05-12 10:18:50",
        "id": 1,
        "questions": []
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

##### URL: `/test/id`
##### Method: `PUT`

#### Body - тоже самое что и при создании

##### Response
```json
{
    "data": {
        "id": 1,
        "name": "Test 11",
        "created_at": "2018-05-12 10:18:50",
        "updated_at": "2018-05-12 10:21:17",
        "questions": []
    },
    "message": "api.updated"
}
```
#### Обязательные параметры URL
| name | required 
|---|---|
| id  | * 


---