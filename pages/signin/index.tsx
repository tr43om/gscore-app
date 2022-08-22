import { useTheme } from "styled-components";
import { useEffect } from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";
import {
  Typography,
  ProgressTabs,
  PrimaryButton,
  FormInput,
} from "../../components";

import { NextPage } from "next";
import { login } from "../../store/ducks/user/actions";
import { useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/ducks/user/selectors";

const Signin: NextPage = () => {
  const { typography } = useTheme();
  const { fonts, variants } = typography;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { userInfo, success } = useSelector(selectUser);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string().required("Please Enter your password"),
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitSuccessful },
    getValues,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    if (success) router.push("/");
  }, [success, router]);

  const onSubmit = () => {
    const data = getValues();
    dispatch(login(data));
  };

  console.log(success);
  return (
    <Main>
      <ProgressTabs $step={2} $mb="4rem" />
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
        <PrimaryButton isLoading={isSubmitSuccessful}>Log in</PrimaryButton>
      </Form>
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

export default Signin;
