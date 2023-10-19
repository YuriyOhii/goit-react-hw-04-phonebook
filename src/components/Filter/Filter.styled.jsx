import styled from 'styled-components';
export const Search = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 4px;

  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;

  color: ${({ theme }) => theme.colors.red};
`;
