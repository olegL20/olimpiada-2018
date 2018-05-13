
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

#### Body
```json
{
    "answer": "Выше пример как должно быть",
    "question_id": 1
}
```

#### Response
```json
{
            "id": 3,
            "user_id": 24,
            "test_id": 2,
            "question_id": 1,
            "answer": {
                "userSelected": 3,
                "rightAnswer": 3
            },
            "result": true,
            "created_at": "2018-05-12 10:26:32",
            "updated_at": "2018-05-12 10:26:32"
}
```

#### Возможные ошибки
| code | why 
|---|---|
| 400  | api.answered


---


### Показать результаты тестов ( все варианты ниже )

##### URL: `/test/score/`
##### Method: `GET`

#### Body - empty

##### Response
```json
{
    "data": [
        {
            "id": 3,
            "user_id": 24,
            "test_id": 2,
            "question_id": 1,
            "answer": {
                "userSelected": 3,
                "rightAnswer": 3
            },
            "result": true,
            "created_at": "2018-05-12 10:26:32",
            "updated_at": "2018-05-12 10:26:32"
        },
        {
            "id": 4,
            "user_id": 24,
            "test_id": 2,
            "question_id": 3,
            "answer": {
                "userSelected": 3,
                "rightAnswer": 3
            },
            "result": true,
            "created_at": "2018-05-12 10:26:32",
            "updated_at": "2018-05-12 10:26:32"
        },
        {
            "id": 5,
            "user_id": 24,
            "test_id": 2,
            "question_id": 4,
            "answer": {
                "userSelected": [
                    3,
                    4,
                    5
                ],
                "rightAnswer": [
                    3,
                    4
                ]
            },
            "result": true,
            "created_at": "2018-05-12 10:26:32",
            "updated_at": "2018-05-12 10:26:32"
        },
        {
            "id": 6,
            "user_id": 24,
            "test_id": 2,
            "question_id": 5,
            "answer": {
                "userSelected": [
                    3,
                    4
                ],
                "rightAnswer": [
                    3,
                    4
                ]
            },
            "result": true,
            "created_at": "2018-05-12 10:26:32",
            "updated_at": "2018-05-12 10:26:32"
        }
    ]
}
```