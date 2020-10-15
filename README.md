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

  ```['Successfully updated a restaurant's information.']``` or ```['Failed to create a restaurant's information.']```

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

  ```['Successfully updated a restaurant's information.']``` or ```['Failed to create a restaurant's information.']```
