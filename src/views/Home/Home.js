import React, { useState, useEffect } from "react";
// Chakra imports
import { Box, Grid, Flex, Text, Image } from "@chakra-ui/react";
import { MonopoleIconText } from "../../components/Icons/Icons";
import SubscribeForm from "../../components/SubscribeForm/SubscribeForm";
import { Partners } from "../../components/Partners/Partners";
import background from "../../assets/img/background.png";
import { kMaxLength } from "buffer";

function Home() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [index, setIndex] = useState(0);

  let deadline = new Date("Jan 24, 2022 12:00:00").getTime();

  function count() {
    var now = new Date().getTime();
    var t = deadline - now;
    var dd = Math.floor(t / (1000 * 60 * 60 * 24));
    var hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((t % (1000 * 60)) / 1000);

    var days = dd < 10 ? "0" + dd : dd;
    var hours = hh < 10 ? "0" + hh : hh;
    var minutes = mm < 10 ? "0" + mm : mm;
    var seconds = ss < 10 ? "0" + ss : ss;

    if (t > 0) {
      setDays(days);
      setHours(minutes);
      setMinutes(hours);
      setSeconds(seconds);
    } else {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    }
  }

  useEffect(() => {
    count();
    setInterval(() => {
      count();
    }, 1000);
  });

  useEffect(() => {
    const lastIndex = Object.keys(Partners).length - 1;
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

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
        <Grid
          mt="30px"
          mb="45px"
          templateColumns="1fr 1fr 1fr 1fr"
          gap={{ sm: "10px", md: "20px", lg: "40px" }}
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            alignItems="center"
          >
            <Box
              width="96.98px"
              height="96.98px"
              background="white"
              borderRadius="16px"
            >
              <Text
                lineHeight="42px"
                fontSize="42px"
                fontWeight="700"
                fontFamily="Montserrat"
                mt="28px"
                color="#000126"
              >
                {days}
              </Text>
            </Box>
            <Text
              lineHeight="18.23px"
              fontSize="14px"
              fontWeight="400"
              mt="10px"
            >
              days
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            alignItems="center"
          >
            <Box
              width="96.98px"
              height="96.98px"
              background="white"
              borderRadius="16px"
            >
              <Text
                lineHeight="42px"
                fontSize="42px"
                fontWeight="700"
                fontFamily="Montserrat"
                mt="28px"
                color="#000126"
              >
                {hours}
              </Text>
            </Box>
            <Text
              lineHeight="18.23px"
              fontSize="14px"
              fontWeight="400"
              mt="10px"
            >
              hours
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            alignItems="center"
          >
            <Box
              width="96.98px"
              height="96.98px"
              background="white"
              borderRadius="16px"
            >
              <Text
                lineHeight="42px"
                fontSize="42px"
                fontWeight="700"
                fontFamily="Montserrat"
                mt="28px"
                color="#000126"
              >
                {minutes}
              </Text>
            </Box>
            <Text
              lineHeight="18.23px"
              fontSize="14px"
              fontWeight="400"
              mt="10px"
            >
              minutes
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            alignItems="center"
          >
            <Box
              width="96.98px"
              height="96.98px"
              background="white"
              borderRadius="16px"
            >
              <Text
                lineHeight="42px"
                fontSize="42px"
                fontWeight="700"
                fontFamily="Montserrat"
                mt="28px"
                color="#000126"
              >
                {seconds}
              </Text>
            </Box>
            <Text
              lineHeight="18.23px"
              fontSize="14px"
              fontWeight="400"
              mt="10px"
            >
              seconds
            </Text>
          </Flex>
        </Grid>
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
        style={{ position: "relative", overflow: "hidden" }}
      >
        <Grid
          templateColumns="1fr"
          justifyContent="center"
          alignItems="center"
          w="100%"
          px="3%"
        >
          {Object.keys(Partners).map((id, partnersIndex) => {
            let position = "position-9";
            let partnersLength = Object.keys(Partners).length;
            if (partnersIndex === index) {
              position = "position-1";
            }
            if (
              partnersIndex === index + 1 ||
              index - partnersIndex == partnersLength - 1
            ) {
              position = "position-2";
            }

            if (
              partnersIndex === index + 2 ||
              index - partnersIndex == partnersLength - 2
            ) {
              position = "position-3";
            }

            if (
              partnersIndex === index + 3 ||
              index - partnersIndex == partnersLength - 3
            ) {
              position = "position-4";
            }

            if (
              partnersIndex === index + 4 ||
              index - partnersIndex == partnersLength - 4
            ) {
              position = "position-5";
            }

            if (
              partnersIndex === index + 5 ||
              index - partnersIndex == partnersLength - 5
            ) {
              position = "position-6";
            }

            if (
              partnersIndex === index + 6 ||
              index - partnersIndex == partnersLength - 6
            ) {
              position = "position-7";
            }

            if (
              partnersIndex === index + 7 ||
              index - partnersIndex == partnersLength - 7
            ) {
              position = "position-8";
            }

            if (
              partnersIndex === index - 1 ||
              (index === 0 && partnersIndex === partnersLength - 1)
            ) {
              position = "position-0";
            }

            return (
              <Box
                className={`partners_container ${position}`}
                width={{ sm: "100%", md: "25%", lg: "17%" }}
              >
                <Image
                  style={{ margin: "auto" }}
                  src={Partners[id].img}
                  alt={Partners[id].name}
                />
              </Box>
            );
          })}
        </Grid>
      </Flex>
    </Flex>
  );
}

export default Home;
