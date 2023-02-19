import { TextInput, SafeAreaView, StyleSheet, Button } from "react-native";
import React, {useState} from "react";

export default function Initial_Inputs() {
    const [name_input, set_name_input] = useState('');
    const [age_input, set_age_input] = useState('');
    const [companies_list_input, set_companies_list_input] = useState('');

    return (
        <SafeAreaView style={styles.initial_inputs_section}>
            <TextInput style={styles.initial_inputs_styles} placeholder="Name" defaultValue={name_input} onChangeText={newText=>set_name_input(newText)}></TextInput>
            <TextInput style={styles.initial_inputs_styles} placeholder="Age" type="number" defaultValue={age_input} onChangeText={newText=>set_age_input(newText)}></TextInput>
            <TextInput style={styles.initial_inputs_styles} placeholder="List of companies (by symbol)" defaultValue={companies_list_input} onChangeText={newText=>set_companies_list_input(newText)}></TextInput>
            <Button title="Your data: " onPress={() => {console.log("Here is the information you just inputted: ", name_input, age_input, companies_list_input)}}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    initial_inputs_section: {
        bottom: "20%"
    },

    initial_inputs_styles: {
        textAlign: 'center',
        fontFamily: 'EuphemiaUCAS-Bold',
        alignItems: 'center',
        borderWidth: 5,
        borderRadius: 50,
        width: 250,
        height: 50,
        margin: 10
    }
})