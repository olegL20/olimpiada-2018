### Список инвайтов
##### URL: `/invites/`
##### Method: `GET`
Поля:  
Если есть `user` - привязан уже к универу  
Если есть `invite` - приглашение отправлено  
Нету ни `user`, `invite` никого не приглашали  

#### Body - empty
#### Response
```json
{
    "data": {
        "current_page": 1,
        "data": [
            {
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
                    "source": "https://dl.dropboxusercontent.com/apitl/1/AACItOQ796eQ768KAc5PsKvU2y5Kzxd9wZn6No0ctzTT66w8k018_P8s8V7cQTOlzFVPTsCz5GUY9_yWQ43qWalUlu6BrM7iici9ntAiJqotctCVs5hRNBLQvaOaMMrlmSSM6NrL339tmXdQ5yQlbl26n_g-CTntTucHqcBfNcLDm1N9ATCWnONp_jOExTkEk9CzgRIG4v88rXiuyIkpZmt8Tewen9FKb7TAU9IaqbG454nMdTVt5N74KXp5vszVInxfyKaxsZf3h0xBG-e9sx97",
                    "type": "image"
                },
                "document": null,
                "invite": {
                    "id": 3,
                    "invite_code": "tbuCAVbyRDrHxjz",
                    "university_id": 2,
                    "created_at": "2018-05-04 08:19:37",
                    "updated_at": "2018-05-04 08:19:37",
                    "email": "jashkasoft@gmail.com"
                },
                "user": {
                    "id": 56,
                    "name": "admin university",
                    "surname": "surname admin universiyt",
                    "email": "jashkasoft@gmail.com",
                    "role": "uni_admin",
                    "uuid": null,
                    "birthday": "2018-01-01",
                    "created_at": "2018-05-04 08:30:35",
                    "updated_at": "2018-05-04 10:48:34",
                    "provider": null,
                    "confirmed": 1,
                    "extramula": null,
                    "university_id": 2,
                    "image": {
                        "id": 21,
                        "source": "https://dl.dropboxusercontent.com/apitl/1/AAAKkL54WsL3jL1MoFlcXNiOxIazxzcF3mXyD8Vr45lJjuojzHe3Vzi8AYZH1Xvqjx1SkCJJBsX-6EqRXhYmlLux5P4f_w6erNRWZmRW1QB3_hAHUHGeGYySSkdMDh_Y9svlCW-mei5Pk1Col29h5AsoJWZ452v48EI7aOwtl7IhRx86OIWrG-Mmtb57fSkPThgJPr9DS7RAmGSUOz0YdHOrfF6e5qTS5awFItrvmu59xx38B0U3nsv-frAV-6zBggebYX-OfaUDpWWlQOZSFv9y",
                        "type": "image"
                    }
                }
            },
            {
                "id": 3,
                "name": "University",
                "position": {
                    "lat": 30.12313,
                    "lng": 30.1231233
                },
                "description": null,
                "created_at": "2018-05-02 17:02:28",
                "updated_at": "2018-05-02 17:02:28",
                "address": "address",
                "zip_code": "13123",
                "email": "nostresss7721123@gmail.com",
                "phone": "2342384823423",
                "site": "site.com",
                "parent_id": null,
                "image": null,
                "document": null,
                "invite": null,
                "user": null
            },
            {
                "id": 4,
                "name": "University",
                "position": {
                    "lat": 30.12313,
                    "lng": 30.1231233
                },
                "description": null,
                "created_at": "2018-05-02 18:23:37",
                "updated_at": "2018-05-02 18:23:37",
                "address": "address",
                "zip_code": "13123",
                "email": "nostresss7721123@gmail.com",
                "phone": "2342384823423",
                "site": "site.com",
                "parent_id": null,
                "image": null,
                "document": null,
                "invite": null,
                "user": null
            },
            {
                "id": 5,
                "name": "University",
                "position": {
                    "lat": 30.12313,
                    "lng": 30.1231233
                },
                "description": null,
                "created_at": "2018-05-02 18:38:42",
                "updated_at": "2018-05-02 18:38:42",
                "address": "address",
                "zip_code": "13123",
                "email": "nostresss7721123@gmail.com",
                "phone": "2342384823423",
                "site": "site.com",
                "parent_id": null,
                "image": {
                    "id": 14,
                    "source": "https://dl.dropboxusercontent.com/apitl/1/AABDBIic6lo2uc_sIltiwHSADSXhUdH_rS8H4IaWNz3r5cMGFs8n6MOymrS___NsP_q7CMCBnPnGOCEBuhqGPy5c1__L8hQN9G0Rie4pHxaP8gzJcWTsn-kxbPI0phiZA8-X80q5YyYqiAjGnEKVxEn_1jtpEQwpRLInpPk2HbnqU_uBqYWXrr10teYs6ht0PRJXo-MenO9l1sFYPKbWGNax3lyAC8Ro-Iv8qG8X8f9cgXPjo83EQlOThn2UAXlxB8RjrkhJzH21OQhhaQ2ljrus",
                    "type": "image"
                },
                "document": null,
                "invite": null,
                "user": null
            }
        ],
        "first_page_url": "http://localhost:8000/api/admin/invites?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://localhost:8000/api/admin/invites?page=1",
        "next_page_url": null,
        "path": "http://localhost:8000/api/admin/invites",
        "per_page": 15,
        "prev_page_url": null,
        "to": 4,
        "total": 4
    }
}
```

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

