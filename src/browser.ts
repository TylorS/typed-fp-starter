/// <reference types="@typed/framework" />

import { pipe } from '@fp-ts/core/Function'
import { runCallback } from '@typed/fx'
import { render } from 'browser:./routes'

const rootElement = document.getElementById('application')

if (!rootElement) {
  throw new Error('Could not find root element #application')
}

pipe(render(rootElement), runCallback(console.log))
