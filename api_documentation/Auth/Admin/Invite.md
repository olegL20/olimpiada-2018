### Приглашение админа университета по email

##### URL: `/send-invite/`
##### Method: `POST`
        
#### Body
```json
{
	"email": "email@gmail.com",
	"university_id": 2
}
```

##### Response ( может измениться, удалю лишнее )
```json
{
    "data": {
        "email": "email@gmail.com",
        "university_id": 2,
        "name": "api.tutor_text",
        "invite": {
            "invite_code": "fdLUGu06OkzGfPO",
            "university_id": 2,
            "updated_at": "2018-05-04 06:36:06",
            "created_at": "2018-05-04 06:36:06",
            "id": 1
        },
        "university": {
            "id": 2,
            "name": "name1",
            "position": {
                "lat": 30.12313,
                "lng": 30.1231233
            },
            "description": "description",
            "created_at": "2018-05-02 16:44:08",
            "updated_at": "2018-05-02 17:00:50",
            "address": "address1",
            "zip_code": "5555",
            "email": "emai1@g.com",
            "phone": "4234234234",
            "site": "site1.com",
            "parent_id": null,
            "image": {
                "id": 11,
                "source": "https://dl.dropboxusercontent.com/apitl/1/AAD78MpI0Qzm1aZC7V56LrFwuo8rtC5BE9DLLqap967puN3bAwIViQ0H8v2GZiMWNb0re6W2HY1yFLZAmK-e7ImBwqMF-LYKgnKJRxr1fMoyN3io2nvS9K87Iu7c63IcpwitJ6vAku3Crlq2kXYPPjGXvgKHPC8pBVDa3KXWM-PCd2uKzUqL1jejY0aNCU25WvjY7Y7I6VOL7gZcYrbL1HMFwqfTVEalhVPQyEq2RDKHCUSRMiN6vjl390abva-yMmtmJLdNXW-y-fv4xtJM1MQp",
                "type": "image"
            },
            "document": null
        }
    },
    "message": "api.invite_created"
}
```
#### Обязательные параметры body
| name | required 
|---|---|
| email  | * 
| university_id  | * 

#### Возможные ошибки
| code | description 
|---|---|
| 400  | invite_by_email_exists

---



### Ассоциация админа универа с универом

##### URL: `/associate/`
##### Method: `POST`
        
#### Body
```json
{
	"user_id": 56,
	"university_id": 2
}
```

##### Response
```json
{
    "message": "api.associated"
}
```
#### Обязательные параметры body
| name | required 
|---|---|
| user_id  | * 
| university_id  | * 

