import React from 'react'
import CONSTANTS from 'expo-constants'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Button, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginTop: CONSTANTS.statusBarHeight, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderWidth: 25, 
        borderColor: 'teal'
    }
})

class ScreenComponentOne extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Go to screen 2" onPress={ () => {
                    this.props.navigation.navigate('RouteNameTwo')
                }}/>
            </View>
        )
    }
}

class ScreenComponentTwo extends React.Component {
    render() {
        return (
            <View style={{
                ...styles.container, borderColor: 'green'
            }}>
                <Button title="Go to screen 1" onPress={ () => {
                    this.props.navigation.navigate('RouteNameOne')
                }} />
            </View>
        )
    }
}

const AppNavigator = createAppContainer(createSwitchNavigator({
    'RouteNameTwo': ScreenComponentTwo,
    'RouteNameOne': ScreenComponentOne,
}))

export default class App extends React.Component {
    render() {
        return <AppNavigator />
    }
}