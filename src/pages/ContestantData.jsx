import Container from '@mui/material/Container'
import ContestantData from 'components/contestantData/ContestantData'

function ContestantDataPage(props) {
  const contestantId = props.contestantId ? props.contestantId : props.match.params.id
  return (
    <Container maxWidth="xl">
      <ContestantData contestantId={contestantId}/>
    </Container>
  )
}

export default ContestantDataPage
