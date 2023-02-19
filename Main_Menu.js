import { View, Text, StyleSheet, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react'

import Header from './components/Header';

export default function Main_Menu({ route }) {
    const { name } = route.params;
    const { age } = route.params;

    if (age <= 50) {
        console.log("You're young!");
    } else if (age > 50) {
        console.log("You're old!");
    }

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'AAPL', value: 'AAPL' },
        { label: 'AMZN', value: 'AMZN' },
        { label: 'TSLA', value: 'TSLA' }
    ]);

    return (
        <View style={styles.name_styles}>
            <Header header_text={"Hi " + name + "!"} />
            <DropDownPicker style={styles.dropdown_styles} onSelectItem={(item) => {
                console.log(item["value"])
                fetch("https://e3bf-192-54-222-150.ngrok.io/image/h?comp=" + item["value"]);
            }}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
            {age <= 50 && <Text style={styles.advice_styles}>So, you're 50 years old or below! You're in (or a little past) your prime, and the world is yours for the reaping! You have a lot to try, and a lot to be backlashed by. There isn't a cookie-cut shape of a stock you should invest in, but it should fall in the following specifications: A high-volatility low-dividend stock. This way, you can strike it big with the correct research. After all, you still have time to make it up!</Text>}
            {age > 50 && <Text style={styles.advice_styles}>So, you're above 50 years old! This likely means that you have a steady retirement, pension, and 401(k) fund. In this case, you should invest in a high dividend low volatility company, as it's a source of low-risk passive income.</Text>}
            <Image source="https://e3bf-192-54-222-150.ngrok.io/image/h" style={styles.image_styles}/>
        </View>
    )
}

//return (
//label = "What would you like to do today?"
//data = {
//}
//);

const styles = StyleSheet.create({
    name_styles: {
        top: "10%"
    },

    dropdown_styles: {
        marginTop: 50
    },

    advice_styles: {
        textAlign: "justify",
        marginLeft: 50,
        marginRight: 50,
        fontSize: 20,
        top: "50%"
    },

    image_styles: {
        alignItems: "center"
    }
});
