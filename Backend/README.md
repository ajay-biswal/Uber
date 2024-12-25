# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description:

This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns a JSON Web Token (JWT) along with the user details.

### Request Body:

The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters (required)
  - `lastname`: A string with at least 3 characters (optional)
- `email`: A string with at least 5 characters and a valid email format (required)
- `password`: A string with at least 6 characters (required)

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

// ...existing documentation...

# User Login Endpoint

## Endpoint: `/users/login`

### Method: POST

### Description:

Authenticates an existing user and returns a JWT token along with user details.

### Request Body:

```json
{
  "email": "john.doe@example.com", // required, valid email format
  "password": "password123" // required, min 6 characters
}
```

...existing registration and login documentation...

# User Profile Endpoint

## Endpoint: `/users/profile`

### Method: GET

### Description:

Retrieves the profile information of the authenticated user.

### Authentication:

Requires JWT token in Authorization header or cookie.

### Headers:

````http
Authorization: Bearer <JWT_TOKEN>


// ...existing documentation...

# User Logout Endpoint

## Endpoint: `/users/logout`

### Method: GET

### Description:
Invalidates the current JWT token by adding it to a blacklist and clears authentication cookies.

### Authentication:
Requires valid JWT token in either:
- Authorization header
- Cookie

### Request Headers:
```http
Authorization: Bearer <JWT_TOKEN>
````
