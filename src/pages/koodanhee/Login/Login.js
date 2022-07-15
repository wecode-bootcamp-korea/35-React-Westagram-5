import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  const goToMain = e => {
    e.preventDefault();
    navigate('/main-koodanhee');
  };

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userData;
  const getUserData = event => {
    const { name, value } = event.target; //구조분해할당
    setUserData({ ...userData, [name]: value }); //계산된 속성명
  };

  const isValid = email.includes('@') && password.length > 5;

  return (
    <div className="Login">
      <div className="parentBox">
        <h1 className="westagram">Instagram</h1>
        <div className="login-box">
          <form className="login-form" onSubmit={goToMain}>
            <input
              onChange={getUserData}
              id="loginId"
              type="text"
              name="email"
              value={userData.email}
              placeholder="이메일"
            />
            <input
              onChange={getUserData}
              id="loginPw"
              type="password"
              name="password"
              value={userData.password}
              placeholder="비밀번호"
            />
            <button
              type="submit"
              disabled={isValid ? false : true}
              className={isValid ? 'button-on' : 'button-off'}
            >
              로그인
            </button>
          </form>
          <a href="" className="findPW">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </div>
  );
}
export default Login;
