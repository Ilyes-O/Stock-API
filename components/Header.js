import { Text, StyleSheet } from 'react-native';

export default function Header({header_text}) {
    return (
        <Text style={styles.header_text}>{header_text}</Text>
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