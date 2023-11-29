import React from 'react'
interface AppProps {
  evn: string | undefined
}
const Env: React.FC<AppProps> = ({ evn }) => {
  return <div>the evironment is {evn}</div>
}

export default Env
