import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  // const Navigate = useNavigate();
  const [userId, setId] = useState('');
  const [userPw, setPw] = useState('');
  const [disable, setDisable] = useState('true');

  const handleBtn = () => {
    userId.includes('@') && userPw.length >= 5
      ? setDisable(false)
      : setDisable(true);
  };
  // Navigate('/main-kimsujeong');
  const goToMain = () => {
    fetch('http://10.58.3.189:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.access_token) {
          localStorage.setItem('login-token', response.access_token);
          //login-token은 내가 정한 값, response. 뒤, access_token은 백앤드가 정한 키값)
        } else {
          console.log('err');
        }
      });
  };
  const handleIdInput = e => {
    setId(e.target.value);
  };

  return (
    <div className="westagram">
      <div className="wrap">
        <div className="logo">
          <p>Westagram</p>
        </div>
        <div className="login">
          <form>
            <input
              type="text"
              id="userId"
              // value={userId}
              onChange={handleIdInput} // 사용자가 타자로 치는 값. 뭔가 변화 되는 이벤트를 감지
              onKeyUp={handleBtn}
              placeholder="전화번호, 사용자 또는 이메일"
            />
            <input
              type="password"
              // value={userPw}
              onChange={e => setPw(e.target.value)}
              id="userPw"
              onKeyUp={handleBtn}
              placeholder="비밀번호"
            />
            <div className="buttom_box">
              <button
                className={disable ? 'btn_focus' : 'btn_able'}
                disabled={disable}
                onClick={goToMain}
                type="button"
              >
                로그인
              </button>
            </div>
            <div className="lostPw">
              <p>
                <a href="https://www.instagram.com/accounts/password/reset/">
                  비밀번호를 잊으셨나요?
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="wrap_box">
        <p>
          계정이 없으신가요?
          <a href="https://www.instagram.com/accounts/emailsignup/">가입하기</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
