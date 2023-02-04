/// <reference types="@typed/framework" />

import * as Effect from '@effect/io/Effect'
import * as express from '@typed/framework/express'
import * as api from 'api:./application/api'
import * as html from 'html:./index'
import * as runtime from 'runtime:./routes'
import httpDevServer from 'vavite/http-dev-server'

const main = express.app(
  Effect.gen(function* ($) {
    if (import.meta.env.PROD) {
      yield* $(express.assets('/', import.meta.url, [html]))
    }

    yield* $(express.api('/api', api.handlers))
    yield* $(express.html('/', runtime, html, (d) => d.getElementById('application')))

    const { host, port } = yield* $(express.listen({ port: 3000, httpDevServer }))

    yield* $(Effect.logInfo(`Server listening at ${host}:${port}`))
  }),
)

Effect.runFork(main)
