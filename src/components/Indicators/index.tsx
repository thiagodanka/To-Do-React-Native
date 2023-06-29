import { View, Text } from 'react-native'
import { styles } from './styles'
import { useContext } from 'react'
import { TasksContext } from '../../context/context'

export function Indicators() {
    const { tasks } = useContext(TasksContext)
    const completeds = tasks.filter(tasks => tasks.checked === true)
    return (
        <>
            <View style={styles.container}>
                <View style={styles.indicator}>
                    <Text style={[styles.text, styles.created]}>Criadas</Text>
                    <Text style={[styles.text, styles.value]}>{tasks.length}</Text>
                </View>
                <View style={styles.indicator}>
                    <Text style={[styles.text, styles.completed]}>Concluidas</Text>
                    <Text style={[styles.text, styles.value]}>{completeds.length}</Text>
                </View>
            </View>
        </>
    )
}