import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  background-color: #3284bb;
  padding: 10px;
  border-radius: 12px;
  color: white;
  img{
    width: 100%;
  }
`;

export const LikesField = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  button{
    background: transparent;
    border: 0;
    cursor: pointer;
  }
  svg, path{
    stroke: white;
  }
`