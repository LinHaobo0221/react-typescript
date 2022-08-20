import styled from 'styled-components';

export const Base = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
`;

export const PageIndex = styled.div<{ selected: boolean }>`
  padding: 4px;
  height: 20px;
  width: 20px;
  background-color: ${({ selected }) => (selected ? '#cee0e4' : '#fff')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  &:hover {
    background-color: #cee0e4;
    cursor: pointer;
    transition: background-color 0.2s;
    transform: scaleX(1.3) scaleY(1.3);
  }
`;
