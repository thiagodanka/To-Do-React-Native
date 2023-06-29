import { StyleSheet } from 'react-native';

export const styles = (cheked: boolean) => StyleSheet.create({
    container: {
        backgroundColor: '#262626',
        width: '100%',
        minHeight: 74,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        paddingHorizontal: 12,
        paddingVertical: 16,
        marginBottom: 8
    },
    text: {
        flex: 1,
        marginHorizontal: 16,
        lineHeight: 20,
        fontSize: 14,
        textDecorationLine: !cheked ? 'none' : 'line-through'
    },
    CheckBox: {
        width: 25,
        height: 25,
        borderWidth: 2,
        borderBottomColor: cheked ? '#5E60CE' : '#4EA8DE',
        borderEndColor: cheked ? '#5E60CE' : '#4EA8DE',
        borderStartColor: cheked ? '#5E60CE' : '#4EA8DE',
        borderTopColor: cheked ? '#5E60CE' : '#4EA8DE',
        borderLeftColor: cheked ? '#5E60CE' : '#4EA8DE',
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: cheked ? '#5E60CE' : 'transparent'
    },
    WrapperCheckBox: {
        flexDirection: "row",
        alignItems: "center"
    },
    LabelCheck: {
        color: '#fff',
        marginLeft: 6
    }
});
