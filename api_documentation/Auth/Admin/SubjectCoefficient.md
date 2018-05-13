
## Префикс `/subjects-coefficients/`

### Листинг, с пагинацией

##### URL: `/subjects-coefficients/`
##### Method: `GET`

#### Body - empty

##### Response
```json
{
    "data": {
        "current_page": 1,
        "data": [
          {
              "id": 2,
              "name": "name1",
              "major_id": 1,
              "coefficient": 0.50
          }
        ],
        "first_page_url": "http://localhost:8000/api/admin/subjects-coefficients?page=1",
        "from": null,
        "last_page": 1,
        "last_page_url": "http://localhost:8000/api/admin/subjects-coefficients?page=1",
        "next_page_url": null,
        "path": "http://localhost:8000/api/admin/subjects-coefficients",
        "per_page": 15,
        "prev_page_url": null,
        "to": null,
        "total": 0
    }
}
```

---


### Показать отдельный коэффициент

##### URL: `/subjects-coefficients/id`
##### Method: `GET`

#### Body - empty

##### Response
```json
{
              "id": 2,
              "name": "name1",
              "major_id": 1,
              "coefficient": 0.50
}
```
#### Обязательные параметры URL
| name | required 
|---|---|
| id  | * 


---

### Удалить коэффициент

##### URL: `/subjects-coefficients/id`
##### Method: `DELETE`

#### Body - empty

##### Response - empty

#### Обязательные параметры URL
| name | required 
|---|---|
| id  | * 

#### Код ответа 204

___

### Создать коэффициент

##### URL: `/subjects-coefficients/`
##### Method: `POST`

#### Body

```json
{
              "name": "name1",
              "major_id": 1,
              "coefficient": 0.50
}
```
##### Response
```json
{
              "id": 2,
              "name": "name1",
              "major_id": 1,
              "coefficient": 0.50
          }
```
#### Параметры body
| name | required | дополнительно
|---|---|---|
| name  | *  | |
| coefficient  |  | |
| major_id  | *  | |




---

### Обновление университета

##### URL: `/subjects-coefficients/id`
##### Method: `PUT`

#### Body - тоже самое что и при создании

##### Response
```json
{
              "id": 2,
              "name": "name1",
              "major_id": 1,
              "coefficient": 0.50
          }
```
#### Обязательные параметры URL
| name | required 
|---|---|
| id  | * 


---