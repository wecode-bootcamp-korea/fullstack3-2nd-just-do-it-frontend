import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SNKRSDetailInfos = styled.div`
  margin: 0 auto;
  position: fixed;
  right: 120px;
  top: 100px;
  display: flex;
  flex-direction: column;
  max-width: 480px;
  margin: 0 auto;
  min-height: 100vh;
  max-height: 100vh;
  height: 100%;

  span {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    transition: opacity 0.15s linear;
  }

  div {
    margin: 20px auto;
  }

  button {
    width: 100%;
    height: auto;
    margin-bottom: 24px;
    margin-top: 20px;
    padding: 18px 1.5em;
    border-radius: 30px;
    border: none;
    color: white;
    background: black;
    font-size: 16px;
    cursor: pointer;
  }
`;

const SNKRSDetailInfosTitle = styled.div`
  font-size: 30px;
`;

const SNKRSDetailInfosPrice = styled.div`
  font-size: 20px;
`;
const SizeSelection = styled.div`
  select {
    width: 100%;
    font-size: 20px;
    padding: 8px 16px;
  }
`;

const ModalBackground = styled.div`
  margin: 0 !important;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  z-index: 0;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 80%;
  max-height: 80%;
  padding: 16px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);
  text-align: center;

  button {
    text-align: center;
    font-size: 10px;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 4rem;
    cursor: pointer;
  }
`;

const UserDataWrapper = styled.div`
  margin: 10px 0;
  border-bottom: 1px gray solid;
`;

export default function SNKRSDetailInfo() {
  const [data, setData] = useState('');
  const [userData, setUserData] = useState([]);
  const [count, setCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    axios.get('data/snkrsdata.json').then(res => setData(res.data.data));
  }, []);
  useEffect(() => {
    axios.get('data/snkrsuserdata.json').then(res => setUserData(res.data.data));
  }, []);
  const closeModal = () => {
    setOpenModal(false);
  };
  useEffect(() => {
    if (data.is_open !== 0) {
      setCount(count + 1);
    }
  }, []);

  const allowClick = () => {
    if (data.is_open === 0 && count > 0) {
      alert('no');
    } else {
      alert('hi');
    }
  };
  return (
    <SNKRSDetailInfos>
      {openModal ? (
        <ModalBackground onClick={closeModal}>
          <ModalContainer onClick={e => e.stopPropagation()}>
            <div>추첨 결과</div>
            <button onClick={closeModal}>나가기</button>
            {userData &&
              userData.map((obj, index) => {
                return (
                  <UserDataWrapper>
                    <div>{index + 1}회차</div>
                    <div>{obj.name}</div>
                    <div>{obj.style_code}</div>
                    <div>{obj.is_winner !== 0 ? '당첨' : '미당첨'}</div>
                  </UserDataWrapper>
                );
              })}
          </ModalContainer>
        </ModalBackground>
      ) : null}
      <SNKRSDetailInfosTitle>{data.name}</SNKRSDetailInfosTitle>
      <SNKRSDetailInfosPrice>{data.price} 원</SNKRSDetailInfosPrice>
      <div>Description</div>
      <div>1월 23일 오전 9시 출시 예정</div>
      <button onClick={() => setOpenModal(true)}>추첨 확인</button>
      <SizeSelection>
        <select>
          <option value="사이즈 선택">사이즈 선택</option>;
          {data.info &&
            data.info.map((obj, index) => {
              return <option value={obj.size}>{obj.size}</option>;
            })}
        </select>
      </SizeSelection>
      <button onClick={() => allowClick()}>응모하기</button>
    </SNKRSDetailInfos>
  );
}
