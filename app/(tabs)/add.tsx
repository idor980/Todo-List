import { Text, View, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

export default function AddScreen() {
  const [title, onChangeTitle] = useState('Title placeholder');
  const [description, onChangeDescription] = useState('Description placeholder');
  const [dueDate, onChangeDueDate] = useState('Due date placeholder');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter your task details</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTitle}
          value={title}
          placeholder="Enter title"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeDescription}
          value={description}
          placeholder="Enter description"
          placeholderTextColor="#888"
          multiline
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Due Date</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeDueDate}
          value={dueDate}
          placeholder="Enter due date"
          placeholderTextColor="#888"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cdcbd4",
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: "#332c54",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 15,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
  },
  label: {
    fontSize: 18,
    color: "#332c54",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "#333",
  },
});
