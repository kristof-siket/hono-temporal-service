import { serve } from '@hono/node-server'
import { configDotenv } from 'dotenv'
import { Hono } from 'hono'
import helloWorld from './services/hello-world.js'
import service from '../service.mjs'

const app = new Hono()
configDotenv({
    path: '../.env'
})

app.get('/', (c) => c.text('Hello Hono!'))

app.get('/hello-world', async (c) => {
    const result = await helloWorld()
    console.log(result)
    return c.text(result)
})

serve({
    fetch: app.fetch,
    port: service.port(),
    hostname: '0.0.0.0',
})
