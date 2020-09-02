import styled from 'styled-components';
import theme from 'src/styles/theme';

export default styled.div`
    border: solid 3px ${theme.colors.mainColor};
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    margin: 0.5em;
    .title{
        &:hover{
        color: ${theme.colors.mainColor};
        text-decoration: underline;
        }
    }
    .IconText{
        display: inline-flex;
        margin-top: 10px;
        margin-left: 10px;
    }
    .Icon{
        color: ${theme.colors.mainColor};
        margin-right: 10px;
    }
    .action-cancel{
    color: ${theme.colors.bluecolor};
    width: 80%;
    font-size: 1.5em;
    background-color: #F5F4FC;
    padding: 5px;
    border: solid 3px ${theme.colors.bluecolor};
    border-radius: 0.5em;
    text-transform: uppercase;
    &:hover{
      background-color:${theme.colors.bluecolor};
      color: #F5F4FC;
      transition: background-color 1s;
    }
  }
`;
