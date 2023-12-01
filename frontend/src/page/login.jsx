import { useEffect } from "react";
import { Box, Flex, Button, Image, Text, Input } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import * as yup from "yup";
import { TabTitle } from "../utils/utility";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../utils/api";

const schema = yup.object({
  username: yup.string().required("username harus diisi"),
  password: yup
    .string()
    .min(6, "Password harus lebih dari 6 karakter")
    .required("Password harus diisi"),
});

const Login = () => {
  const navigate = useNavigate();
  TabTitle("Login - Gas Detector Monitoring");
  const handleSubmitComplate = async (usernameValue, passwordValue) => {
    await axios
      .post(
        login.post,
        {
          username: usernameValue,
          password: passwordValue,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        if (response.data == "" || response.data == " ") {
          alert("Login gagal");
        } else {
          localStorage.setItem("token", response.data);
          navigate("/room");
        }
      })
      .catch(() => alert("username atau password salah"));
  };

  const checkToken = () => {
    if (localStorage.getItem("token") != null) {
      navigate("/room");
    }
  };
  TabTitle("Login");

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <Flex
      backgroundColor={"var(--color-on-primary)"}
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        flexDir={"column"}
        backgroundColor={"var(--color-on-primary)"}
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        display={{ base: "none", md: "none", lg: "flex" }}
      >
        <Image
          position={"Relative"}
          width={"80%"}
          maxWidth={"400px"}
          src={"/logo.png"}
        />
      </Flex>
      <Flex
        backgroundColor={{ lg: "var(--color-primer)" }}
        width="100%"
        height="100%"
        alignItems={{ lg: "center" }}
        justifyContent="center"
      >
        <Box
          max-width="649px"
          borderRadius={"20px"}
          display="flex"
          gap="40px"
          flexDirection={"column"}
          size={"md"}
          width={{ base: "100%", md: "80%" }}
          padding="90px 50px 90px 50px"
          backgroundColor={"var(--color-on-primary)"}
          justifyContent={{ lg: "center" }}
          textAlign="center"
          alignItems="center"
        >
          <Image
            sizes="md"
            display={{ base: "flex", lg: "none" }}
            position={"Relative"}
            width={"80%"}
            maxWidth={"200px"}
            src={"/logo.png"}
          />

          <Text
            size="md"
            fontWeight="bold"
            fontFamily="var(--font-family-secondary)"
            fontSize="var(--header-2)"
            color="var(--color-primer)"
          >
            Masuk
          </Text>
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={schema}
            onSubmit={(values, actions) => {
              actions.resetForm();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit}>
                <FormControl
                  size={"md"}
                  marginTop={"20px"}
                  isInvalid={errors.username && touched.username}
                >
                  <FormLabel htmlFor="username">username</FormLabel>
                  <Input
                    size={"md"}
                    marginTop={"0 auto"}
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="outline"
                    placeholder="Masukkan username"
                  />
                  <FormErrorMessage>{errors.username}</FormErrorMessage>
                </FormControl>
                <FormControl
                  size={"md"}
                  marginTop={"20px"}
                  isInvalid={!!errors.password && touched.password}
                >
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    size={"md"}
                    margin={"0 auto"}
                    variant="outline"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Masukkan password"
                    required="password harus diisi"
                    validate={(value) =>
                      value.length < 6
                        ? "Password harus lebih dari 6 karakter"
                        : null
                    }
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                {/* <Link to={"/unit/dashboard"}> */}
                <Button
                  marginTop={"44px"}
                  width="100%"
                  height="50px"
                  borderRadius="10px"
                  backgroundColor="var(--color-primer)"
                  loadingText="Tunggu Sebentar..."
                  type="submit"
                  className="btn-login"
                  onClick={() => {
                    handleSubmitComplate(values.username, values.password);
                  }}
                >
                  <Text
                    fontWeight="bold"
                    fontFamily="var(--font-family-secondary)"
                    fontSize="var(--header-3)"
                    color="var(--color-on-primary)"
                  >
                    Masuk
                  </Text>
                </Button>
                {/* </Link> */}
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </Flex>
  );
};
export default Login;
