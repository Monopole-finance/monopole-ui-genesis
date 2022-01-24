import React from "react";
// Chakra imports
import { Box, Flex, Text } from "@chakra-ui/react";
import { MonopoleIconText } from "../../components/Icons/Icons";
import SubscribeForm from "../../components/SubscribeForm/SubscribeForm";
import background from "../../assets/img/background.png";

function Home() {
  return (
    <Flex
      height="100%"
      width="100%"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      alignItems="center"
      bgRepeat="no-repeat"
      bgImage={background}
      bgSize="cover"
    >
      <MonopoleIconText mt="50px" height="35px" width="250px" />
      <Box mt="60px" background="transaprent" height="75%" px="10%">
        <Text
          lineHeight="48px"
          fontSize="40px"
          fontWeight="700"
          fontFamily="Montserrat"
          mt="30px"
          mb="45px"
        >
          Website is coming in the next few hours 
        </Text>
        <Text
          lineHeight="25px"
          fontSize="21px"
          fontWeight="700"
          fontFamily="Montserrat"
        >
          Join the whitelist
        </Text>
        <Text mt="8px" lineHeight="28px" fontSize="21px" fontWeight="400">
          Want to use your crypto for daily life?
        </Text>
        <Text lineHeight="28px" fontSize="21px" fontWeight="400" mb="30px">
          To buy a car, invest in real estate or your next trip ?
        </Text>
        <SubscribeForm />
      </Box>
    </Flex>
  );
}

export default Home;
