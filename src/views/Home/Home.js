import React from "react";
// Chakra imports
import { Box, Grid, Flex, Text, Image } from "@chakra-ui/react";
import { MonopoleIconText } from "../../components/Icons/Icons";
import SubscribeForm from "../../components/SubscribeForm/SubscribeForm";
import background from "../../assets/img/background.png";

import vecino from "../../assets/img/partners/vecino.png";
import automotive from "../../assets/img/partners/automotive.png";
import cuatrimoteando from "../../assets/img/partners/cuatrimoteando.png";
import immorentier from "../../assets/img/partners/immorentier.png";
import raduga from "../../assets/img/partners/raduga.png";
import sayada from "../../assets/img/partners/sayada.png";
import serieux from "../../assets/img/partners/serieux.png";
import specto from "../../assets/img/partners/specto.png";

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
        >
          The pre-sale is coming soon !
        </Text>
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
      <Flex
        mt="74px"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        alignItems="center"
        background="#0C0E47"
        h="108px"
        w="100%"
      >
        <Grid
          templateColumns="1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
          justifyContent="center"
          alignItems="center"
          w="100%"
          px="3%"
        >
          <Image src={vecino} alt="Vecino" />
          <Image src={automotive} alt="Advanced Automotive" />
          <Image src={cuatrimoteando} alt="Cuatrimoteando" />
          <Image src={immorentier} alt="Immorentier" />
          <Image src={raduga} alt="Raduga Film LLC" />
          <Image src={sayada} alt="Sayada" />
          <Image src={serieux} alt="Sérieux" />
          <Image src={specto} alt="Specto Media" />
        </Grid>
      </Flex>
    </Flex>
  );
}

export default Home;
