/// <reference types="@typed/framework" />

import * as express from '@typed/framework/express'
import * as api from 'express:./application/api'
import * as html from 'html:./index'
import * as runtime from 'runtime:./routes'

const app = express.express()

if (import.meta.env.PROD) {
  app.use(express.assets([html], { serveStatic: { immutable: true } }))
}

app.use('/api', api.router)

app.get(
  '/*',
  express.run(runtime, html, (d) => d.getElementById('application')),
)

express.listen(app, { port: 3000 }, (port) => console.log(`Server started on port ${port}`))
