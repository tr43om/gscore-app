import styled from "styled-components";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useSelector } from "react-redux";
import {
  useAppDispatch,
  changePassword,
  changePersonalInfo,
  selectUser,
} from "../../store";

import { Error, FormInput, PrimaryButton, Tab, Tabs } from "../../components";
import { UpdatePasswordDto, ChangePersonalDataDto } from "../../types";
import { withAuth } from "../../hocs";

const SettingsScreen = (props: SettingsScreenProps) => {
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();

  // Form hook for "Personal Info" tab
  const {
    handleSubmit: handlePersonalInfoSubmit,
    control: personalInfoControl,
    formState: { isSubmitSuccessful: isChangePersonalDataSuccessful },
  } = useForm<ChangePersonalDataDto>({
    defaultValues: {
      username: "",
      email: "",
    },

    resolver: yupResolver(personalInfoSchema),
    mode: "onChange",
  });

  const savePersonalInfo = handlePersonalInfoSubmit((data) =>
    dispatch(changePersonalInfo(data))
  );

  // Form hook for "Change Password" tab
  const {
    handleSubmit: handleChangePasswordSubmit,
    control: changePasswordControl,
  } = useForm<UpdatePasswordDto>({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
    },

    resolver: yupResolver(changePasswordSchema),
    mode: "onChange",
  });

  const saveNewPassword = handleChangePasswordSubmit((data) =>
    dispatch(changePassword(data))
  );

  return (
    <Main>
      <ScreenTitle>Settings</ScreenTitle>
      <Tabs $mb="3rem">
        <Tab title="Personal info">
          <Title mb={1.5}>Personal Info</Title>
          <Form onSubmit={savePersonalInfo} key="Personal info form">
            <FormInput
              name="username"
              placeholder="Username"
              control={personalInfoControl}
              type="text"
              $success={isChangePersonalDataSuccessful && !user.loading}
            />
            <FormInput
              name="email"
              placeholder="Email"
              control={personalInfoControl}
              type="email"
              $success={isChangePersonalDataSuccessful && !user.loading}
            />
            <PrimaryButton isLoading={user?.loading}>Save</PrimaryButton>
          </Form>
        </Tab>
        <Tab title="Change Password">
          <Title mb={1.5}>Change Password</Title>

          <Form onSubmit={saveNewPassword} key="Change password form">
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

const Title = styled.h3<{ mb?: number }>`
  font: ${({
    theme: {
      variants: {
        specialHeading4: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};

  @media ${({ theme: { devices } }) => devices.laptopAndBelow} {
    font: ${({
      theme: {
        variants: {
          specialHeading4: { lineHeight, fontFamily, fontSize },
        },
      },
    }) => `${fontSize}/${lineHeight} ${fontFamily}`};
  }
  margin-bottom: ${({ mb }) => `${mb}rem`};
`;

const ScreenTitle = styled.h3`
  margin-bottom: 3rem;
  font: ${({
    theme: {
      variants: {
        specialHeading2: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};

  @media ${({ theme: { devices } }) => devices.laptopAndBelow} {
    font: ${({
      theme: {
        variants: {
          specialHeading3: { lineHeight, fontFamily, fontSize },
        },
      },
    }) => `${fontSize}/${lineHeight} ${fontFamily}`};
    margin-bottom: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export default withAuth(SettingsScreen);
