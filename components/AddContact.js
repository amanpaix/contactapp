import React from 'react';
import { StyleSheet, SectionList, Text, TextInput, View, Button, KeyboardAvoidingView} from 'react-native';
import PropTypes from 'prop-types';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    input: {
        borderWidth: 1, 
        borderColor: '#ccc',
        margin: 5
    },
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 5,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
    }
})
export default class AddContact extends React.Component {
    state = {
        name: '',
        phone: '',
        isFormValid: false
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.name !== prevState.name || this.state.phone !== prevState.phone) {
            this.validateForm();
        }
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state);
    }
    
    getHandler = key => val => this.setState({[key]: val})

    hanldePhoneChange = this.getHandler('phone')
    
    validateForm = () => {
        let valid = false
        if(+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >= 3) {
            valid = true;
        } else {
            valid = false
        }
        this.setState({
            isFormValid: valid
        })
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <TextInput 
                    style={styles.input} 
                    onChangeText={this.getHandler('name')} 
                    value={this.state.name}
                    placeholder="Name"
                />

                <TextInput 
                    keyboardType='numeric'
                    style={styles.input} 
                    onChangeText={this.hanldePhoneChange} 
                    value={this.state.phone}
                    placeholder="Phone"
                />
                <Button 
                    title="Add Contact"
                    onPress={this.handleSubmit}
                    disabled={!this.state.isFormValid}
                />
            </KeyboardAvoidingView>
        )
    }
}