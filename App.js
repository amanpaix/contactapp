// import Example from './examples/stack.js'
// export default Example
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import contacts from './contacts';
import AddContactScreen from './screens/AddContactScreen'
import ContactListScreen from './screens/ContactListScreen'

const AppNavigator = createAppContainer(createSwitchNavigator({
  RouteContactList : ContactListScreen,
  RouteAddContact : AddContactScreen,
}, {
  initialRouteName : 'RouteContactList'
}))



export default class App extends React.Component {
  state = {
    contacts: contacts
  }

  addContact = newContact => {
    this.setState(state => ({
      contacts: [...state.contacts, newContact]
    }))
  }

  render() {
      return (
        <AppNavigator
          screenProps={{
            contacts: this.state.contacts,
            addContact: this.addContact
          }} 
        />
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 5,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
