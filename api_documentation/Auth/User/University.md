
## Префикс `/university/`

### Листинг университетов

##### URL: `/university/`
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
              "position": {"lat": 31.123981293, "lng": 30.12381233},
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
                  "source": "https://dl.dropboxusercontent.com/apitl/1/AACjPNKlBuICJXQsIZdWyLrJu0y-cSKQ8WN_I-iMhS_qYnVfXehUd9t4hcolbRAEYBj_hH0umB_1L61t8bTc-GBa9j98LH1m-ChJX-UXH1Zrm3gtWgnWIfl2nC-cFjjCtefqjqubiiw6Gk_6R48qEkjDKYAdUkyotX7oUzBMz6S8RGjt7LIRAd3E0nCUZDtObef1kq_GmfJTpQZpHifbe9HpKy05Fx5NSIkrjmYdoXl3_EGqWGyrkDCdjE7LJTfq4jDkPmySpRSijZmOVVIlus17",
                  "type": "image"
              },
              "document": null
          }
        ]
    }
}
```

---


### Показать отдельный университет

##### URL: `/university/id`
##### Method: `GET`

#### Body - empty

##### Response
```json
{
              "id": 2,
              "name": "name1",
              "position": {"lat": 31.123981293, "lng": 30.12381233},
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
                  "source": "https://dl.dropboxusercontent.com/apitl/1/AACjPNKlBuICJXQsIZdWyLrJu0y-cSKQ8WN_I-iMhS_qYnVfXehUd9t4hcolbRAEYBj_hH0umB_1L61t8bTc-GBa9j98LH1m-ChJX-UXH1Zrm3gtWgnWIfl2nC-cFjjCtefqjqubiiw6Gk_6R48qEkjDKYAdUkyotX7oUzBMz6S8RGjt7LIRAd3E0nCUZDtObef1kq_GmfJTpQZpHifbe9HpKy05Fx5NSIkrjmYdoXl3_EGqWGyrkDCdjE7LJTfq4jDkPmySpRSijZmOVVIlus17",
                  "type": "image"
              },
              "document": null
          }
```
#### Обязательные параметры URL
| name | required 
|---|---|
| id  | * 


---

### Показать факультеты по id университета

##### URL: `/faculty/{universityId}`
##### Method: `GET`

#### Body - empty

##### Response - см. Faculty admin

#### Обязательные параметры URL
| name | required 
|---|---|
| universityId  | * 


---


### Показать кафедры по id факультета

##### URL: `/department/{facultyId}`
##### Method: `GET`

#### Body - empty

##### Response - см. Department admin

#### Обязательные параметры URL
| name | required 
|---|---|
| facultyId  | * 


---

### Показать специальности по id кафедры

##### URL: `/majors/{departmentId}`
##### Method: `GET`

#### Body - empty

##### Response - см. Major admin

#### Обязательные параметры URL
| name | required 
|---|---|
| departmentId  | * 
