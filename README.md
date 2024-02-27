# Request Header Microservice

The Request Header Microservice is a web API that extracts and returns information from the HTTP request headers of incoming requests. It provides the user's IP address, preferred language, and software information.

## Features

- **IP Address Retrieval:** Extracts the user's IP address from the request headers.
- **Preferred Language Detection:** Detects and includes the user's preferred language based on the `Accept-Language` header.
- **Software Information:** Extracts and includes information about the user's software from the `User-Agent` header.

## API Endpoint

- `/api/whoami`: Returns a JSON object containing the user's IP address, preferred language, and software information.

## Example Response

```json
{
  "ipaddress": "192.168.1.1",
  "language": "en-US",
  "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.1000.100 Safari/537.36"
}
```

## Technologies Used
- Node.js
- Express.js
- JavaScript

# Deployment
The project is deployed using Glitch and is accessible at https://request-header-microservice-sf.glitch.me