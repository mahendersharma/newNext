// components/Navbar.tsx
import { Box, Flex, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link"; // Import Next.js Link
import { Link as ChakraLink } from '@chakra-ui/react';
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Box bg={bg} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>Scintillatealliance</Box>
        <Flex alignItems="center">

          <ChakraLink as={NextLink} href="/" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.200" }}>
            Home
          </ChakraLink>
          <ChakraLink as={NextLink} href="/Favorites" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.200" }}>
            Favorites
          </ChakraLink>
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
            variant="ghost"
            color="current"
            ml={2}
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
