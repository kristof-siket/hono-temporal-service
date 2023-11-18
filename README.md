This is a proof-of-concept for building a small service using the [Hono](https://hono.dev/) framework with Node runtime, with the help of [Temporal](https://temporal.io/), a cool platform for workflow orchestration.

The goal is to provide a blueprint for any web service with a RESTful API to effectively integrate Temporal, so that the developers can __really__ focus on writing just the business logic.


To get started, run the following commands in order:

1. `npm install` - installing dependencies (we currently depend on hono, dotenv, nanoid, and the Temporal SDK). 
2. `npm run temporal:up` - starts the Temporal Stack via Docker Compose locally (requires some sort of Docker installation with Compose).
3. `npm run worker` - start the Temporal Worker.
4. `npm start` - Start the Hono server

Next, you can test the sample workflow by running:

```
open http://localhost:3000/hello-world
```

And then you can track the workflow progress on Temporal UI: http://localhost:8080


