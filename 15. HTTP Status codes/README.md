## HTTP Status Codes

HTTP status codes are standard response codes returned by web servers to indicate the success or failure of a client's
request. They are three-digit numbers that provide information about the status of the requested resource.

### 1xx - Informational

- **100 Continue**: The server has received the request headers and the client should proceed to send the request body.
- **101 Switching Protocols**: The server is changing protocols, for example, switching to WebSocket.

### 2xx - Success

- **200 OK**: The request was successful.
- **201 Created**: The request has been fulfilled, resulting in the creation of a new resource.
- **204 No Content**: The server successfully processed the request but there is no content to return.

### 3xx - Redirection

- **301 Moved Permanently**: The requested resource has been permanently moved to a new URL.
- **302 Found**: The requested resource temporarily resides under a different URL.
- **304 Not Modified**: The client can use cached data.

### 4xx - Client Error

- **400 Bad Request**: The server cannot process the request due to a client error.
- **401 Unauthorized**: The request requires user authentication.
- **403 Forbidden**: The server understood the request but refuses to authorize it.
- **404 Not Found**: The requested resource could not be found on the server.

### 5xx - Server Error

- **500 Internal Server Error**: The server encountered an unexpected condition that prevented it from fulfilling the
  request.
- **502 Bad Gateway**: The server received an invalid response from an upstream server.
- **503 Service Unavailable**: The server is currently unable to handle the request due to temporary overload or
  maintenance.

### Custom Status Codes

Developers can also define custom status codes for specific applications, providing more detailed information about the
status of a request.

### Conclusion

Understanding HTTP status codes is essential for web developers to diagnose and troubleshoot issues with web servers and
applications. By familiarizing themselves with these codes, developers can effectively handle various scenarios that
arise during web development and improve the overall user experience.
