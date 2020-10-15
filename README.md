# popular-dishes-server

This server provides the end-points for a popular dishes service on to a well known restaurant's web application.

&nbsp;
## Get restaurant info

* GET ```/api/dishes/restaurant/:id```

### Path parameters:

* ```id``` restaurant id

**Success Status Code:** `200`

**Failure Status Code:** `404`

**Returns:** JSON

```[id, name]```


## POST restaurant info

* POST ```/api/dishes/restaurant/```

### Path body:

* ```id``` restaurant id

**Success Status Code:** `200`

**Failure Status Code:** `404`

**Returns:** JSON

['Successfully created a restaurant.'] or ['Failed to create a restaurant.']


## Update restaurant info

* PUT ```/api/dishes/restaurant/:id```

### Path body:

* ```id``` restaurant id

**Success Status Code:** `200`

**Failure Status Code:** `404`

**Returns:** JSON

['Successfully updated a restaurant's information.'] or ['Failed to create a restaurant's information.']


## Delete restaurant info

* DELETE ```/api/dishes/restaurant/:id```

### Path body:

* ```id``` restaurant id

**Success Status Code:** `200`

**Failure Status Code:** `404`

**Returns:** JSON

['Successfully updated a restaurant's information.'] or ['Failed to create a restaurant's information.']
