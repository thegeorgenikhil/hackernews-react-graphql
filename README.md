# HackerNews Clone - GraphQL Frontend

This is a HackerNews clone built with React, Apollo, GraphQL. 
For the backend, see [this repo](https://github.com/thegeorgenikhil/hackernews-go-graphql).

## Getting Started

1. Clone this repo

```bash
git clone https://github.com/thegeorgenikhil/hackernews-apollo-graphql
```

2. Install dependencies

```bash
cd hackernews-apollo-graphql
yarn add
```

3. Create a .env file in the root directory and add the following

```bash
REACT_APP_GRAPHQL_ENDPOINT=<your-graphql-endpoint-url>
```

if you are using the backend from the above repo, the endpoint would be `http://localhost:8080/graphql`

3. Start the app

```bash
yarn start
```
