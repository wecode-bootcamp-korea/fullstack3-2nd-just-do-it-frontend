import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GET_SIGN_IN_API } from '../../config';

function Login() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [token, setToken] = useState();
  const navigate = useNavigate();

  const getLocal = async () => {
    // Kakao SDK API를 이용해 사용자 정보 획득
    let data = await window.Kakao.API.request({
      url: '/v2/user/me',
    });

    // 사용자 정보 변수에 저장
    setEmail(data.kakao_account.email);
    setName(data.properties.nickname);
    alert(`${data.properties.nickname}님 반갑습니다!`);
  };

  useEffect(() => {
    getLocal();
  }, []);

  axios
    .post(GET_SIGN_IN_API, {
      name: name,
      email: email,
    })
    .then(res => {
      setToken(res.data.token);
      localStorage.setItem('token', token);
    })
    .then(() => {
      navigate('/');
    });

  return null;
}

export default Login;
