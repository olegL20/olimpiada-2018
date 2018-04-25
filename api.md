### /student

Method: `GET`

Request:

| param            | required |
| ---------------- | -------- |
| user_id          |          | if user_id == null get Auth::user();

Response:

```json
{
    "status": 1,
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

### /student

Method: `PUT`

Request:

| param            | required |
| ---------------- | -------- |
| user_id          |          | if Auth::user()->role == ROLE_UNIVERSITY_ADMIN field requred
| birthday         |          | 

Response:

```json
{
    "status": 1
}
```