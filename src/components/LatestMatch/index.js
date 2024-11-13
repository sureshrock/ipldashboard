// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  state = {iplList: {}}

  componentDidMount() {
    this.getDetailsList()
  }

  getDetailsList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formatedData = {
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      competingTeam: data.latest_match_details.competing_team,
      venue: data.latest_match_details.venue,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      date: data.latest_match_details.date,
      result: data.latest_match_details.result,
    }
    this.setState({iplList: formatedData})
  }

  render() {
    const {iplList} = this.state
    const {
      firstInnings,
      secondInnings,
      umpires,
      manOfTheMatch,
      competingTeamLogo,
      date,
      competingTeam,
      venue,
      result,
    } = iplList

    return (
      <div>
        <p>Latest Matches</p>
        <div>
          <h1>{competingTeam}</h1>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
          <div>
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
            />
          </div>
        </div>
        <div>
          <div>
            <p>First Innings</p>
            <p>{firstInnings}</p>
          </div>
          <div>
            <p>Second Innings</p>
            <p>{secondInnings}</p>
          </div>
          <div>
            <p>Man Of The Match</p>
            <p>{manOfTheMatch}</p>
          </div>
          <div>
            <p>Umpires</p>
            <p>{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
