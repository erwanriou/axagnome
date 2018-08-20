import React from 'react'
import { Route, Redirect } from 'react-router-dom'

//Import API
import { getGnome } from '../utils/api'

//Import Needed Components
import Spinner from './common/Spinner'
import Nav from './layout/Nav'
import CitizenList from './citizens/CitizenList'
import Citizen from './citizens/Citizen'

//Import Styling
import '../style/reset.css'
import '../style/style.css'
import '../style/citizen.css'
import '../style/citizenList.css'
import '../style/nav.css'
import '../style/responsive.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gnomes: null,
      errors: {},
      query: '',
    }

  this.handleQueryInput = this.handleQueryInput.bind(this)
  this.displayResult = this.displayResult.bind(this)
  }

  async componentDidMount() {
    const data = await getGnome()
    this.setState({ gnomes: data.Brastlewark })
  }

  async displayResult() {
    const data = await getGnome()
    const gnome = data.Brastlewark.filter( gnome => gnome.age.toString() === this.state.query )
    this.setState({
      gnomes: gnome
    })
  }

  handleQueryInput(query) {
    this.setState({
      query: query
    })
  }

  render() {
    const { gnomes, errors, query } = this.state
    return (
      <div className='main'>
        <Nav
          gnomes={gnomes}
          query={query}
          handleQueryInput={this.handleQueryInput}
          displayResult={this.displayResult}/>
        <Route exact path='/' render={() => (
          gnomes === null
            ? <Spinner />
            : <CitizenList gnomes={gnomes} />
        )} />
        <Route exact path='/citizen/:id' render={(props) => (
          gnomes === null
            ? <Spinner />
            : <Citizen {...props} gnomes={gnomes} />
        )} />
      </div>
    )
  }
}

export default App
