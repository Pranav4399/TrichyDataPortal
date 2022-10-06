import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Homepage from '../components/homepage'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trichy Data Portal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Homepage />
      <Footer />

    </div>
  )
}