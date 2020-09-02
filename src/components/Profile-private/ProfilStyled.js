import styled from 'styled-components';
import theme from 'src/styles/theme';

export default styled.div`
margin-top:100px;
  .title-event {
    margin-top: 50px;
    margin-bottom: 10px;
    padding: 10px;
    border-left: solid 3px ${theme.colors.mainColor};
  }
  .current-event{
    border: 3px solid ${theme.colors.bluecolor};
    border-radius: 20px;
    position: fixed;
    right: 0;
    top: 50%;
    &:hover{
      background-color: white;
    }
  }
  .modify{
    height: 50px;
    width: 50px;
    padding: 0.5em;
    color: ${theme.colors.mainColor};
    background-color: #F5F4FC;
    border: 0px;
    &:hover{
      border: 2px solid ${theme.colors.bluecolor};
      border-radius: 100px;
      background-color: ${theme.colors.bluecolor};
      color: #F5F4FC;
    }
  }
  .block-avatar{
    height: 80px;
    width: 80px;
    overflow: hidden;
    border-radius: 100px;
    display: inline-block;

  }
  .avatar{
    height: 80px;
    width: auto;
    &:hover{
      opacity:0.8;
      cursor: pointer;
    }
  }
  .titleinfo{
    margin-top: 1.5em;
  }
`;
