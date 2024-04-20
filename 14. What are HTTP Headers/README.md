## HTTP Headers

HTTP headers are additional pieces of information sent alongside a request or a response in the Hypertext Transfer
Protocol (HTTP). They provide metadata about the request or the response, helping the client and server communicate and
understand how to handle the transmitted data. Here are some key points about HTTP headers:

1. **Request Headers**
   These are sent by the client (usually a web browser) to the server and contain information about
   the request being made. Common request headers include:
    - `Host`: Specifies the domain name of the server.
    - `User-Agent`: Identifies the client making the request, typically the web browser name and version.
    - `Accept`: Specifies the media types that the client can understand.
    - `Authorization`: Contains credentials for authentication purposes.
    - `Cookie`: Contains cookies previously sent by the server with `Set-Cookie`.

2. **Response Headers**: These are sent by the server to the client in response to a request and contain information
   about the server's response. Common response headers include:
    - `Content-Type`: Specifies the media type of the response body, such as `text/html` or `application/json`.
    - `Content-Length`: Indicates the length of the response body in bytes.
    - `Cache-Control`: Specifies caching directives to be applied by the client or intermediary caches.
    - `Set-Cookie`: Sets a cookie on the client's browser for subsequent requests.
    - `Location`: Redirects the client to a different URL.

3. **General Headers**: These headers apply to both requests and responses and provide general information about the
   message, such as the date and connection status.

4. **Entity Headers**: These headers are associated with the body of the request or response and provide information
   about its content, such as its length or encoding.

> HTTP headers are key-value pairs separated by a colon (`:`), and multiple headers can be included in a single request
> or
> response. They play a crucial role in controlling the behavior of the HTTP protocol, enabling features like
> authentication, caching, and content negotiation.