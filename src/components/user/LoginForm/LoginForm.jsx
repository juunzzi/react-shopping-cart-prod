import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loginUserThunk } from 'store/actions/user.action';

import useInputValue from 'hooks/useInputValue';

import { Form, Input } from 'components/common';

import { ROUTE } from 'constants/route';

function LoginForm() {
  const [emailValue, setEmailValue] = useInputValue();
  const [passwordValue, setPasswordValue] = useInputValue();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailInput = ({ target: { value } }) => {
    setEmailValue(value);
  };

  const handlePasswordInput = ({ target: { value } }) => {
    setPasswordValue(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(
        loginUserThunk({
          email: emailValue,
          password: passwordValue,
        }),
      );

      navigate(ROUTE.HOME);
    } catch ({ message }) {
      alert(message);
    }
  };

  const inputAttributeList = [
    {
      name: 'email',
      type: 'email',
      labelText: '이메일 주소',
      placeholder: 'example@woowacourse.com',
      value: emailValue,
      onChange: handleEmailInput,
    },
    {
      name: 'password',
      type: 'password',
      labelText: '비밀번호',
      placeholder: '비밀번호를 입력해주세요',
      value: passwordValue,
      onChange: handlePasswordInput,
    },
  ];
  return (
    <Form buttonText="로그인" onSubmit={onSubmit}>
      {inputAttributeList.map((inputDescription) => (
        <Input key={inputDescription.name} {...inputDescription} required={true} />
      ))}
    </Form>
  );
}

export default LoginForm;
