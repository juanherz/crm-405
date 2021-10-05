import styles from '../styles/Home.module.css'
import Profile from '../components/authentication/profile'

export default function Home() {
  return (
    <div className={styles.container}>
      <Profile />
    </div>
  )
}
