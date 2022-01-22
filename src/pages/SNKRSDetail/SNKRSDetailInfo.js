import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SNKRSDetail from './SNKRSDetail';

const SNKRSDetailInfos = styled.div``;
const SizeSelection = styled.div``;

export default function SNKRSDetailInfo() {
  const [data, setData] = useState('');
  useEffect(() => {
    axios.get('data/snkrsdata.json').then(res => setData(res.data.data));
  }, []);

  return (
    <SNKRSDetailInfos>
      <div>{data.name}</div>
      <div>{data.price} 원</div>
      <div>Description</div>
      <div>1월 23일 오전 9시 출시 예정</div>
      <button>추첨 확인</button>
      <SizeSelection>
        <select>
          <option value="사이즈 선택">사이즈 선택</option>;
          {data.info &&
            data.info.map((obj, index) => {
              return <option value={obj.size}>{obj.size}</option>;
            })}
        </select>
      </SizeSelection>
    </SNKRSDetailInfos>
  );
}
