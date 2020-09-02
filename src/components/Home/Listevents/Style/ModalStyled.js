import styled from 'styled-components';
import theme from 'src/styles/theme';

export default styled.div`
  .popup-content{
    border: 0px!important;
    border-radius: 10px!important;
    padding: 0px!important;
  }
  .modal > .close {
    cursor: pointer;
    position: absolute;
    display: block;
    padding: 2px 5px;
    line-height: 20px;
    right: -3px;
    top: -3px;
    font-size: 24px;
    border-radius: 18px;
    border: 1px solid #cfcece;
    color: ${theme.colors.mainColor};
    background-color: ${theme.colors.background}; 
  }
  .button{
    display: inline-flex;
    width: 100%;
    border: 2px solid ${theme.colors.mainColor};;
    border-radius: 10px;
    padding: 10px;
    margin-top: 20px;
    &:hover{
      transition: background-color 1s;
      background-color: ${theme.colors.mainColor};
      color: white;
      cursor: pointer;
    }
  }
  .Iconjeux{
    color: ${theme.colors.bluecolor};
    margin-right: 10px;
  }
  .games{
    height: 500px;
    overflow-y: auto;
  }
`;
