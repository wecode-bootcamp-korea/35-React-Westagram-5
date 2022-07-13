import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-shinsoojung');
  };

  const [loginId, setLoginId] = useState('');
  const [loginPW, setLoginPw] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleIdInput = e => setLoginId(e.target.value);
  const handlePwInput = e => setLoginPw(e.target.value);

  const handleBtn = () => {
    loginId.includes('@') && loginPW.length >= 5
      ? setDisabled(false)
      : setDisabled(true);
  };

  // console.log(localStorage.getItem('login-token'));

  const goToBackEnd = () => {
    fetch('http://10.58.6.78:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: loginId,
        password: loginPW,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          localStorage.setItem('login-token', result.token);
          goToMain();
        } else {
          alert('가입 안 하신듯?');
        }
      });
  };

  return (
    <div>
      <main className="loginPage">
        <div className="loginBox">
          <div className="inputBox">
            <h1 className="logo">westagram</h1>
            <form className="inputIdPw">
              <input
                onChange={handleIdInput}
                onKeyUp={handleBtn}
                className="loginId"
                type="id"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                onChange={handlePwInput}
                onKeyUp={handleBtn}
                className="loginPw"
                type="password"
                placeholder="비밀번호"
              />
              <button
                onClick={goToBackEnd}
                className={disabled ? 'loginConfirm' : 'loginConfirm_pass'}
                disabled={disabled}
                type="button"
              >
                로그인
              </button>
              <div className="orLine">
                <div className="line" />
                <div className="or">또는</div>
                <div className="line" />
              </div>
              <div className="tryLoginFB">
                <div className="facebookLogin">
                  <img
                    alt="facebookicon"
                    className="facebookicon"
                    src="images/shinsoojung/Login/fb_icon.png"
                  />
                  <div className="facebookLoginText">
                    <a href="https://url.kr/j7pfcl">Facebook으로 로그인</a>
                  </div>
                </div>
                <a
                  className="findPw"
                  href="https://www.instagram.com/accounts/password/reset/"
                >
                  비밀번호를 잊으셨나요?
                </a>
              </div>
            </form>
          </div>
          <form className="joinMember">
            <button className="goMembershipJoin">
              계정이 없으신가요?{' '}
              <a href="https://www.instagram.com/accounts/emailsignup/">
                가입하기
              </a>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
