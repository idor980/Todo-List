import { Text, View, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import Button from "@/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { addTask } from "@/database/db"; // Import addTask function
import { useRouter } from "expo-router";


export default function AddScreen() {
  const [title, onChangeTitle] = useState('');
  const [description, onChangeDescription] = useState('');
  const router = useRouter();

  // Clear input fields
  function clearForm() {
      onChangeTitle("");
      onChangeDescription("");
  }

  async function handleConfirm() {
    if (title) {
      try {
        await addTask(title, description); 
        alert("Task added successfully!");
        clearForm();
        router.replace("/(tabs)/pending");

      } catch (error) {
        alert("Error adding task");
      }
    } else {
      alert("Please enter title");
    }
  }

  function handleCancel() {
    alert('Cancel');
    clearForm();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Enter your task details</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTitle}
          value={title}
          placeholder="Enter title"
          placeholderTextColor="#D3D3D3"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeDescription}
          value={description}
          placeholder="Enter description"
          placeholderTextColor="#D3D3D3"
        />
      </View>
      <View style={styles.footerContainer}>
          <Button theme="cancel" label="Cancel" onPress={handleCancel} />
          <Button theme="confirm" label="Confirm" onPress={handleConfirm} />
        </View>
    </SafeAreaView>
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
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
