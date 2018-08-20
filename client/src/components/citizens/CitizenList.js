import React from 'react'
import CitizenItem from './CitizenItem'

class CitizenList extends React.Component {

  render() {
    return (
      <div className='citizens'>
        {this.props.gnomes.map(gnome =>(
          <CitizenItem key={gnome.id} gnome={gnome} />
        ))}
      </div>
    );
  }
}

export default CitizenList
