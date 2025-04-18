import { Link } from "react-router-dom";

import { LogoImg, LogoText } from "@/shared/assets";
import { Flex, Icon } from "@/shared";

const Logo = () => {
  return (
    <Link to='/questions'>
      <Flex align="center" gap="8">
        <Icon src={LogoImg as string} alt="logo" size={33}/>
        <Icon src={LogoText as string} alt="YeaHub" size={99}/>
      </Flex>
    </Link>
  );
};

export default Logo;