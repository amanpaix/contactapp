import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Constants from 'expo-constants';
import ContactList from '../components/ContactList';

export default class ContactListScreen extends React.Component {
    state = {
        showContacts: true
    }

    toggleContacts = () => {
        this.setState(state => {
            return {
                showContacts: !state.showContacts
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
            <View style={styles.action}>
                <Button title="Toggle Contacts" onPress={this.toggleContacts} />
                {/* <Button title="Sort Contacts" onPress={this.sort} /> */}
            </View>
            <View style={styles.action}>
                <Button title="Add Contact" onPress={() => {this.props.navigation.navigate('RouteAddContact')}} />
            </View>
            {
                this.state.showContacts && ( <ContactList contacts={this.props.screenProps.contacts} /> )
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
    
    marginBottom: 20
  }
});
