// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = ({iplList}) => {
  const {id, teamImageUrl, name} = iplList

  return (
    <li>
      <Link to={`/team-matches/${id}`}>
        <img src={teamImageUrl} alt={name} className="logo_image" />
        <p>{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
