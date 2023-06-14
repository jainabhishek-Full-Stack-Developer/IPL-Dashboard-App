import './index.css'
import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {result, competingTeam, competingTeamLogo, matchStatus} = matchData
    return (
      <li className={`matchCard ${matchStatus}`}>
        <img
          className="matchCardLogo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p className="matchCardName">{competingTeam}</p>
        <p className="matchCardResult">{result}</p>
        <p className="matchCardStatus">{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
