import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ReadStoryScreen extends React.Component {
    render() {
        return(
            <View>
                <Text>Read Story</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : 'center'
    }
})