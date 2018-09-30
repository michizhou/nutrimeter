import React from 'react'
import { Text, View, StyleSheet, StatusBar} from 'react-native'
import { Button, Card, Slider} from 'react-native-elements';
import { Constants } from 'expo';


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value:0
        }
    }

    render() {
        return (
        <View>
            {/* <StatusBar
                backgroundColor="blue"
                barStyle="light-content"
            /> */}
            <Card title="History">
                {
                    
                }
            </Card>
            <Card title="Today">
                {
                    <Button
                        large
                        title="# Calories" />
                }
            </Card>
            <Card>
                {
                    <Slider
                        value={this.state.value}
                        onValueChange={(value) => this.setState({value})}/>
                }
            </Card>

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
