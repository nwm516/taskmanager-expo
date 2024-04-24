import React, { useState } from 'react';
import { Button, ScrollView, Text, TextInput, View, StyleSheet } from 'react-native';

function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const [nextId, setNextId] = useState(1);
    const [text, onChangeText] = useState('');

    function addTask(title) {
        const newTask = {
            id: nextId,
            title: title,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setNextId(nextId + 1);
        onChangeText('');
    };

    function toggleTaskCompletion(id) {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed
                };
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Enter Task Here"
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Enter"
                    onPress={() => addTask(text)}
                />
            </View>

            <View style={styles.space}></View>

            <ScrollView>
                {tasks.map(task => (
                    <View key={task.id} style={styles.taskContainer}>
                        <Text style={styles.taskTitle}>{task.title}</Text>
                    
                        <Text style={styles.taskStatus}>{task.completed ? 'Status: Completed' : 'Status: Incomplete'}</Text>
                        
                        <Button
                        title={task.completed ? "To-Do" : "Completed"}
                            onPress={() => toggleTaskCompletion(task.id)}
                        />
                    </View>
                ))}
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 80,
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5,
    },
    buttonText: {
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    space: {
        height: 20,
    },
    taskContainer: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        alignItems: 'center',
    },
    taskTextContainer: {
        flex: 1,
    },
    taskTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    taskStatus: {
        fontSize: 14,
        color: 'gray'
    },
});

export default TaskManager;