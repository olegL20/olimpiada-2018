
### Записать данные пользователя о баллах

##### URL: `/test/answer/`
##### Method: `POST`

#### Body
 - ##### Один ответ, автоматический ввод
    ```json
    {
      "question_id": 1,
      "answer": 1
    }
    ```
 - ##### Один ответ, ручной ввод
    ```json
    {
      "question_id": 1,
      "answer": "answer 1"
    }
    ```
 - ##### Несколько ответов, автоматический ввод
    ```json
    {
      "question_id": 1,
      "answer": [1, 2]
    }
    ```
 - ##### Несколько ответов, ручной ввод
    ```json
    {
      "question_id": 1,
      "answer": ["answer 1", "answer 2"]
    }
    ```

##### Response
```json
{
	
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


### Показать результаты тестов

##### URL: `/test/score/`
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