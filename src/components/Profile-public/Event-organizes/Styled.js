import styled from 'styled-components';
import theme from 'src/styles/theme';

export default styled.div`
    border: solid 3px ${theme.colors.mainColor};
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    .arrowlink{
    font-size: 5em;
    display: inline-block;
    vertical-align: middle;
        &:hover{
        color: ${theme.colors.mainColor};
        }
    }
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
`;
