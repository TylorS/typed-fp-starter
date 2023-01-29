/// <reference types="@typed/framework" />

import { express, assets, run, listen } from '@typed/framework/express'
import * as api from 'express:./application/api'
import * as html from 'html:./index'
import * as routes from 'runtime:./routes'
import httpServer from 'vavite/http-dev-server'

const app = express()

if (!httpServer) {
  app.use(assets(import.meta.url, [html]))
}

app.use('/api', api.router)

app.get(
  '/*',
  run(routes, html, (d) => d.getElementById('application')),
)

listen(app, httpServer, { port: 3000 })
