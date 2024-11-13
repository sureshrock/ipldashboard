// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplList: [], isLoading: true}

  componentDidMount() {
    this.getIplList()
  }

  getIplList = async () => {
    try {
      const response = await fetch('https://apis.ccbp.in/ipl')
      const data = await response.json()
      const updateData = data.teams.map(each => ({
        name: each.name,
        id: each.id,
        teamImageUrl: each.team_image_url,
      }))
      this.setState({iplList: updateData, isLoading: false})
    } catch (error) {
      console.error('Failed to fetch IPL teams data:', error)
      this.setState({isLoading: false})
    }
  }

  render() {
    const {iplList, isLoading} = this.state
    return (
      <div className="bg_container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="image"
              />
            </div>
            <h1>IPL Dashboard</h1>
            <ul>
              {iplList.map(eachItem => (
                <TeamCard key={eachItem.id} iplList={eachItem} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
