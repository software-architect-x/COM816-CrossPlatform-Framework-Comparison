import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

interface Todo {
  id: string;
  title: string;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim().length > 0) {
      setTodos([
        ...todos,
        { id: Date.now().toString(), title: input }
      ]);
      setInput('');
    }
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native To-Do List</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Enter task"
      />
      <Button title="Add" onPress={addTodo} />

      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text>{item.title}</Text>
            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <Text style={styles.delete}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  title: { fontSize: 22, marginBottom: 15 },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 10
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8
  },
  delete: { color: 'red' }
});

export default App;
