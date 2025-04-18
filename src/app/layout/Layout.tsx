import { Outlet } from 'react-router-dom';
import { Header } from "@/widgets/header";

import styles from './styles.module.css';

export const Layout = () => {
  return (
    <div className={styles.base__layout}>
      <Header/>
      <div className={styles.container}>
        <Outlet/>
      </div>
    </div>
  )
}