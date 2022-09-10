import * as yup from "yup";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { withoutAuth } from "../../hocs";

// redux
import { useSelector } from "react-redux";
import {
  getSubscriptions,
  login,
  getCodes,
  useAppDispatch,
  selectUser,
} from "../../store";

// types
import { SignInDto } from "../../types";

// components
import { Stepper, PrimaryButton, FormInput, Error } from "../../components";

const SignInScreen = (props: SignInScreenProps) => {
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);

  const { handleSubmit, control } = useForm<SignInDto>({
    defaultValues: {
      email: "",
      password: "",
    },

    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const signIn = handleSubmit(async (data) => {
    await dispatch(login(data));
    await dispatch(getSubscriptions());
    await dispatch(getCodes());
  });

  return (
    <Main>
      <Stepper $step={2} />
      <Title mb={2}>Log in</Title>

      <Form onSubmit={signIn}>
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
        <PrimaryButton isLoading={user.loading}>Log in</PrimaryButton>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

type SignInScreenProps = {};

export default withoutAuth(SignInScreen);
