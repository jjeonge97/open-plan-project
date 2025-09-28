import { FC } from 'react';
import styled from 'styled-components';

interface Props {
  color?: string;
}

const Header: FC<Props> = ({ color = '#1a1a1a' }) => {
  return <Container color={color}>지원자분 성함을 적어주세요</Container>;
};

export default Header;

const Container = styled.div<{ color: string }>`
  font-size: 15px;
  padding: 17px 20px;
  text-align: center;
  color: ${({ color }) => color};
`;
