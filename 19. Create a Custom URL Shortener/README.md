## URL Shortener Service

### Overview

This URL shortener service provides users with the ability to shorten long URLs into more manageable and shareable
links. It also tracks the number of visits/clicks on each shortened URL.

### Features

1. **Shorten URLs**: Users can input a valid URL, and the service will generate a shortened URL for them.

2. **Redirection**: When users visit the shortened URL, they are automatically redirected to the original long URL.

3. **Analytics**: Users can access analytics for each shortened URL to view the total number of clicks/visits.

### Routes

- **POST /URL**
    - Generates a new short URL and returns the shortened URL in the format `example.com/random-id`.

- **GET /:id**
    - Redirects the user to the original URL associated with the provided short id.

- **GET /URL/analytics/:id**
    - Returns the number of clicks/visits for the provided short id.