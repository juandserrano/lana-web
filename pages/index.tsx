import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import TransactionList from '../components/TransactionList'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
<Card/>
<TransactionList/>
    </div>
  )
}

export default Home
