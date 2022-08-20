import styled from 'styled-components';

export const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SwitchContainer = styled(Base)`
  flex-direction: row;
  justify-content: space-between;
`;
