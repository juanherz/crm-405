import styles from '../styles/Home.module.css'
import Profile from '../components/authentication/Profile'

export default function Home() {
  return (
    <div className={styles.container}>
      <Profile />
    </div>
  )
}
