import styles from './styles.module.css'
import { Outlet } from 'react-router-dom'
import { Header } from "@/widgets/header"

export const Layout = () => {
  return (
    <>
      <Header/>
      <div className={styles.container}>
        <Outlet/>
      </div>
    </>
  )
}