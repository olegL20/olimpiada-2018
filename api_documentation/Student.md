### Get info about student

##### URL: `/api/auth/student`
##### Method: `GET`

#### Body

```json
{
	"user_id": "1"
}
```
##### Request:
| param            | required |
| ---------------- | -------- |
| user_id          |          | if user_id == null get all students;


##### Response:
```json
{
    "message": "api.studentReceived",
    "data": {
        "id": 1,
        "name": "q",
        "surname": "surname",
        "email": "q@q.com",
        "role": "user",
        "uuid": null,
        "birthday": null,
        "created_at": "2018-04-25 16:17:04",
        "updated_at": "2018-04-25 16:17:04",
        "provider": null
    }
}
```

#### Possible error codes
| code | message                          | reason                                  | 
| ---- | -------------------------------- | --------------------------------------- |
| 404  | api.usersWithRoleStudentNotFound | Користувачі з роллю студент не знайдені |


---


### Put info about student

##### URL: `/api/auth/student`
##### Method: `PUT`

#### Body

```json
{
	"user_id": "1",
	"email": "user1@olimpiada.com",                 
    "birthday": "2018-06-02",           
    "password": "12345678",              
    "password_confirmation": "12345678", 
	"uuid":"108293588882954133790",                  
    "provider": "google"  
}
```
##### Request:
| param                 | required |
| --------------------- | -------- |
| user_id               | *        | 
| email                 |          | 
| birthday              |          | 
| password              |          | 
| password_confirmation |          | 
| uuid                  |          | 
| provider              |          | 


##### Response:
```json
{
    "message": "api.studentDataСhanged",
    "status": 1
}
```

#### Possible error codes
| code | message          | reason                  | 
| ---- | ---------------- | ----------------------- |
| 404  | api.userNotFound | Користувач не знайдений |


---
