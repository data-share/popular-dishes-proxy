# popular-dishes-server

This server provides the end-points for a popular dishes service on to a well known restaurant's web application.

&nbsp;
## Get restaurant info

* GET ```/api/dishes/restaurant/:id```

### Path paramenters:

**Request parameters**
* ```id``` restaurant id

### Path responses:
* Success Status Code: `200`

* Failure Status Code: `404`

### Response format:
* Returns: JSON

  ```[id, name]```

&nbsp;
## POST restaurant info

* POST ```/api/dishes/restaurant/```

### Path paramenters:

**Request body**
* ```name: RESTAURANT_NAME``` 

### Path responses:
* Success Status Code: `200`

* Failure Status Code: `404`

### Response format:
* Returns: JSON

  ```['Successfully created a restaurant.']``` or ```['Failed to create a restaurant.']```

&nbsp;
## Update restaurant info

* PUT ```/api/dishes/restaurant/:id```

### Path paramenters:

**Request parameters**
* ```id``` restaurant id

**Request body**
* ```name: RESTAURANT_NAME``` 

### Path responses:
* Success Status Code: `200`

* Failure Status Code: `404`

### Response format:
* Returns: JSON

  ```['Successfully updated a restaurant's information.']``` or ```['Failed to update a restaurant's information.']```

&nbsp;
## Delete restaurant info

* DELETE ```/api/dishes/restaurant/:id```

### Path paramenters:

**Request parameters**
* ```id``` restaurant id

### Path responses:
* Success Status Code: `200`

* Failure Status Code: `404`

### Response format:
* Returns: JSON

  ```['Successfully deleted a restaurant's information.']``` or ```['Failed to delete a restaurant's information.']```
  
&nbsp;
&nbsp;
## Get dish info

* GET ```/api/dishes/restaurant/dish/:id```

### Path paramenters:

**Request parameters**
* ```id``` dish id

### Path responses:
* Success Status Code: `200`

* Failure Status Code: `404`

### Response format:
* Returns: JSON

  ```[id, restr_id, name, ingredients, picture]```

&nbsp;
## POST dish info

* POST ```/api/dishes/restaurant/dish/```

### Path paramenters:

**Request body**
* 
```json
    {
      "restr_id": "INT",
      "name": "VARCHAR(50)",
      "ingredients": "VARCHAR(200)",
      "picture": "VARCHAR(150)",
    }
```

### Path responses:
* Success Status Code: `200`

* Failure Status Code: `404`

### Response format:
* Returns: JSON

  ```['Successfully created a dish.']``` or ```['Failed to create a dish.']``

&nbsp;
## Update dish info

* PUT ```/api/dishes/restaurant/dish/:id```

### Path paramenters:

**Request parameters**
* ```id``` restaurant id

**Request body**
* 
```json
    {
      "restr_id": "INT",
      "name": "VARCHAR(50)",
      "ingredients": "VARCHAR(200)",
      "picture": "VARCHAR(150)",
    }
```

### Path responses:
* Success Status Code: `200`

* Failure Status Code: `404`

### Response format:
* Returns: JSON

  ```['Successfully updated a dish's information.']``` or ```['Failed to create a dish's information.']```

&nbsp;
## Delete dish info

* DELETE ```/api/dishes/restaurants/dish/:id```

### Path paramenters:

**Request parameters**
* ```id``` dish id

### Path responses:
* Success Status Code: `200`

* Failure Status Code: `404`

### Response format:
* Returns: JSON

  ```['Successfully delete a dish's information.']``` or ```['Failed to delete a dish's information.']```
  
&nbsp;
&nbsp;
## Get user info

* GET ```/api/dishes/restaurant/user/:id```

### Path paramenters:

**Request parameters**
* ```id``` users id

### Path responses:
* Success Status Code: `200`

* Failure Status Code: `404`

### Response format:
* Returns: JSON

  ```[id, name, avatar]```

&nbsp;
## POST user info

* POST ```/api/dishes/restaurant/user/```

### Path paramenters:

**Request body**
* 
```json
    {
      "name": "VARCHAR(50)",
      "avatar": "VARCHAR(50)",
    }
```

### Path responses:
* Success Status Code: `200`

* Failure Status Code: `404`

### Response format:
* Returns: JSON

  ```['Successfully created an user.']``` or ```['Failed to create a user.']``

&nbsp;
## Update user info

* PUT ```/api/dishes/restaurant/user/:id```

### Path paramenters:

**Request parameters**
* ```id``` user id

**Request body**
* 
```json
    {
      "name": "VARCHAR(50)",
      "avatar": "VARCHAR(50)",
    }
```

### Path responses:
* Success Status Code: `200`

* Failure Status Code: `404`

### Response format:
* Returns: JSON

  ```['Successfully updated a user's information.']``` or ```['Failed to create a user's information.']```

&nbsp;
## Delete user info

* DELETE ```/api/dishes/restaurant/user/:id```

### Path paramenters:

**Request parameters**
* ```id``` user id

### Path responses:
* Success Status Code: `200`

* Failure Status Code: `404`

### Response format:
* Returns: JSON

  ```['Successfully delete a user's information.']``` or ```['Failed to delete a user's information.']```

&nbsp;
&nbsp;
## Get review info

* GET ```/api/dishes/restaurant/review/:id```

### Path paramenters:

**Request parameters**
* ```id``` review id

### Path responses:
* Success Status Code: `200`

* Failure Status Code: `404`

### Response format:
* Returns: JSON

  ```[id, dish_id, user_id, review, dined_on, stars, user_status]```

&nbsp;
## POST review info

* POST ```/api/dishes/restaurant/user/```

### Path paramenters:

**Request body**
* 
```json
    {
      "dish_id": "INT",
      "user_id": "INT",
      "reviews": "VARCHAR(1000)",
      "dine_on": "DATE",
      "stars": "SMALLINT",
      "user_status": "BOOLEAN",
    }
```

### Path responses:
* Success Status Code: `200`

* Failure Status Code: `404`

### Response format:
* Returns: JSON

  ```['Successfully created an review.']``` or ```['Failed to create a review.']``

&nbsp;
## Update review info

* PUT ```/api/dishes/restaurant/review/:id```

### Path paramenters:

**Request parameters**
* ```id``` review id

**Request body**
* 
```json
    {
      "dish_id": "INT",
      "user_id": "INT",
      "reviews": "VARCHAR(1000)",
      "dine_on": "DATE",
      "stars": "SMALLINT",
      "user_status": "BOOLEAN",
    }
```

### Path responses:
* Success Status Code: `200`

* Failure Status Code: `404`

### Response format:
* Returns: JSON

  ```['Successfully updated a review.']``` or ```['Failed to create a review.']```

&nbsp;
## Delete review info

* DELETE ```/api/dishes/restaurant/review/:id```

### Path paramenters:

**Request parameters**
* ```id``` review id

### Path responses:
* Success Status Code: `200`

* Failure Status Code: `404`

### Response format:
* Returns: JSON

  ```['Successfully delete a review.']``` or ```['Failed to delete a review.']```
