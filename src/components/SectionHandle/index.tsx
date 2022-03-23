/**
*
* SectionHandle 
* make by phamthainb
*/
import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import theme from 'styles/theme';

const SectionHandle = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px -8px 12px;
  & > button {
    margin: 0 8px 8px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

export default SectionHandle;