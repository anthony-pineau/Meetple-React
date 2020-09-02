import styled from 'styled-components';
import theme from 'src/styles/theme';

export default styled.div`
  margin-top: 75px;
  border-radius: 1rem;
  padding: ${theme.gutter}rem;
  text-align: justify;
  position: relative; 

p, h2, h3 {
  margin-top: 20px;
  margin-bottom: 20px;
}

h2, h3 {
  font-size: 120%;
}

.description {
  text-align: center ;
  font-size: 120%;
  border: solid;
  border-radius: 30px
  }
.info {
  text-align: center ;
  font-size: 200%
}
.test {
  margin-bottom: 100px;

}

`;
