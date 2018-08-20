import React from 'react'
import { Link } from 'react-router-dom'

class CitizenItem extends React.Component {
  render() {
    const { gnome } = this.props
    return (
      <Link to={`/citizen/${gnome.id}`}className='citizenitem'>
        <div className="citizendata">
          <h1>{gnome.name}</h1>
          <h3>Age: {gnome.age} years</h3>
        </div>
        <div className="citizenimage">
          <img src={gnome.thumbnail} alt={gnome.name}/>
        </div>
      </Link>
    );
  }
}

export default CitizenItem
