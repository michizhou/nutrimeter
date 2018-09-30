import React from 'react'
import { Text, View, StyleSheet, StatusBar} from 'react-native'
import { Button, Card, Slider} from 'react-native-elements'
import { Constants } from 'expo'
import History from '../History'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sliderValue: 0,
            target:40
        }
    }

    componentDidMount() {
        let moveSlider =  setInterval(() => {
            this.setState(prevState => ({ sliderValue: prevState.sliderValue + 1 }) )
            if(this.state.sliderValue == this.state.target) {
                clearInterval(moveSlider);
            }
        }, 75);
    }

    render() {
        return (
        <View style={styles.container}>
            {/* <StatusBar
                backgroundColor="blue"
                barStyle="light-content"
            /> */}
            <Card title="History">
                {
                   <History /> 
                }
            </Card>
            <Card title="Today">
                {
                    <Button
                        large
                        title={`${this.state.sliderValue} Calories`} />
                }
            </Card>
            <Card>
                {
                    <View>
                        <Slider
                            value={this.state.sliderValue}
                            maximumValue={100}
                            onValueChange={(value) => this.setState({value})}/>
                        <Text>Value: {this.state.sliderValue}</Text>

                    </View>
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
    }
})

export default Dashboard
