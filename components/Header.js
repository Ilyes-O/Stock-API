import { Text, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <Text style={styles.header_text}>Welcome</Text>
    );
}

const styles = StyleSheet.create({
    header_text: {
        textAlign: 'center',
        top: "7.5%",
        fontSize: 45,
        fontFamily: 'EuphemiaUCAS-Bold',
    }
});