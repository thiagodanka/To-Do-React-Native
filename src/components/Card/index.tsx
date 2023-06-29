import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { NewTask } from '../NewTask'
import Icon from 'react-native-vector-icons/Ionicons'
import { useContext, useState } from 'react';
import { CheckBox } from '../checkbox';
import { TasksContext } from '../../context/context';

type CardProps = {
    text: string;
    id: number;
    checked: boolean;
}

export function Card({ text, id, checked }: CardProps) {

    const { deleteTask } = useContext(TasksContext)

    // const [checked, setChecked] = useState(false)
    const newStyles = styles(checked)

    function handleDelete(id: number) {
        deleteTask(id)
    }


    return (
        <View style={newStyles.container}>
            <CheckBox checked={checked} id={id} />
            <Text style={newStyles.text}>{text}</Text>
            <Icon size={20} color={'#808080'} name='md-trash-outline' onPress={() => { handleDelete(id) }} />
        </View >
    )
}