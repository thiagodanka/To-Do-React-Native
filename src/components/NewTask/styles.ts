import { StyleSheet } from 'react-native';

export const styles = (focus: string) => StyleSheet.create({
    button: {
        width: 52,
        height: 52,
        backgroundColor: '#1E6F9F',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    input: {
        flex: 1,
        minWidth: 271,
        height: 54,
        fontSize:16,
        backgroundColor: '#262626',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        paddingLeft: 22,
        borderColor: focus == 'focus' ? '#5E60CE' : '#0D0D0D',
        borderWidth: 1

    },
    container: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        gap: 8,
        zIndex: 2
    }
});
