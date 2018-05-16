
## Префикс `/score/`

### Записать данные пользователя о баллах

##### URL: `/score/`
##### Method: `POST`

#### Body - empty
```json
{
	"average_score_school": 11.6,
	"additional_courses": 102,
	"subjects_score": [
		{
			"name": "Subject1",
			"score": 10
		},
		{
			"name": "Subject2",
			"score": 12
		},
		{
			"name": "Subject3",
			"score": 7
		}
	]
}
```

##### Response
```json
{
  "data": {
          	"average_score_school": 11.6,
          	"additional_courses": 102,
          	"subjects_score": [
          		{
          			"name": "Subject1",
          			"score": 10
          		},
          		{
          			"name": "Subject2",
          			"score": 12
          		},
          		{
          			"name": "Subject3",
          			"score": 7
          		}
          	]
          }
}
```

#### Response
```json
{
    "data": {
        "additional_courses": 102,
        "subjects_score": [
            {
                "name": "Subject1",
                "score": 10
            },
            {
                "name": "Subject2",
                "score": 12
            },
            {
                "name": "Subject3",
                "score": 7
            }
        ],
        "user_id": 24,
        "average_score_zno": 11.6,
        "summary": 165.5,
        "id": 1
    },
    "message": "api.score_updated"
}
```

#### Возможные ошибки
| name | why 
|---|---|
| 400  | api.score_exists


---


### Показать оценки пользователя при заполнении

##### URL: `/score/`
##### Method: `GET`

#### Body - empty

##### Response
```json
{
    "data": {
        "additional_courses": 102,
        "subjects_score": [
            {
                "name": "Subject1",
                "score": 10
            },
            {
                "name": "Subject2",
                "score": 12
            },
            {
                "name": "Subject3",
                "score": 7
            }
        ],
        "user_id": 24,
        "average_score_zno": 11.6,
        "summary": 165.5,
        "id": 1
    }
}
```