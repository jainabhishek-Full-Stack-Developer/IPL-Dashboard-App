import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatch
    return (
      <div className="latestMatchCardContainer">
        <h1 className="latestMatchHeading">Latest Match</h1>
        <div className="latestMatchCard">
          <div className="latestMatchLogoContainer">
            <div className="latestMatchDetailsMain">
              <p className="latestMatchTeamName">{competingTeam}</p>
              <p className="latestMatchDate">{date}</p>
              <p className="latestMatchDate">{venue}</p>
              <p className="latestMatchDate">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="latestMatchLogo"
            />
          </div>
          <div className="latestMatchDetailsInfo">
            <div className="matchInfoItem">
              <p className="latestMatchDetailsLabel">First Innings</p>
              <p className="latestMatchDetailsValue">{firstInnings}</p>
            </div>
            <div className="matchInfoItem">
              <p className="latestMatchDetailsLabel">Second Innings</p>
              <p className="latestMatchDetailsValue">{secondInnings}</p>
            </div>
            <div className="matchInfoItem">
              <p className="latestMatchDetailsLabel">Man Of The Match</p>
              <p className="latestMatchDetailsValue">{manOfTheMatch}</p>
            </div>
            <div className="matchInfoItem">
              <p className="latestMatchDetailsLabel">Umpires</p>
              <p className="latestMatchDetailsValue">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LatestMatch
