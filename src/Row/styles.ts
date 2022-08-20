import styled, { css } from 'styled-components';

export const Base = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const StatusIcon = styled.span<{ selected: boolean }>`
  font-size: 10px;
  padding: 8px;
  border-radius: 10px;
  ${({ selected }) => {
    return selected
      ? css`
          color: #fff;
          background-color: #61dafb;
        `
      : css`
          color: #fff;
          background-color: #afb2ba;
        `;
  }}
`;
