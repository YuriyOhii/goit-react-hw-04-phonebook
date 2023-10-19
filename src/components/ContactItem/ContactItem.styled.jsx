import styled from 'styled-components';
export const TelNumber = styled.span`
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 4px;
`;

export const DelButton = styled.button`
  margin-left: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing()} ${({ theme }) => theme.spacing(2)};

  border-radius: 4px;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02em;

  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};

  opacity: 1;
  transition: opacity 250ms linear;

  cursor: pointer;
  :hover,
  :focus {
    opacity: 0.5;
  }
`;
