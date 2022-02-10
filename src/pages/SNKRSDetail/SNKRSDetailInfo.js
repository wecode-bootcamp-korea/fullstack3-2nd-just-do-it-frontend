import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { GrClose } from 'react-icons/gr';
import { useParams } from 'react-router-dom';
export default function SNKRSDetailInfo() {
  const [snkrsDetail, setSnkrsDetail] = useState('');
  const [userData, setUserData] = useState();
  const [size, setSize] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const params = useParams();

  const token = localStorage.getItem('token');

  // 페이지 렌더링 데이터
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/snkrs/detail/${params.styleCode}`)
      .then(res => setSnkrsDetail(res.data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 드로우
  const draw = () => {
    if (size === 0 || size === '사이즈 선택') {
      return alert('신발 사이즈를 선택해주세요!');
    } else if (!snkrsDetail.is_open) {
      return alert('Draw 시간이 아닙니다!');
    } else if (size !== '사이즈 선택' && snkrsDetail.is_open) {
      fetch(`${process.env.REACT_APP_BASE_URL}/snkrs`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json', user_id: token },
        body: JSON.stringify({
          style_code: `${snkrsDetail.style_code}`,
          size: `${size}`,
        }),
      }).then(res => {
        if (res.status === 409) {
          alert('이미 추첨을 하셨습니다');
        } else {
          alert('응모가 완료되었습니다');
        }
      });
    }
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const pickValue = e => {
    setSize(e.target.value);
  };

  // 추첨 결과
  useEffect(() => {
    axios
      .put(`${process.env.REACT_APP_BASE_URL}/snkrs`, {
        headers: { user_id: token },
        body: { style_code: params.styleCode },
      })
      .then(res => setUserData(res.data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openModal]);

  return (
    <SNKRSDetailInfos>
      {openModal ? ( // 모달 창
        <ModalBackground onClick={() => closeModal()}>
          <ModalContainer onClick={e => e.stopPropagation()}>
            <div className="title">- RESULT -</div>
            <GrClose className="SNKRSModalIcon" onClick={() => closeModal()} />
            {userData &&
              userData.map((obj, index) => {
                return (
                  <UserDataWrapper key={index}>
                    {obj.count === 0 ? (
                      <div className="wait">
                        {obj.create_at.substr(0, 10) +
                          '일  ' +
                          obj.create_at.substr(11, 5) +
                          `분의 `}
                        <span className="products"> '{obj.product_name}'</span> 추첨은
                        <span className="ing"> '진행 중'</span>입니다!
                      </div>
                    ) : (
                      <div className="content">
                        <div className="title">
                          <span>{obj.name}님</span>의 {obj.count}회차 응모결과
                          <div className="titleTime">
                            ({obj.create_at.substr(0, 10) + ' ' + obj.create_at.substr(11, 5)})
                          </div>
                        </div>
                        <div>
                          {obj.is_winner ? (
                            <div>
                              <div>🎉 축하합니다 🎉</div>
                              <div>
                                <div>
                                  <span>{obj.name}님</span>은
                                  <span className="products"> '{obj.product_name}'</span>에
                                </div>
                                <div>
                                  <span className="win">당첨</span>
                                  되셨습니다!
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="lose">
                              <div>
                                아쉽게도 <span>{obj.name}님</span>은
                                <span className="lose">당첨되지 않았습니다</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </UserDataWrapper>
                );
              })}
          </ModalContainer>
        </ModalBackground>
      ) : null}

      <SNKRSDetailInfosTitle>{snkrsDetail.name}</SNKRSDetailInfosTitle>
      <SNKRSDetailInfosPrice>
        {parseInt(snkrsDetail.price).toLocaleString()} 원
      </SNKRSDetailInfosPrice>
      <div className="desc">
        모든 복장을 자기표현의 기회로 삼으세요!
        <br />
        <br />
        <span>
          {`이번 ${snkrsDetail.name}는 농구 아이콘을 강조해 오랜 시간을 거쳐 검증된 디자인 그
        이상을 보여줍니다!`}
        </span>
        <br />
        <br />
        다양한 방법으로 신발 끈을 조일 수 있는 옵션, 더블 아이스테이, 여분의 신발 끈 세트로 날마다
        어울리는 맞춤 룩을 연출할 수 있습니다!
        <br />
        <br /> 과감해지는 걸 두려워하지 마세요! <br />
        <br /> 설포의 신축성 밴드가 신발 끈이 느슨해져도 꼭 맞는 핏을 선사합니다!
        <br />
        <br />
        <div>매일 오전 09:00 ~ 09:30 추첨!</div>
      </div>
      <SizeSelection>
        <select onChange={pickValue}>
          <option value="사이즈 선택">사이즈 선택</option>
          {snkrsDetail.info &&
            snkrsDetail.info.map((obj, index) => {
              return (
                <option key={index} value={obj.size}>
                  {obj.size}
                </option>
              );
            })}
        </select>
      </SizeSelection>
      {snkrsDetail.is_open === 0 ? (
        <button onClick={() => draw()} disabled={true} style={{ opacity: 0.5 }}>
          Comming SOON!
        </button>
      ) : (
        <button onClick={() => draw()} disabled={false}>
          응모하기
        </button>
      )}

      {token ? (
        <button onClick={() => setOpenModal(true)}>추첨 확인</button>
      ) : (
        <button onClick={() => setOpenModal(false)} style={{ opacity: 0.5 }}>
          추첨 확인
        </button>
      )}
    </SNKRSDetailInfos>
  );
}

const SNKRSDetailInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin: 0 50px;

  .desc {
    padding: 8px;
    margin: 30px 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;

    & > div {
      text-align: center;
    }
  }

  button {
    width: 260px;
    margin-top: 20px;
    padding: 16px 1.5em;
    border-radius: 30px;
    border: none;
    color: white;
    background: black;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 640px) {
    width: 90%;
  }
`;

const SNKRSDetailInfosTitle = styled.div`
  font-size: 30px;
  font-weight: 900;
  line-height: 50px;
  text-align: center;
`;

const SNKRSDetailInfosPrice = styled.div`
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  margin-top: 30px;
`;

const SizeSelection = styled.div`
  text-align: center;
  select {
    width: 100%;
    font-size: 15px;
    padding: 8px 16px;
    margin-bottom: 30px;
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
  width: 30vw;
  height: 80%;
  max-height: 80%;
  padding: 16px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);
  text-align: center;

  .title {
    margin-top: 10px;
    font-size: 30px;
    font-weight: 700;
    .titleTime {
      font-size: 15px;
    }
  }

  .SNKRSModalIcon {
    text-align: center;
    font-size: 20px;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;
  }
`;

const UserDataWrapper = styled.div`
  margin-top: 20px;
  font-size: 16px;

  span {
    font-weight: 700;
  }

  div {
    padding: 7px;
  }

  .wait {
    border-bottom: 1px solid #dedede;
    padding: 30px 0;

    .ing {
      color: #567ace;
      font-weight: 900;
    }
  }
  .products {
    color: #567ace;
  }
  .content {
    overflow-y: auto;
    border-bottom: 1px solid #dedede;

    .title {
      font-size: 18px;
    }

    .win {
      color: #c3a923;
    }

    .lose {
      color: #b74141;
    }
  }
`;
