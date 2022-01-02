import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  
`;

export const Form = styled.form`
  width:100%;
  display: flex;
  flex-direction: column;
  gap: 9px;
  input{
    width: 400px;
    height: 35px;
    padding-left: 15px;
    border-radius: 12px;
    outline: 0;
    border: 0;
    background: #e4e4e4;
  }
  textarea{
    outline: 0;
    padding: 15px;
    border-radius: 12px;
    border: 0;
    resize: vertical;
    width: 600px;
    min-height: 200px;
    max-height: 400px;
    box-shadow: rgb(0 0 0 / 4%) 0px 2px 12px;
  }
  button{
    border-radius: 12px;
    width: 150px;
    height: 35px;
    border: 0;
    cursor: pointer;
    background: #c529c5;
    color: white;
  
  }

`