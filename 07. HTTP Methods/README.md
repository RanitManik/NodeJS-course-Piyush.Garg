## HTTP Methods Explained

HTTP (Hypertext Transfer Protocol) methods are verbs that define the action to be performed on a resource identified by a URL. Each method has a specific purpose and is used to perform various operations on web servers. Below are the commonly used HTTP methods along with their descriptions:

### 1. `GET`

- **Description:** The GET method requests data from a specified resource.
- **Usage:** Used to retrieve data from the server.
- **Idempotent:** Yes. Multiple identical requests will have the same effect as a single request.

### 2. `POST`

- **Description:** The POST method submits data to be processed to a specified resource.
- **Usage:** Commonly used to create new resources on the server.
- **Idempotent:** No. Multiple identical requests may result in different outcomes, especially when creating new resources.

### 3. `PUT`

- **Description:** The PUT method updates a specified resource with the provided data.
- **Usage:** Used to update existing resources or create new ones if they don't exist.
- **Idempotent:** Yes. Multiple identical requests will have the same effect as a single request.

### 4. `DELETE`

- **Description:** The DELETE method deletes the specified resource.
- **Usage:** Used to remove resources from the server.
- **Idempotent:** Yes. Multiple identical requests will have the same effect as a single request.

### 5. `PATCH`

- **Description:** The PATCH method applies partial modifications to a resource.
- **Usage:** Used to update part of a resource's data.
- **Idempotent:** No. Multiple identical requests may result in different outcomes, depending on how the server handles partial updates.

### 6. `HEAD`

- **Description:** The HEAD method requests the headers of a resource without actually fetching the resource's body.
- **Usage:** Used to retrieve metadata about a resource, such as its size or modification date, without downloading the entire content.
- **Idempotent:** Yes. Multiple identical requests will have the same effect as a single request.

### 7. `OPTIONS`

- **Description:** The OPTIONS method requests information about the communication options available for the target resource.
- **Usage:** Used to determine the communication options available for a particular resource.
- **Idempotent:** Yes. Multiple identical requests will have the same effect as a single request.

### 8. `TRACE`

- **Description:** The TRACE method performs a message loop-back test along the path to the target resource.
- **Usage:** Primarily used for diagnostic purposes or troubleshooting.
- **Idempotent:** Yes. Multiple identical requests will have the same effect as a single request.

### 9. `CONNECT`

- **Description:** The CONNECT method establishes a tunnel to the server identified by a given URL.
- **Usage:** Primarily used for establishing a connection to a proxy server.
- **Idempotent:** No. Multiple identical requests may result in different outcomes, especially when establishing a new connection.

These HTTP methods provide a standardized way for clients and servers to interact with each other, enabling the exchange of data and resources over the web.
