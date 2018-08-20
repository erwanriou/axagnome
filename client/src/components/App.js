import React from 'react'
import { Route } from 'react-router-dom'

//Import API
import { getGnome } from '../utils/api'

//Import Needed Components
import Spinner from './common/Spinner'
import Nav from './layout/Nav'
import CitizenList from './citizens/CitizenList'
import Citizen from './citizens/Citizen'

//Import Styling
import '../style/style.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gnomes: null,
      errors: {},
    }
  }

  async componentDidMount() {
    const data = await getGnome()
    this.setState({ gnomes: data.Brastlewark })
  }

  render() {
    const { gnomes, errors } = this.state
    return (
      <div className='main'>
        <Nav />
        <Route exact path='/' render={() => (
          gnomes === null
            ? <Spinner />
            : <CitizenList gnomes={gnomes}/>
        )} />
        <Route exact path='/citizen/:id' render={(props) => (
          gnomes === null
            ? <Spinner />
            : <Citizen {...props} gnomes={gnomes}/>
        )} />
      </div>
    );
  }
}

export default App
