import {
  ContentMainContainer,
  Title,
  Description,
  EmptyContentMainContainer,
  Img,
  Heading,
  SubHeading,
} from './styledComponents'

const NoteItem = props => {
  const {taskDetails} = props
  const {title, description} = taskDetails
  const displayContent = () => (
    <ContentMainContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ContentMainContainer>
  )
  const displayEmptyImg = () => (
    <EmptyContentMainContainer>
      <Img
        alt="notes empty"
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
      />
      <Heading>No Notes Yet</Heading>
      <SubHeading>Notes you add will appear here</SubHeading>
    </EmptyContentMainContainer>
  )
  const displayContentDetails = taskDetails ? displayContent : displayEmptyImg
  return displayContentDetails
}

export default NoteItem
