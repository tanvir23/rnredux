import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPeopleFromAPI } from './actions'

let styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#0b7eff',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white'
  }
})
export class App extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    const {
      container,
      text,
      button,
      buttonText
    } = styles;

    const { people, isFetching } = this.props.people;
    console.log(this.props.people);
    

    return (
      <View style={container}>
        <Text style={text}>Star Wars Characters</Text>
        <TouchableHighlight style={button} onPress={this.props.getPeople}>
          <Text style={buttonText}>Fetch Data</Text>
        </TouchableHighlight>
        {
          isFetching && <Text>Loading</Text>
        }
        {
          people.length ? (
            people.map((person, index) => {
              return (
                <View>
                  <Text>Name: {person.name}</Text>
                  <Text>DOB: {person.birth_year}</Text>
                </View>
              )
            })
          ) : null
        }
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    people: state.people
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPeople: () => dispatch(fetchPeopleFromAPI())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
