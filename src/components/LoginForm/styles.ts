import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);

  form{
    width: 100%;
    max-width: 400px;
    background-color: #3284bb;
    display: flex;
    gap: 9px;
    flex-direction: column;
    padding: 9px;
    border-radius: 12px;
    input{
      width: 100%;
      border: 0;
      height: 35px;
      border-radius: 12px;
      padding-left: 9px;
      outline: 0;
    }
    button{
      border: 0;
      height: 25px;
      width: 200px;
      margin-left: auto;
      border-radius: 9px;
      cursor: pointer;
      background: #29c584;
      color: white;
    }
}
`;
