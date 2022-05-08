import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  MainContainer,
  Heading,
  Form,
  TitleInput,
  NoteTxtContent,
  ButtonContainer,
  Button,
  NotesListContainer,
} from './styledComponents'

const Notes = () => {
  const {title, setTitle} = useState('')
  const {description, setDescription} = useState('')
  const {taskList, setTaskList} = useState([])
  const onChangeTitle = e => setTitle(e.target.value)
  const onChangeDesc = e => setDescription(e.target.value)
  const onClickAddTask = e => {
    e.preventDefault()
    const newTask = {
      id: uuidv4(),
      title,
      description,
    }
    setTaskList(prevState => [...prevState, newTask])
    setTitle('')
    setDescription('')
  }
  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <Form onSubmit={onClickAddTask}>
        <TitleInput
          type="text"
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <NoteTxtContent
          rows="10"
          cols="50"
          maxlength="200"
          placeholder="Take a Note..."
          value={description}
          onChange={onChangeDesc}
        />
        <ButtonContainer>
          <Button type="submit">Add</Button>
        </ButtonContainer>
      </Form>
      <NotesListContainer>
        {taskList.map(eachTask => (
          <NoteItem key={eachTask.id} taskDetails={eachTask} />
        ))}
      </NotesListContainer>
    </MainContainer>
  )
}

export default Notes
