/*
 *
 * Login style css file
 * make by phamthainb
 */

import styled from 'styled-components';

const WrapLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .form {
    max-width: 300px;
    padding: 15px;
    button {
      width: 100%;
    }
  }
`;

export default WrapLogin;
