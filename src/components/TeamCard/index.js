import './index.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'

class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    const {name, imageUrl, id} = teamData
    return (
      <Link to={`/team-matches/${id}`} className="linkItem">
        <li className="teamCard">
          <img className="teamCardImage" src={imageUrl} alt={`${name}`} />
          <p className="teamCardName">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
