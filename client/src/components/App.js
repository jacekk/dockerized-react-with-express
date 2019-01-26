import React from 'react'

const App = () => {
  const clientData = {
    message: 'Hello React app :)',
    now: new Date().toDateString(),
    random: Math.random(),
  }
  return <div>
    Client data:
    <pre>{JSON.stringify(clientData, null, 4)}</pre>
  </div>
}

export default App
