# book-api-postgres

FullStack web app using the PERN stack. It contains book data inside PostgreSQL database, REST API, CRUD operations and caching on server-side and displays the data on the browser through React enabling the users to interact with it.

## Table of contents

- [Technologies](#technologies)
- [Setup](#setup)

## Technologies:

#### Server-side technologies:

- Node.js (Express)
- [node-postgres](https://node-postgres.com) for interacting with PostgreSQL
- cors
- Redis (for caching)

#### Client-side technologies:

- React (using Context API) and react-router-dom
- Axios (for fetching the data from the API)

## Setup:

To start the development server:

```
npm run dev
```

To start client-side:

```
npm start
```
