import styled from 'styled-components';

import theme from 'src/styles/theme';

const FormStyled = styled.form`
  background: #fff;
  height: 4rem;
  display: flex;
  .input {
    border: none;
    padding: 1em;
    font-size: 1.2em;
    width: 100%;
  }
  .button-submit {
    border: none;
    background: transparent;
    color: ${theme.mainColor};
    height: 100%;
    padding: 0.8em;
    width: 4rem;
    &:hover {
      color: ${theme.colors.mainColor};
    }
  }
`;

export default FormStyled;
