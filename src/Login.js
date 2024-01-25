import {
  VStack,
  ButtonGroup,
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
  Input,
  Heading,
  Text,
  TextField,
} from "@chakra-ui/react";
import { useState } from "react";

import { useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");
  const [error, seterror] = useState("");
  const submitForm = () => {
    if (!name || !pass) {
      seterror(" Both field require");
    }
    window.Location.href = "/home";
  };
  return (
    <>
      <VStack
        w={{ base: "90%", md: "500px" }}
        m="auto"
        justify="center"
        h="100vh"
        spacing="1rem"
      >
        <Heading>Log In</Heading>
        <Text>{error}</Text>
        <Input
          name="username"
          placeholder="Enter username"
          autoComplete="off"
          label="UserName"
        />
        <Input
          name="password"
          placeholder="Enter password"
          autoComplete="off"
          label="Password"
          type="password"
        />

        <ButtonGroup>
          <Button colorScheme="teal" onClick={() => navigate("/home")}>
            Login
          </Button>
          <Button>Create Account</Button>
        </ButtonGroup>
      </VStack>
    </>
  );
};
export default Login;
