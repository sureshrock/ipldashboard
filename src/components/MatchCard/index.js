// Write your code here
import './index.css'

const MatchCard = ({matchDetails}) => {
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails

  return (
    <li>
      <div>
        <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      </div>
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
