import { StyleSheet } from 'react-native';

export const styles = (cheked: boolean) => StyleSheet.create({
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
})
