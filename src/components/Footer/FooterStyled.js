import styled from 'styled-components';
import theme from 'src/styles/theme';

export default styled.footer`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:60px;
  background: #82f0f3;
  background: -moz-linear-gradient(45deg, #82f0f3 0%, #7db9e8 100%, #82daf2 100%);
  background: -webkit-linear-gradient(45deg, #82f0f3 0%,#7db9e8 100%,#82daf2 100%);
  background: linear-gradient(45deg, #82f0f3 0%,#7db9e8 100%,#82daf2 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#82f0f3', endColorstr='#82daf2',GradientType=1 );
  position: relative;
  left: 0;
  bottom: 0;
  text-align:center;
  .footer{
    padding:10px;
    margin-right: 30px;
    border: solid;
    border-radius: 10px;
    &:hover{
      transition: background-color 1s;
      background-color: ${theme.colors.bluecolor};
      color: white;
    };
  };
`;
