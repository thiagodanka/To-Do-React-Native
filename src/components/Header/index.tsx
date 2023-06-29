import { View, Image } from 'react-native'
import { styles } from './styles'
import { NewTask } from '../NewTask'

export function Header() {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/imgs/Logo.png')} />
            <NewTask />

        </View>
    )
}