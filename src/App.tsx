import { useState } from 'react'
import Button from './components/Button';
import Layout from './components/Layout';

function App() {
  const [count, setCount] = useState<number>(0);

  const onClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <Layout>
        <Button count={count} onClick={onClick} />
      </Layout>
    </>
  )
}

export default App
