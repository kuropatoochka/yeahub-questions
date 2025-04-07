import styles from './styles.module.css'
import { Logo } from "@/shared/ui"

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo/>
    </header>
  );
};

export default Header;