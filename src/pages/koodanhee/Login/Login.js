/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-koodanhee');
  };

  // *회원가입 영역*
  // useEffect(() => {
  //   console.log('실행');
  //   // fetch('http://10.58.3.212:8000/user/signup', {
  //   //   method: 'POST',
  //   //   body: JSON.stringify({
  //   //     email: 'danhee@naver.com',
  //   //     password: '123456@a',
  //   //   }),
  //   // })
  //   //   .then(response => response.json())
  //   //   .then(result => {
  //   //     console.log(result);
  //   //   });
  // }, []);

  // *로그인영역*
  // const goToMain = e => {
  //   e.preventDefault();
  //   fetch('http://10.58.3.212:8000/user/login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: idValue,
  //       password: pwValue,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       if (result.message === '성공입니다. 축하합니다.') {
  //         alert('환영합니다!');
  //         localStorage.setItem('access_token', result.access_token);
  //         navigate('/main-koodanhee');
  //         // console.log(localStorage.getItem('access_token')); *토큰결과 보여줘
  //       } else {
  //         alert('다시시도해주세요!');
  //       }
  //     });
  // };

  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);
  console.log(commentList);

  const handleInput = e => {
    setIdValue(e.target.value);
  };
  const handleInputPw = e => {
    setPwValue(e.target.value);
  };

  const loginOn = () => {
    return idValue.includes('@') && pwValue.length >= 5;
  };

  return (
    <div className="body-box">
      {/*       <div>
        {commentList.map(comment => {
          return (
            <div key={comment.id}>
              <h1>{comment.userName}</h1>
              <h1>{comment.content}</h1>
            </div>
          );
        })}
      </div> */}
      <div className="parentBox">
        <h1 className="westagram">Instagram</h1>
        <div className="login-box">
          <form className="login-form" onSubmit={goToMain}>
            <input
              onChange={handleInput}
              id="loginId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={handleInputPw}
              id="loginPw"
              type="password"
              placeholder="비밀번호"
            />
            <button
              type="submit"
              className={!loginOn() ? 'button-off' : 'button-on'}
              disabled={!loginOn()}
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
