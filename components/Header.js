import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <Text style={styles.header_text}>Welcome</Text>
    );
}

const styles = StyleSheet.create({
    header_text: {
        textAlign: 'center',
        display: 'relative',
        bottom: '25%',
        fontSize: 45,
        fontFamily: 'EuphemiaUCAS-Bold',
    }
});