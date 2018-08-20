import React from 'react'
import { Link } from 'react-router-dom'

class Citizen extends React.Component {

  render() {
    const { gnomes } = this.props
    const { id } = this.props.match.params
    return (
      <div className='citizen'>
        <div className="container">
          <div className="header">
            <div className="goback">
              <Link to='/'>Go Back</Link>
            </div>
            <div className="title">
              {gnomes[id].name}
            </div>
          </div>
          <div className="content">
            <div className="image">
              <img src={gnomes[id].thumbnail} alt={gnomes[id].name}/>
            </div>
            <div className="data">
              <p>{gnomes[id].age}</p>
              <p>{gnomes[id].weight}</p>
              <p>{gnomes[id].height}</p>
              <p>{gnomes[id].hair_color}</p>
            </div>
            <div className="professions">
              { gnomes[id].professions.map( profession => (
                <p>{profession}</p>
              )) }
            </div>
            <div className="friends">
              { gnomes[id].friends.map( friend => (
                <p>{friend}</p>
              )) }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Citizen
