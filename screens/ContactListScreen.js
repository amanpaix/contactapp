import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, SectionList } from 'react-native';
import Constants from 'expo-constants';
import { createSwitchNavigator } from 'react-navigation';

import contacts, {compareNames} from './contacts';
import Row from './components/Row';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact'

export default class ContactListScreen extends React.Component {
  state = {
    showContacts: true,
    contacts: contacts
  }

  toggleContacts = () => {
    this.setState(state => {
      return {
        showContacts: !state.showContacts
      }
    })
  }

//   sort = () => {
//     this.setState(state => ({
//       contacts: [...state.contacts].sort(compareNames)
//     }))
//   }

  addContact = newContact => {
    this.setState(state => ({
      contacts: [...state.contacts, newContact],
      showAddContact: false
    }))
  }

  render() {
      return (
        <View style={styles.container}>
          <View style={styles.action}>
            <Button title="Toggle Contacts" onPress={this.toggleContacts} />
            {/* <Button title="Sort Contacts" onPress={this.sort} /> */}
            <Button title="Add Contact" onPress={this.toggleAddContact} />
          </View>
          {
          this.state.showContacts && ( 
            <ContactList 
              contacts={this.state.contacts} />
            // <FlatList
            //   renderItem={this.renderItems}
            //   data={this.state.contacts} />
            
            )
          }
        </View>
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
