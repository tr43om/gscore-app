import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import styled, { useTheme } from "styled-components";
import {
  Error,
  FormInput,
  PrimaryButton,
  Tab,
  Tabs,
  Typography,
} from "../../components";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/rootReducer";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAppDispatch } from "../../store/store";
import { changePassword, changePersonalInfo } from "../../store/rootReducer";

const SettingsScreen = (props: SettingsScreenProps) => {
  const { typography } = useTheme();
  const { fonts, variants } = typography;
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const router = useRouter();

  // useEffect(() => {
  //   if (!isAuthorized) router.push("/signup");
  // }, [isAuthorized, router]);

  // Form hook for "Personal Info" tab
  const {
    handleSubmit: handlePersonalInfoSubmit,
    control: personalInfoControl,
    getValues: getPersonalInfo,
    formState: { isSubmitSuccessful: isChangePersonalDataSuccessful },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
    },

    resolver: yupResolver(personalInfoSchema),
    mode: "onChange",
  });

  const savePersonalInfo = () => {
    const data = getPersonalInfo();
    dispatch(changePersonalInfo(data));
  };

  // Form hook for "Change Password" tab
  const {
    handleSubmit: handleChangePasswordSubmit,
    control: changePasswordControl,
    getValues: getPasswords,
    formState: { isSubmitSuccessful: isChangePasswordSuccessful },
  } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
    },

    resolver: yupResolver(changePasswordSchema),
    mode: "onChange",
  });

  const saveNewPassword = () => {
    const data = getPasswords();
    dispatch(changePassword(data));
  };

  return (
    <Main>
      <Typography
        $variant={variants.specialHeading2}
        $fontFamily={fonts.thicccboi700}
        $mb="3rem"
      >
        Settings
      </Typography>
      <Tabs $mb="3rem">
        <Tab title="Personal info">
          <Typography
            $variant={variants.specialHeading4}
            $fontFamily={fonts.thicccboi700}
            $mb="1.5rem"
          >
            Personal Info
          </Typography>
          <Form
            onSubmit={handlePersonalInfoSubmit(savePersonalInfo)}
            key="Personal info form"
          >
            <FormInput
              name="username"
              placeholder="Username"
              control={personalInfoControl}
              type="text"
              $success={isChangePersonalDataSuccessful && !user?.loading}
            />
            <FormInput
              name="email"
              placeholder="Email"
              control={personalInfoControl}
              type="email"
              $success={isChangePersonalDataSuccessful && !user?.loading}
            />
            <PrimaryButton isLoading={user?.loading}>Save</PrimaryButton>
          </Form>
        </Tab>
        <Tab title="Change Password">
          <Typography
            $variant={variants.specialHeading4}
            $fontFamily={fonts.thicccboi700}
            $mb="1.5rem"
          >
            Change Password
          </Typography>

          <Form
            onSubmit={handleChangePasswordSubmit(saveNewPassword)}
            key="Change password form"
          >
            <FormInput
              name="currentPassword"
              placeholder="Current Password"
              control={changePasswordControl}
              type="password"
            />
            <FormInput
              name="newPassword"
              placeholder="New Password"
              control={changePasswordControl}
              type="password"
            />
            <PrimaryButton isLoading={user?.loading}>Save</PrimaryButton>
            {user?.error && <Error>Incorrect current password!</Error>}
          </Form>
        </Tab>
      </Tabs>
    </Main>
  );
};

type SettingsScreenProps = {};

const personalInfoSchema = yup.object().shape({
  username: yup.string().required("Enter new username"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});

const changePasswordSchema = yup.object().shape({
  currentPassword: yup.string().required("Enter current password"),
  newPassword: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Enter new password"),
});

const Main = styled.main``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export default SettingsScreen;
