import { View, Text, FlatList } from 'react-native'
import { styles } from './styles'
import { Indicators } from '../Indicators'
import { useContext, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Card } from '../Card'
import { TasksContext } from '../../context/context'

type TasksProps = {
    id: number;
    text: string;
    checked: boolean;
}

export function Tasks() {

    const { tasks } = useContext(TasksContext)

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Indicators />

                {
                    tasks.length > 0 ?

                        <FlatList
                            style={styles.tasks}
                            data={tasks}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => (
                                <Card
                                    checked={item.checked}
                                    text={item.text}
                                    id={item.id}
                                    key={item.id}
                                />
                            )}
                        />


                        :

                        <View style={styles.noneTask}>
                            <Icon name='clipboard-outline' size={96} color={'#808080'} style={{ textAlign: 'center', margin: 15 }} />

                            <Text style={{ fontSize: 15, color: '#808080', textAlign: 'center', fontWeight: 'bold' }}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={{ fontSize: 15, color: '#808080', textAlign: 'center' }}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                }
            </View>
        </View>
    )
}