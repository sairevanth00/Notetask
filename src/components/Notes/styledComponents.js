import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const Heading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  border-radius: 10px;
  box-shadow: 4px 4px 4px 4px #aab8c8;
  padding: 20px;
  height: 50%;
`
export const TitleInput = styled.input`
  outline: none;
  height: 30px;
  color: #334155;
  padding: 5px;
  border: 1px solid #cbd5e1;
  margin-bottom: 10px;
`
export const NoteTxtContent = styled.textarea`
  outline: none;
  color: #334155;
  padding: 5px;
  border: 1px solid #cbd5e1;
  margin-bottom: 10px;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const Button = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  padding: 10px;
  font-family: 'Roboto';
  margin: 10px;
  cursor: pointer;
  border-radius: 8px;
  border: 0px;
`
export const NotesListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`
