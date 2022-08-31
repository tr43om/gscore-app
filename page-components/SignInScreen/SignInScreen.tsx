import { useTheme } from "styled-components";
import { useEffect } from "react";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";
import {
  Typography,
  Stepper,
  PrimaryButton,
  FormInput,
  Error,
} from "../../components";

import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/store";
import { login, setAccessToken } from "../../store/rootReducer";
import { selectUser } from "../../store/rootReducer";

const SignInScreen = (props: SignInScreenProps) => {
  const { typography } = useTheme();
  const { fonts, variants } = typography;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);

  const { handleSubmit, control, getValues } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // useEffect(() => {
  //   if (isAuthorized && !loading) router.push("/checkout");
  // }, [isAuthorized, router, loading]);

  const onSubmit = async () => {
    const data = getValues();
    const { payload } = await dispatch(login(data));
    dispatch(setAccessToken(payload?.token));
  };

  return (
    <Main>
      <Stepper $step={2} $mb="4rem" />
      <Typography
        $variant={variants.specialHeading3}
        $fontFamily={fonts.thicccboi700}
        $mb="2rem"
      >
        Log in
      </Typography>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name="email"
          placeholder="Email"
          control={control}
          type="email"
        />
        <FormInput
          name="password"
          placeholder="Password"
          control={control}
          type="password"
        />
        <PrimaryButton isLoading={user?.loading}>Log in</PrimaryButton>
      </Form>
      {user?.error && <Error>Incorrect email or password</Error>}
    </Main>
  );
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Please Enter your password"),
});

const Main = styled.main`
  width: 100%;
  max-width: 38.75rem;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

type SignInScreenProps = {};

export default SignInScreen;
