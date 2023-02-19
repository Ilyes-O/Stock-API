import { TextInput, SafeAreaView, StyleSheet, Text, Pressable } from "react-native";
import React, {useState} from "react";
import Main_Menu from "../Main_Menu";

export default function Initial_Inputs({navigation}) {
    const [name_input, set_name_input] = useState('');
    const [age_input, set_age_input] = useState('');
    const [companies_list_input, set_companies_list_input] = useState('');

    return (
        <SafeAreaView style={styles.initial_inputs_section}>
            <TextInput style={styles.initial_inputs_styles} placeholder="Name" defaultValue={name_input} onChangeText={newText=>set_name_input(newText)}></TextInput>
            <TextInput style={styles.initial_inputs_styles} placeholder="Age" type="number" defaultValue={age_input} onChangeText={newText=>set_age_input(newText)}></TextInput>
            <TextInput style={styles.initial_inputs_companies_list_styles} multiline={true} placeholder="Companies you are interested in...input them like this: symbol, symbol, etc." defaultValue={companies_list_input} onChangeText={newText=>set_companies_list_input(newText)}></TextInput>
            <Pressable style={styles.initial_inputs_button} onPress={() => 
                { 
                    navigation.navigate("Main_Menu", { name: name_input, age: age_input });
                }}>
                <Text style={styles.button_text}>Embark on your amazing financial-growth journey!</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    initial_inputs_section: {
        flex: 1,
        bottom: "15%",
        justifyContent: "center",
        alignItems: "center"
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
    },

    initial_inputs_companies_list_styles: {
        textAlign: 'center',
        fontFamily: 'EuphemiaUCAS-Bold',
        alignItems: 'center',
        borderWidth: 5,
        borderRadius: 20,
        width: 250,
        height: 150,
        margin: 10
    },
    
    initial_inputs_button: {
        height: 100,
        width: 200,
        borderRadius: 50,
        color: "white",
        backgroundColor: "black",
        alignItems: "center",
        padding: 15
    },

    button_text: {
        fontFamily: 'EuphemiaUCAS-Bold',
        color: "white"
    }
})