import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    indicator: {
        flexDirection: 'row',
        gap: 15
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    value: {
        backgroundColor: '#333333',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        textAlign: 'center',
    },
    created: {
        color: '#4EA8DE'
    },
    completed: {
        color: '#8284FA'
    },

});
