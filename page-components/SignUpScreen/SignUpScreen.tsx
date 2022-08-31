import styled from "styled-components";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Stepper, PrimaryButton, FormInput } from "../../components";

import { signup } from "../../store/rootReducer";
import { selectUser } from "../../store/rootReducer";
import { useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";

const SignUpScreen = (props: SignUpScreenProps) => {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);

  const {
    handleSubmit,
    control,
    getValues,
    formState: { isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },

    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // useEffect(() => {
  //   if (isAuthorized && !loading) router.push("/signin");
  // }, [isAuthorized, router, loading]);

  const onSubmit = () => {
    const data = getValues();
    dispatch(signup(data));
  };

  return (
    <Main>
      <Stepper $step={1} $mb="4rem" />
      <Title mb={1}>Create account</Title>
      <Description mb={2}>
        You need to enter your name and email. We will send you a temporary
        password by email
      </Description>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        Have an account? <Link href="/signin">Go to the next step</Link>
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

export default SignUpScreen;
