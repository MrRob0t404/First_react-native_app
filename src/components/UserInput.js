import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const UserInput = (props) => (
    <View style={styles.InputContainer} >
        <TextInput
            placeholder="An Awesome Place"
            value={props.placeName}
            onChange={props.placeNameChangedHandler}
            style={styles.UserInput}/>

        <Button title="Add" style={styles.Button} onPress={props.placeSubmitHandler}/>
    </View>
)

const styles = StyleSheet({
    InputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    PlaceInput: {

    },
    PlaceButton: {
        width: "30%"
    }
});

export default UserInput;