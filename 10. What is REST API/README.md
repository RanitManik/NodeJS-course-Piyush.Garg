## Understanding REST API

REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs (
Application Programming Interfaces) adhere to the principles of REST, providing a standardized way for software systems
to communicate over the internet. Here's a breakdown of key concepts related to REST APIs:

### 1. Resources

- **Definition:** In REST, everything is considered a resource, which can be any information that can be named.
  Resources are typically represented by URLs (Uniform Resource Locators).

### 2. HTTP Methods

- **CRUD Operations:** RESTful APIs use HTTP methods to perform operations on resources:
    - **GET:** Retrieve data from the server.
    - **POST:** Create new data on the server.
    - **PUT:** Update existing data on the server.
    - **DELETE:** Delete data from the server.
- **Additional Methods:** Other HTTP methods like PATCH, HEAD, OPTIONS, and TRACE may also be used for specific
  purposes.

### 3. Stateless Communication

- **Statelessness:** REST APIs are stateless, meaning each request from a client to the server must contain all the
  information necessary to understand and fulfill the request. The server does not store any client context between
  requests.

### 4. Uniform Interface

- **Uniform Resource Identifier (URI):** Resources are identified by URIs, providing a consistent and predictable way to
  locate and interact with them.
- **Representation:** Resources can have multiple representations, such as JSON, XML, HTML, or plain text. Clients and
  servers can negotiate the representation format using content negotiation.

### 5. Hypermedia as the Engine of Application State (HATEOAS)

- **HATEOAS:** REST APIs should include hypermedia links in the response, allowing clients to discover and navigate
  related resources dynamically. This reduces coupling between the client and server, as clients can interact with the
  API based on the links provided.

### 6. Stateless Server

- **Scalability:** The stateless nature of REST APIs allows servers to scale easily by distributing requests across
  multiple servers without needing to manage session state.

### 7. Security

- **Authentication and Authorization:** REST APIs can implement various security mechanisms such as API keys, OAuth
  tokens, or JWT (JSON Web Tokens) to authenticate and authorize clients.

### 8. Error Handling

- **HTTP Status Codes:** REST APIs use standard HTTP status codes to indicate the success or failure of a request,
  providing clear and consistent error messages to clients.

### Example:

- **Resource URL:** `https://api.example.com/users`
- **HTTP Method:** GET
- **Description:** Retrieves a list of users from the server.

> REST APIs are widely used in web development for building scalable, flexible, and interoperable web services. They
> provide a standardized way for different software systems to communicate and exchange data over the internet.
