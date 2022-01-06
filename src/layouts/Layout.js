import React from "react";
import { Route, Routes } from "react-router-dom";
import "@fontsource/dm-sans";
import "@fontsource/montserrat";

// chakra imports
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme/theme.js";

import Home from "../views/Home/Home.js";

export default function Layout() {
  return (
    <ChakraProvider theme={theme} resetCss={false} w="100%">
      <Routes>
        <Route path="/" element={<Home />} key="0" />
      </Routes>
    </ChakraProvider>
  );
}
