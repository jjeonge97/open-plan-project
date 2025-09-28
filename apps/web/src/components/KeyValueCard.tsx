import { FC } from 'react';
import styled from 'styled-components';

interface Props {
  firstKey: string;
  firstValue: string | number;
  secondKey: string;
  secondValue: string | number;
  isRow?: boolean;
}

const KeyValueCard: FC<Props> = (props) => {
  const { firstKey, firstValue, secondKey, secondValue, isRow = false } = props;
  return (
    <Container className={isRow ? 'isRow' : ''}>
      <Wrapper className={isRow ? 'isRow' : ''}>
        <span>{firstKey}</span>
        <ValueText>{firstValue}</ValueText>
      </Wrapper>
      <Wrapper className={isRow ? 'isRow' : ''}>
        <span>{secondKey}</span>
        <ValueText>{secondValue}</ValueText>
      </Wrapper>
    </Container>
  );
};

export default KeyValueCard;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
  background: #fff;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    &.isRow {
      flex-direction: row;
      gap: 16px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;

  @media (min-width: 768px) {
    &.isRow {
      flex: 1;
    }
  }
`;

const ValueText = styled.span`
  opacity: 0.5;
`;
