import styled from 'styled-components';
import { Button } from '@open-plan/ui';
import '@open-plan/ui/button.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const onClickToMoveMain = () => {
    navigate('/');
  };

  return (
    <Container>
      <span>페이지가 존재하지 않습니다.</span>
      <Button label="메인으로" onClick={onClickToMoveMain} />
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  gap: 100px;
`;
