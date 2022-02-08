import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledDetailImg = styled.div`
  width: calc(100% - 25vw);
  position: relative;
  padding: 0 10px;

  .detailImgWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    column-gap: 10px;
  }

  .detailImgWrapper.active {
    display: flex;
    flex-direction: column;
  }
`;

const List = styled.li`
  position: relative;
  width: 99%;
  display: flex;
  justify-content: center;
  background: #f2f2f2;
  align-items: center;
  margin-bottom: 20px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    background: #f2f2f2;
  }
`;

export default function DetailImg() {
  const [imgData, setImgData] = useState([]);
  const [acc, setAcc] = useState(false);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/product/detail/${params.styleCode}`)
      .then(res => setImgData(res.data.data.img));
  }, []);

  useEffect(() => {
    if (imgData.length === 2) {
      setAcc(true);
    } else {
      setAcc(false);
    }
  }, [imgData]);

  return (
    <StyledDetailImg>
      <div className={acc ? 'detailImgWrapper active' : 'detailImgWrapper'}>
        {imgData &&
          imgData.map(obj => {
            return (
              <List key={obj.url}>
                <ImgWrapper>
                  <img src={obj.url} alt={obj.url} style={{ width: acc ? '50%' : '100%' }} />
                </ImgWrapper>
              </List>
            );
          })}
      </div>
    </StyledDetailImg>
  );
}
