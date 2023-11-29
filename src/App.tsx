import { Counter } from './Counter'
import Env from './Env'

export const App = () => {
  const env = process.env.name
  return (
    <>
      <h1>React TypeScript Webpack Starter Template</h1>

      <Counter />
      <Env evn={env} />
    </>
  )
}
