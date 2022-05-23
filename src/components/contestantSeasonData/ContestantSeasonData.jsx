import Residence from 'components/contestantSeasonData/Residence'
import RelationshipStatus from 'components/contestantSeasonData/RelationshipStatus'
import Children from 'components/contestantSeasonData/Children'
import Occupations from 'components/contestantSeasonData/Occupations'
import Hobbies from 'components/contestantSeasonData/Hobbies'
import SelfDescriptions from 'components/contestantSeasonData/SelfDescriptions'

function ContestantSeasonData(props) {
  return (
    <div>
      {props.season.seasonId}
      <RelationshipStatus {...props}/>
      <Children {...props}/>
      <Residence {...props}/>
      <Occupations {...props}/>
      <Hobbies {...props}/>
      <SelfDescriptions {...props}/>
    </div>
  )
}

export default ContestantSeasonData
