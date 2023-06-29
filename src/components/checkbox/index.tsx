import React, { useContext, useState } from 'react';
import PropTypes from "prop-types"
import Icon from "react-native-vector-icons/Ionicons"
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from './styles';
import { TasksContext } from '../../context/context';

interface CheckBoxProps {
    id: number,
    checked: boolean
}

export function CheckBox({ id, checked }: CheckBoxProps) {
    const { tasksIsCompleted } = useContext(TasksContext)
    function handleChange() {
        tasksIsCompleted(id)
    }
    let newStyles = styles(checked)
    return (
        <View style={newStyles.WrapperCheckBox}>


            <TouchableOpacity onPress={handleChange} style={[
                newStyles.CheckBox,
            ]}>

                {
                    checked ? <Icon name="md-checkmark"
                        style={{
                            fontSize: 16,
                        }}
                    /> : null
                }

            </TouchableOpacity>

        </View>
    );
}

