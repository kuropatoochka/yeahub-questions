import { useNavigate } from "react-router-dom";

import { Button, Flex, Logo } from "@/shared";

import styles from './styles.module.css';

const Header = () => {
  const navigate = useNavigate()
  const handleButtonClick = () => {
    navigate(`/questions`)
  }

  return (
    <header className={styles.header}>
      <Flex align="center" gap="52" className={styles.container}>
        <Logo/>

        <Flex gap="20">
          <Button
            variant="link-gray"
            size="large"
            className={styles.active}
            onClick={handleButtonClick}
          >
            База вопросов
          </Button>
          <Button variant="link-gray" size="large" disabled>Тренажер</Button>
        </Flex>

      </Flex>
    </header>
  );
};

export default Header;