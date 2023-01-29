import { succeed } from '@effect/io/Effect'
import { FetchHandler } from '@typed/framework/api'
import { Route } from '@typed/route'

export const route = Route('/hello/:name')

export const hello = FetchHandler(route, (_, { name }) =>
  succeed(
    new Response(`Hello, ${name}`, {
      headers: {
        'content-type': 'text/plain',
      },
    }),
  ),
)
