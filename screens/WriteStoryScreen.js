import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            name : '',
            name2 : '',
            name3 : ''
        }
    }
    render() {
        return(
            <View style = {styles.container}>
                <Header
                backgroundColor={'red'}
                centerComponent={{
                    text: 'Story Hub',
                    style: { color: 'black', fontSize: 30, fontWeight: 700 },
                }}
                />
                <TextInput style = {styles.inputBox, {height : 30}}
                placeholder = "Story Title"
                onChangeText = {(text) => {
                    this.setState({
                        name : text
                    })
                }}
                value = {this.state.name}/>

                <TextInput style = {styles.inputBox, {height : 30}}
                placeholder = "Author"
                onChangeText = {(text) => {
                    this.setState({
                        name2 : text
                    })
                }}
                value = {this.state.name2}/>

                <TextInput style = {styles.inputBox, {height : 300}}
                placeholder = "Write Your Story"
                onChangeText = {(text) => {
                    this.setState({
                        name3 : text
                    })
                }}
                value = {this.state.name3}/>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.text}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1
    },
    inputBox: {
        marginTop: 20,
        width: '80%',
        borderWidth: 3,
        outline: 'none',
      },
    button:{
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 40,
        width: '30%',
        height: 50,
        backgroundColor: 'orange'
    },
    text: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
      },
})