import SvgComponent from "@/assets/logo.jsx";
import Logo from "../assets/logo.jsx";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { IoCardOutline } from "react-icons/io5";
import { LuTruck } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiUser3Line } from "react-icons/ri";
const Header = () => {
  let icons = [
    {
      icon: IoCardOutline,
      text: "Оплатить",
    },
    {
      icon: LuTruck,
      text: "Отследить",
    },
    {
      icon: SlBasket,
      text: "Корзина",
      right: 20,
    },
    {
      icon: IoMdHeartEmpty,
      text: "Избранное",
      right: 25,
    },
  ];
  let productTypes = [
    "Скидки",
    "Спорт товары",
    "Новинки",
    "Книги",
    "Телефоны и гаджеты",
    "Ноутбуки",
    "Бытовая техника",
  ];
  return (
    <Flex

    zIndex={298472837482374}
      position={"fixed"}
      width={"100%"}
      background="white"
      boxShadow="0px 10px 30px 0px rgba(209, 213, 223, 0.50)"
      direction={"column"}
    >
      <Flex
        width={"100%"}
        py={"17px"}
        justify={"space-between"}
        align={"center"}
        className="container"
        m={"0 auto"}
      >
        <Logo />
        <Button
          leftIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="9"
              viewBox="0 0 17 9"
              fill="none"
            >
              <rect x="0.27002" width="16" height="1" rx="0.5" fill="white" />
              <rect
                x="0.27002"
                y="4"
                width="16"
                height="1"
                rx="0.5"
                fill="white"
              />
              <rect
                x="0.27002"
                y="8"
                width="16"
                height="1"
                rx="0.5"
                fill="white"
              />
            </svg>
          }
          _hover={"none"}
          borderRadius={"10px"}
          color={"white"}
          backgroundColor={"#008DFF"}
          height={"37px"}
        >
          Категории
        </Button>
        <Flex width={"40%"} borderRadius={"10px"} border={"2px solid #008DFF"}>
          <Input
            outline={"none"}
            variant={"unstayled"}
            type="text"
            placeholder="Поиск..."
            width={"100%"}
            _placeholder={{ color: "#C2C6D1" }}
          />
          <Button
            color={"white"}
            fontSize={"16px"}
            p={"10px 20px"}
            backgroundColor={"#008DFF"}
            borderRadius={"none"}
            _hover={"none"}
          >
            Искать
          </Button>
        </Flex>
        <Flex>
          {icons.map((icon) => {
            return (
              <Box position={"relative"}>
                {icon.icon == SlBasket || icon.icon == IoMdHeartEmpty ? (
                  <Text
                    as={"span"}
                    top={"-5px"}
                    right={icon.right + "px"}
                    position={"absolute"}
                    backgroundColor={"#008DFF"}
                    zIndex={"1"}
                    color={"white"}
                    borderRadius={"50px"}
                    width={"18px"}
                    height={"18px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    fontSize={"12px"}
                  >
                    0
                  </Text>
                ) : (
                  ""
                )}
                <Button
                  fontSize={"12px"}
                  gap={"3px"}
                  display={"flex"}
                  flexDir={"column"}
                  variant={"unstayled"}
                >
                  <icon.icon fontSize={"30px"} />
                  {icon.text}
                </Button>
              </Box>
            );
          })}
        </Flex>
        <Box
          alignItems={"center"}
          fontSize={"14px"}
          cursor={"pointer"}
          userSelect={"none"}
          variant={"unstyled"}
          display={"flex"}
          flexDirection={"column"}
        >
          <RiUser3Line fontSize={"21px"} />
          Войти
        </Box>
      </Flex>
      <Box borderTop={"2px solid #E6E8EE"} width={"100%"}>
        <Flex
          justify={"space-between"}
          height={"53px"}
          align={"center"}
          className="container"
          m={"0 auto"}
        >
          {productTypes.map((productType) => {
            return (
              <Text
                color="#282830"
                fontSize="15px"
                fontStyle="normal"
                fontWeight={500}
                lineHeight="19px"
              >
                {productType}
              </Text>
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
