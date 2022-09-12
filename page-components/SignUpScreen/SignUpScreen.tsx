import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import styled from "styled-components";
import Link from "next/link";

import { useSelector } from "react-redux";
import { useAppDispatch, selectUser, signup } from "../../store";

import { Stepper, PrimaryButton, FormInput } from "../../components";

import { withoutAuth } from "../../hocs";

import { SignUpDto } from "../../types";
import { Routes } from "../../constants";

const SignUpScreen = (props: SignUpScreenProps) => {
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);
  const router = useRouter();

  const { handleSubmit, control } = useForm<SignUpDto>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },

    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const signUp = handleSubmit((data) => {
    dispatch(signup(data));
    router.push(Routes.CHECKOUT);
  });

  return (
    <Main>
      <Stepper $step={1} />
      <Title mb={1}>Create account</Title>
      <Description mb={2}>
        You need to enter your name and email. We will send you a temporary
        password by email
      </Description>
      <Form onSubmit={signUp}>
        <FormInput name="username" placeholder="Username" control={control} />
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

        <PrimaryButton isLoading={user?.loading}>Send password</PrimaryButton>
      </Form>

      <NextStepLink>
        Have an account? <Link href={Routes.SIGN_IN}>Go to the next step</Link>
      </NextStepLink>
    </Main>
  );
};

const schema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username should be at least 3 characters")
    .max(20, "Username is too long"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

const Main = styled.main`
  width: 100%;
  max-width: 38.75rem;
  margin: 0 auto;
`;

const Title = styled.h3<{ mb?: number }>`
  font: ${({
    theme: {
      variants: {
        specialHeading3: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
  margin-bottom: ${({ mb }) => `${mb}rem`};
`;

const Description = styled.p<{ mb?: number }>`
  font: ${({
    theme: {
      variants: {
        paragraphSmall: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
  margin-bottom: ${({ mb }) => `${mb}rem`};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const NextStepLink = styled.span`
  margin-top: 3rem;
  & > * {
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme: { colors } }) => colors.accent};
  }
`;

type SignUpScreenProps = {};

export default withoutAuth(SignUpScreen);
