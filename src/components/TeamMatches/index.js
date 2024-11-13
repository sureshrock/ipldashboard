// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {iplList: {}}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updateData = {
      teamBannerUrl: data.team_banner_url,
      recentMatches: data.recent_matches.map(match => ({
        id: match.id,
        competingTeamLogo: match.competing_team_logo,
        competingTeam: match.competing_team,
        matchStatus: match.match_status,
        result: match.result,
      })),
    }
    this.setState({iplList: updateData, isLoading: false})
  }

  render() {
    const {iplList} = this.state
    const {teamBannerUrl, recentMatches} = iplList
    return (
      <div className="bg_card">
        <div>
          <img src={teamBannerUrl} alt="team banner" />
        </div>
        <LatestMatch match={this.props.match} />
        <ul>
          {recentMatches &&
            recentMatches.map(each => (
              <MatchCard key={each.id} matchDetails={each} />
            ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
