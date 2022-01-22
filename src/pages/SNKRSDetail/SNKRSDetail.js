import React from 'react';
import styled from 'styled-components';
import SNKRSDetailImg from './SNKRSDetailImg';
import SNKRSDetailInfo from './SNKRSDetailInfo';

const DetailSection = styled.section`
  display: flex;
  margin: 20px 60px;
`;

export default function SNKRSDetail() {
  return (
    <div className="SNKRSDetail">
      <DetailSection>
        <SNKRSDetailImg />
        <SNKRSDetailInfo />
      </DetailSection>
    </div>
  );
}
