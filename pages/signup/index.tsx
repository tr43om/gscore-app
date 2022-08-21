import styled, { useTheme } from "styled-components";
import { useEffect } from "react";
import Link from "next/link";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Typography,
  ProgressTabs,
  PrimaryButton,
  FormInput,
} from "../../components";

const Signup: NextPage = () => {
  const { typography } = useTheme();
  const { fonts, variants } = typography;
  const router = useRouter();

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

  const {
    handleSubmit,
    control,
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

  useEffect(() => {
    if (isSubmitSuccessful) router.push("/signin");
  }, [isSubmitSuccessful, router]);

  const onSubmit = () => {
    console.log("it works");
  };

  return (
    <Main>
      <ProgressTabs $step={1} $mb="4rem" />
      <Typography
        $variant={variants.specialHeading3}
        $fontFamily={fonts.thicccboi700}
        $mb="1rem"
      >
        Create account
      </Typography>
      <Typography $variant={variants.paragraphSmall} $mb="2rem">
        You need to enter your name and email. We will send you a temporary
        password by email
      </Typography>
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

        <PrimaryButton isLoading={isSubmitSuccessful}>
          Send password
        </PrimaryButton>
      </Form>

      <Typography $mt="3rem">
        Have an account?{" "}
        <Link href="/signin">
          <StyledLink>Go to the next step</StyledLink>
        </Link>
      </Typography>
    </Main>
  );
};

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

const StyledLink = styled.a`
  cursor: pointer;
  color: var(--c-accent);
  text-decoration: none;
`;

export default Signup;
