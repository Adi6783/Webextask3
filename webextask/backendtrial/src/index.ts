import { Hono } from 'hono'

import { userRouter } from './routes/user'
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
}>()

//DATABASE_URL AND JWT_SECRET should be defined in wrangler.toml initially
app.use('/*', cors())
app.route("api/v1/user", userRouter);



export default app
