import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './components/Box'
import Flex from '@components/Flex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Flex backgroundColor='red25' flexDirection="column">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </Flex>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Box backgroundColor='blue50' color='white' padding="20px" borderRadius="20px">
          Edit <code>src/App.tsx</code> and save to test HMR
        </Box>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
