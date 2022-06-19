import type { NextPage } from 'next'
import Card from '../components/Card'
import TransactionList from '../components/TransactionList'

const Home: NextPage = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Card/>
      <TransactionList/>
    </div>
  )
}

export default Home
