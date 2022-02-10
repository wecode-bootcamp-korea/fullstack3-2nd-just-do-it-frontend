import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import { CLIENT_SECRET, REDIRECT_URI, REST_API_KEY, GET_SIGN_IN_API } from '../../config';

const Auth = () => {
  const navigate = useNavigate();

  // calllback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    try {
      axios
        .post(
          'https://kauth.kakao.com/oauth/token',
          qs.stringify({
            grant_type: 'authorization_code',
            client_id: REST_API_KEY,
            redirect_uri: REDIRECT_URI,
            code: code,
            client_secret: CLIENT_SECRET,
          })
        )
        .then(res =>
          axios
            .get(GET_SIGN_IN_API, { headers: { accessToken: res.data.access_token } })
            .then(res => {
              localStorage.setItem('token', res.data.token);
            })
        )
        .then(alert(`환영합니다!`))
        .then(navigate('/'));
    } catch (err) {
      alert('로그인 실패');
    }
  }, []);

  return null;
};

export default Auth;
