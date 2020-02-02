import React from 'react'
import AddContact from '../components/AddContact'

export default class AddContactScreen extends React.Component {
    handleSubmit = formState => {
        this.props.screenProps.addContact(formState)
        this.props.navigation.navigate('RouteContactList')
    }

    render() {
        return (
            <AddContact onSubmit={this.handleSubmit} />
        )
    }
}