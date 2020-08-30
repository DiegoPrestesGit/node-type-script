import { Router } from 'express'

import exampleRoutes from './example.routes'

const routes = Router()

routes.use('/example', exampleRoutes)

export default routes
