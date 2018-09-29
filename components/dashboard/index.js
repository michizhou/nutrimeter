import React from 'react'
import { Text, View, StyleSheet, StatusBar} from 'react-native'
import { Button} from 'react-native-elements';
import { Constants } from 'expo';


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
        <View>
            <View>
                <Text> History </Text>
                <Text> Calendar goes here</Text>
            </View>
            <View>
                <Text> Today </Text>
                <Button> Button showing number of calories </Button>
            </View>
            <View>
                <Text> Status Bar </Text>
                <Text> Animate as number of calories changes </Text>
            </View>
            <View>
                <Text> bottom tab Bar </Text>
                <Text> Profile and homescreen tab</Text>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: Constants.statusBarHeight,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
})

export default Dashboard
