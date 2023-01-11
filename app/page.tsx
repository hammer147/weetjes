import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Weetjes from './weetjes'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={inter.className}>
        <div className={styles.wrapper}>
          <Image
            src='/papa-bureau.jpg'
            alt='Picture of the author'
            width={780}
            height={1040}
            className={styles.image}
          />
          <h1 className={styles.title}>
            Kleine tekstjes en weetjes verzameld doorheen de jaren...
          </h1>
          <Weetjes />
          <div className={styles.slot}>door Marc Hamerlynck</div>
        </div>
      </div>
    </main>
  )
}
