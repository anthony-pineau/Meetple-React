import styled from 'styled-components';

import theme from 'src/styles/theme';

const FormStyled = styled.form`
  margin-top: 150px;
  border-radius: 1rem;
  padding: ${theme.gutter}rem;
  background: #82f0f3;
  background: -moz-linear-gradient(45deg, #82f0f3 0%, #7db9e8 100%, #82daf2 100%);
  background: -webkit-linear-gradient(45deg, #82f0f3 0%,#7db9e8 100%,#82daf2 100%);
  background: linear-gradient(45deg, #82f0f3 0%,#7db9e8 100%,#82daf2 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#82f0f3', endColorstr='#82daf2',GradientType=1 );
  .title {
    font-family: ${theme.fonts.title};
    font-weight: 800;
    color: ${theme.colors.bluecolor}; 
    font-size: 2em;
    text-align: center;
    margin-bottom: ${theme.gutter}rem;
  }

  .input-container {
    margin: ${theme.gutter}rem 0;
  }

  .label {
    display: block;
    color: white;
    font-size: 1em;
    font-weight: normal;
  }

  .input {
    width: 100%;
    font-family: ${theme.fonts.text};
    padding: 1rem;
    border: 1px solid ${theme.colors.bluecolor};
    border: 1px solid ${theme.colors.altColor};
    background-color: white;
    &:active { 
      background-color: white;
    }
  }
  .action {
    text-align: center;
    color: ${theme.colors.bluecolor};
    margin-bottom: ${theme.gutter}rem;
    &-button {
      border-radius: 10px;
      border: 3px solid ${theme.colors.bluecolor};
      background-color: ${theme.colors.bluecolor}; 
      padding: 1rem;
      color: white;
      font-size: 1.1em;
      font-family: ${theme.fonts.title};
      font-weight: 800;
      &:hover {
        background-color: ${theme.colors.mainColor};
        color: #fff;
        transition: background-color 1s;
        border: 3px solid ${theme.colors.bluecolor};
      }
    }
  }

  .links {
    text-align: center;
    color: ${theme.colors.bluecolor};

    &-item:hover {
      text-decoration: underline;
    }
  }
  .response{
    font-size: 1.5em;
    text-transform: uppercase;
    text-align: center;
    margin: 1em;
  }
`;

export default FormStyled;
