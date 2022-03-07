import 'express-async-errors'
import express from 'express'

import { routes } from './routes'
import { errorInterceptor } from './errors/interceptor'

const app = express()

app.use(express.json())

app.use(routes)
app.use(errorInterceptor)

app.listen(3333, () => console.log('Server is running!'))

