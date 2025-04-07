import styles from './styles.module.css'
import ImgLogo from '../../assets/ImgLogo.png'
import TextLogo from '../../assets/TextLogo.svg'
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to='/' className={styles.logo}>
      <img src={ImgLogo} alt="logo" className={styles.logo__icon}/>
      <img src={TextLogo} alt="YeaHub"/>
    </Link>
  );
};

export default Logo;