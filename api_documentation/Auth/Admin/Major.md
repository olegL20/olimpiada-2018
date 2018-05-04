
## Префикс `/major/`

### Листинг, с пагинацией

##### URL: `/major/`
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
                "faculty_id": 1,
                "name": "major name 1",
                "description": "major description  1",
                "created_at": "2018-05-04 13:31:13",
                "updated_at": "2018-05-04 13:34:00"
            },
            {
                "id": 2,
                "faculty_id": 2,
                "name": "major name 2",
                "description": "major description  2",
                "created_at": "2018-05-04 13:31:13",
                "updated_at": "2018-05-04 13:34:00"
            }
        ],
        "first_page_url": "http://olimpiada.test/api/auth/major?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://olimpiada.test/api/auth/major?page=1",
        "next_page_url": null,
        "path": "http://olimpiada.test/api/auth/major",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

---


### Показать отдельную специальность

##### URL: `/major/id`
##### Method: `GET`

#### Body - empty

##### Response
```json
{
    "data": {
        "id": 2,
        "faculty_id": 1,
        "name": "major name 1",
        "description": "major description  1",
        "created_at": "2018-05-04 13:31:13",
        "updated_at": "2018-05-04 13:34:00"
    }
}
```
#### Обязательные параметры URL
| name | required 
|---|---|
| id  | * 


---

### Удалить специальность

##### URL: `/major/id`
##### Method: `DELETE`

#### Body - empty

##### Response - empty

#### Обязательные параметры URL
| name | required 
|---|---|
| id  | * 

#### Код ответа 204

___

### Создать специальность

##### URL: `/major/`
##### Method: `POST`

#### Body
```json
{
	"name": "major name",
	"description": "major description",
	"faculty_id": 1
}
```

##### Response
```json
{
    "data": {
        "name": "major name",
        "description": "major description",
        "faculty_id": "1",
        "updated_at": "2018-05-04 13:31:13",
        "created_at": "2018-05-04 13:31:13",
        "id": 2
    },
    "message": "api.major_created"
}
```
#### Параметры body
| name | required | дополнительно
|---|---|---|
| name  | *  | |
| description  |  | |




---

### Обновление специальности

##### URL: `/major/id`
##### Method: `PUT`

#### Body - тоже самое что и при создании

##### Response
```json
{
    "data": {
        "id": 2,
        "faculty_id": "1",
        "name": "major name 1",
        "description": "major description  1",
        "created_at": "2018-05-04 13:31:13",
        "updated_at": "2018-05-04 13:34:00"
    },
    "message": "api.major_created"
}
```
#### Обязательные параметры URL
| name | required 
|---|---|
| id  | * 


---