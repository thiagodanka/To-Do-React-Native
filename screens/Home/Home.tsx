import { View, StyleSheet } from "react-native";
import { Header } from "../../src/components/Header";
import { Tasks } from "../../src/components/Tasks";
import { styles } from "./styles";
import TasksProvider from "../../src/context/context";

export function Home() {
    return (
        <View style={styles.container}>
            <TasksProvider >
                <Header />
                <Tasks />
            </TasksProvider>
        </View>
    )



}
