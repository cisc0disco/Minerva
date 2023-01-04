import Head from "next/head";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });
    if (result.ok) {
      router.replace("/dashboard/home");
      return;
    }
    setError("Špatné údaje");
  };

  const bg = useColorModeValue("white", "#131224");

  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <Box bg={bg} w="100vw" h="100vh">
        <Flex direction="column" justify="center" align="center" h={"100%"}>
          <Heading>Přihlášení do portálu</Heading>
          <Box mt={10} w={"20em"}>
            <form onSubmit={onSubmit}>
              {error && (
                <Box my={4}>
                  <Alert status="error" borderRadius={4}>
                    <AlertIcon />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                </Box>
              )}
              <FormControl isRequired>
                <FormLabel>Emailová adresa</FormLabel>
                <Input
                  type="email"
                  onChange={(event) => setEmail(event.currentTarget.value)}
                />
                <FormHelperText>Tvoje školní adresa</FormHelperText>
              </FormControl>
              <FormControl isRequired mt={6}>
                <FormLabel>Heslo</FormLabel>
                <Input
                  type="password"
                  onChange={(event) => setPassword(event.currentTarget.value)}
                />
              </FormControl>
              <Button width="full" mt={5} type="submit">
                Přihlásit se
              </Button>
            </form>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
