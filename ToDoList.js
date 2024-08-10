import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function ToDoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const addTask = () => {
    if (task.trim().length >= 3) {
      setTasks([
        ...tasks,
        { id: Date.now().toString(), text: task, completed: false },
      ]);
      setTask('');
    } else {
      alert('Task must be at least 3 characters long.');
    }
  };
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const completedCount = tasks.filter((item) => item.completed).length;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <TextInput
        style={styles.input}
        placeholder='Add a new task ...'
        value={task}
        onChangeText={setTask}
      ></TextInput>
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>

      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>
          {tasks.length} task{tasks.length !== 1 ? 's' : ''} in total
        </Text>
        <Text style={styles.counterText}>{completedCount} completed</Text>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
              <Icon
                name={item.completed ? 'check-circle' : 'circle-thin'}
                size={24}
                color={item.completed ? 'green' : 'grey'}
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.taskText,
                {
                  textDecorationLine: item.completed ? 'line-through' : 'none',
                },
              ]}
            >
              {item.text}
            </Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Icon name='trash' size={24} color='red' />
            </TouchableOpacity>
          </View>
        )}
      ></FlatList>
    </View>
  );
}

export default ToDoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  counterText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
  },
  taskText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },
});
