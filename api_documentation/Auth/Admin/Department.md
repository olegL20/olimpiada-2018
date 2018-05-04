
## Префикс `/department/`

### Листинг, с пагинацией

##### URL: `/department/`
##### Method: `GET`

#### Body - empty

##### Response
```json
{
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 3,
                "name": "department 1",
                "description": "department description 1",
                "created_at": "2018-05-04 09:49:46",
                "updated_at": "2018-05-04 09:49:46"
            },
            {
                "id": 4,
                "name": "department 2",
                "description": "department description 2",
                "created_at": "2018-05-04 09:49:47",
                "updated_at": "2018-05-04 09:49:47"
            }
        ],
        "first_page_url": "http://olimpiada.test/api/auth/department?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://olimpiada.test/api/auth/department?page=1",
        "next_page_url": null,
        "path": "http://olimpiada.test/api/auth/department",
        "per_page": 15,
        "prev_page_url": null,
        "to": 2,
        "total": 2
    }
}
```

---


### Показать отдельную кафедру

##### URL: `/department/id`
##### Method: `GET`

#### Body - empty

##### Response
```json
{
    "data": {
        "id": 3,
        "name": "department,",
        "description": "department description 1",
        "created_at": "2018-05-04 09:49:46",
        "updated_at": "2018-05-04 09:49:46"
    }
}
```
#### Обязательные параметры URL
| name | required 
|---|---|
| id  | * 


---

### Удалить кафедру

##### URL: `/department/id`
##### Method: `DELETE`

#### Body - empty

##### Response - empty

#### Обязательные параметры URL
| name | required 
|---|---|
| id  | * 

#### Код ответа 204

___

### Создать кафедру

##### URL: `/department/`
##### Method: `POST`

#### Body
```json
{
	"name":"department name",
	"description":"department description"
}
```

##### Response
```json
{
    "data": {
        "name": "department,",
        "description": "department description 1",
        "updated_at": "2018-05-04 13:23:49",
        "created_at": "2018-05-04 13:23:49",
        "id": 5
    },
    "message": "api.department_created"
}
```
#### Параметры body
| name | required | дополнительно
|---|---|---|
| name  | *  | |
| description  |  | |




---

### Обновление кафедры

##### URL: `/department/id`
##### Method: `PUT`

#### Body - тоже самое что и при создании

##### Response
```json
{
    "data": {
        "id": 3,
        "name": "department name",
        "description": "department description",
        "created_at": "2018-05-04 09:49:46",
        "updated_at": "2018-05-04 13:25:27"
    },
    "message": "api.department_update"
}
```
#### Обязательные параметры URL
| name | required 
|---|---|
| id  | * 


---