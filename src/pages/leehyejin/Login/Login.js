import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
// import '../../styles/common.scss';

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };

  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const handleIdInput = e => {
    setId(e.target.value);
  };

  const handlePwdInput = e => {
    setPwd(e.target.value);
  };

  // const handlePwdInput = e => {
  //   setPwd(e.target.value);
  // };
  return (
    <div className="wrapper">
      <div className="container">
        <span className="logo">Westagram</span>

        <div className="input">
          <form>
            <input
              className="idInput"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={id}
              onChange={handleIdInput}
            />
            <input
              className="pwInput"
              type="password"
              placeholder="비밀번호"
              value={pwd}
              onChange={handlePwdInput}
            />
            <input
              className="btnSubmit"
              type="submit"
              value="로그인"
              onClick={goToMain}
              disabled={id.includes('@') && pwd.length > 4 ? false : true}
            />
          </form>
        </div>

        <div className="footer">
          <a href="https://www.instagram.com/accounts/password/reset/">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
