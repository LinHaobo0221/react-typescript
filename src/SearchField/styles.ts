import styled from 'styled-components';

export const Base = styled.input`
  height: 44px;
  appearance: textfield;
  padding: 0 16px;
  border: 1px solid transparent;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #00b8e0;
  }
`;
