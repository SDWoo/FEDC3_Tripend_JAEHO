import { USER, ERROR_MESSAGE_SIGNIN } from '../../utils/constants/auth';
import { Fieldset, FormButton, FormLogin, LoginContainer, LoginWrapper } from '../Signin/style';
import { FormSettingText, Input, PasswordBlock, PasswordText } from './style';

import { putPasswordChange } from '../../apis/auth';
import { useState } from 'react';

const UserSettingPassword = () => {
  const [values, setValues] = useState({
    password: '',
    newPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await putPasswordChange(values.password);

    if (res.status === 200) {
      swal(USER.CHANGE_PASSWORD_SUCCESS, '', ERROR_MESSAGE_SIGNIN.PASSWORD_SUCCESS);
    }

    setValues({
      password: '',
      newPassword: '',
    });
  };
  return (
    <>
      <PasswordBlock>
        <LoginWrapper>
          <LoginContainer>
            <FormLogin onSubmit={handleSubmit}>
              <FormSettingText>비밀번호 변경</FormSettingText>

              <Fieldset>
                <legend>비밀번호</legend>

                <Input
                  name="password"
                  value={values.password}
                  type="password"
                  onChange={handleChange}
                />
              </Fieldset>

              <Fieldset>
                <legend>비밀번호 확인</legend>
                <Input
                  name="newPassword"
                  value={values.newPassword}
                  type="password"
                  onChange={handleChange}
                />
              </Fieldset>

              {values.newPassword.length > 0 && values.password !== values.newPassword && (
                <PasswordText>{USER.PASSWORD_FAILED}</PasswordText>
              )}
              <FormButton
                type="submit"
                disabled={
                  !values.password || !values.newPassword || values.password !== values.newPassword
                }
              >
                비밀번호 변경
              </FormButton>
            </FormLogin>
          </LoginContainer>
        </LoginWrapper>
      </PasswordBlock>
    </>
  );
};

export default UserSettingPassword;
