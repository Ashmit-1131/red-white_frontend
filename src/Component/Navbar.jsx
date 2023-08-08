import React from "react";
import {
  ChakraProvider,
  CSSReset,
  Box,
  Flex,
  Spacer,
  Link,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  return (
    <Box borderBottom="1px" borderColor="gray.200">
      <Flex justifyContent="space-between" padding={4}>
        <Box>
          <Link fontSize="xl" fontWeight="bold" color="teal.500" href="/">
            My Blog App
          </Link>
        </Box>
        <Box borderBottom="1px" borderColor="gray.200">
          <Flex justifyContent="space-between" padding={12}>
            <Box>
              <Link
                fontSize="xl"
                fontWeight="bold"
                color="blue.500"
                href="/blogs"
                marginRight="4"
              >
                Blogs
              </Link>
            </Box>
            <Link
              fontSize="xl"
              fontWeight="bold"
              color="red.500"
              href="/login"
              marginRight="4"
            >
              Login
            </Link>
            <Link
              fontSize="xl"
              fontWeight="bold"
              color="red.500"
              href="/signup"
              marginRight="4"
            >
              Sign Up
            </Link>
            <Link
              fontSize="xl"
              fontWeight="bold"
              color="yellow.500"
              href="/profile"
            >
              Profile
            </Link>
          </Flex>
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>
                <Link href="/blogs">Blogs</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/login">Login</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/signup">Sign Up</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/profile">Profile</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
