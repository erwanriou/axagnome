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
              <Link to='/'><i class="fas fa-arrow-left"></i><span>Go Back</span></Link>
            </div>
            <div className="title">
              <h1>{gnomes[id].name}</h1>
            </div>
          </div>
          <div className="content">
            <div className="row">
              <div className="image">
                <img src={gnomes[id].thumbnail} alt={gnomes[id].name}/>
              </div>
              <div className="data">
                <p><strong>Age: </strong>{gnomes[id].age}</p>
                <p><strong>weight: </strong>{gnomes[id].weight}</p>
                <p><strong>height: </strong>{gnomes[id].height}</p>
                <p><strong>hair color: </strong>{gnomes[id].hair_color}</p>
              </div>
            </div>
            <div className="row">
              <div className="professions">
                <h3>Professions</h3>
                { gnomes[id].professions.map( profession => (
                  <p>{profession}</p>
                )) }
              </div>
              <div className="friends">
                <h3>Friends</h3>
                { gnomes[id].friends.length === 0
                    ? <p>{gnomes[id].name} doesn't have any friends</p>
                    : gnomes[id].friends.map( friend => (
                        <p>{friend}</p>
                      ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Citizen
