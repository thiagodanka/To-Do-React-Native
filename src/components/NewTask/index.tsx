import { TextInput, View, TouchableOpacity, Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import { styles } from './styles'
import { useState, useContext } from 'react'
import { TasksContext } from '../../context/context'
import React from 'react'


export function NewTask() {

    const [valueInput, setValueInput] = useState('')
    const [inputBorder, setInputBorder] = useState('')

    let newStyles = styles(inputBorder)

    function handleBlur() {
        setInputBorder('blur')
    }
    function handleFocus() {
        setInputBorder('focus')
    }

    const { createTasks } = useContext(TasksContext)

    function createNewTask(text: string) {
        if (text.trim() !== "") {
            createTasks(text)
            setValueInput('')
        }

    }

    return (

        <View style={[newStyles.container, {
            transform: [{ translateY: 50 }],
        },]}>
            <TextInput style={newStyles.input}
                placeholder='Adicione uma nova tarefa'
                onBlur={handleBlur}
                onFocus={handleFocus}
                onChange={(text) => setValueInput(text.nativeEvent.text)}
                value={valueInput}
            >
            </TextInput>


            <TouchableOpacity
                onPress={() => { createNewTask(valueInput) }}
                style={newStyles.button}
            >
                <Icon name='pluscircleo' size={16} />
            </TouchableOpacity>

        </View>

    )
}