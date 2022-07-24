import { render } from 'preact'
import { App } from './app'
import { setup } from '@twind/preact'

setup({
  props: {
    // tw: false, // to disable
    // css: false, // to disable
    className: true, // to enable – suppports `class` property as well
  },
  /* other twind configuration options */
})

render(<App />, document.getElementById('app') as HTMLElement)
