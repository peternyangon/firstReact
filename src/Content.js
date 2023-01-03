import React from 'react'

function Content() {

  const handleNameChange = () => {
    const name = ['Peter', 'Simon', 'Millicent', 'Sifa', 'Joshua']
    const int = Math.floor(Math.random() * 5);
    return name[int];
  }
  const name = "Simon"
  return (
    <main>
      <p>my name is:{name}</p>
    </main>
  )
}

export default Content