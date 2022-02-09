const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_FRONT_URL = process.env.REACT_APP_BASE_FRONT_URL;

const GET_LIST_API = `${BASE_URL}/product/list`;
const GET_SNKRS_LIST_API = `${BASE_URL}/snkrs/list`;

const REST_API_KEY = '431f22e98bdcf940e03ed5683279604a';
const REDIRECT_URI = `${BASE_FRONT_URL}/oauth`;
const CLIENT_SECRET = 'kRvKEnDviwALGL0NSYG0rN9jhpXCmHoh';

const GET_SIGN_IN_API = `${BASE_URL}/user/signin`;
const POST_MEMBER_API = `${BASE_URL}/user/member`;

export {
  GET_LIST_API,
  GET_SNKRS_LIST_API,
  REST_API_KEY,
  REDIRECT_URI,
  CLIENT_SECRET,
  GET_SIGN_IN_API,
  POST_MEMBER_API,
};
