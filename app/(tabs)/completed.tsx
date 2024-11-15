import { Text, View, StyleSheet, FlatList, Pressable } from "react-native";
import { getTasksByStatus, deleteTask } from "@/database/db"; 
import { useState, useEffect } from "react";
import DeleteButton from "@/components/DeleteTaskButton";

export default function CompletedScreen() {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    const fetchCompletedTasks = async () => {
      try {
        const completedTasks = await getTasksByStatus("completed"); 
        setTasks(completedTasks);
      } catch (error) {
        alert("Error loading tasks");
      }
    };
    fetchCompletedTasks();
  }, [tasks]);

  const renderItem = ({ item }: { item: any }) => (
    <Pressable onPress={() => console.log(item.id)}>
      <View style={{flexDirection: 'row',  alignItems: 'center',  marginBottom: 20}}>
        <View style={styles.taskContainer}>
          <Text style={styles.taskTitle}>{item.title}</Text>
          <Text style={styles.taskDescription}>{item.description}</Text>
        </View>
        <DeleteButton onPress={() => {
            console.log(`delete task ${item.id}`)
            deleteTask(item.id)
          }
        }/>
      </View>
    </Pressable>
  );
  if (tasks.length === 0){
    return (
      <View
        style={styles.container}>
        <Text style={styles.text}>No completed tasks </Text>
      </View>
    );
  } else {
    return (
   
      <View
        style={styles.container}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#cdcbd4",
        padding: 50,

    },
    taskContainer: {
      backgroundColor: "#ffffff",
      padding: 15,
      width:200,
      borderRadius: 10,
    },
    taskTitle: {
      fontSize: 18,
      color: "#332c54",
      fontWeight: "bold",
    },
    taskDescription: {
      fontSize: 16,
      color: "#332c54",
    },
    text: {
      fontSize: 24,
      color: "#332c54",
  },
});
