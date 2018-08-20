import React from 'react'

class CitizenItem extends React.Component {
  render() {
    const { gnome } = this.props
    return (
      <div className='citizenitem'>
        <div className="citizendata">
          <h1>{gnome.name}</h1>
          <h3>Age: {gnome.age} years</h3>
        </div>
        <div className="citizenimage">
          <img src={gnome.thumbnail} alt={gnome.name}/>
        </div>
      </div>
    );
  }
}

export default CitizenItem
