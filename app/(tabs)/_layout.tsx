import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ 
        tabBarActiveTintColor: '#cdcbd4',
        headerStyle: {
          backgroundColor: '#1c143f',
        },
        headerShadowVisible: false,
        headerTintColor: '#cdcbd4',
        tabBarStyle: {
          backgroundColor: '#1c143f',
        }
      }}
    >
       <Tabs.Screen 
            name="index" 
            options={{ 
                title: 'Pending', 
                tabBarIcon: ({color, focused}) => (
                    <Ionicons name={focused ? 'time-sharp' : 'time-outline'} color={color} size={24} />
                )
            }}
        />
        <Tabs.Screen 
            name="completed" 
            options={{ 
                title: 'Completed', 
                tabBarIcon: ({color, focused}) => (
                    <Ionicons name={focused ? 'checkmark-circle-sharp' : 'checkmark-circle-outline'} color={color} size={24} />
                )
            }}
        />
        <Tabs.Screen 
            name="overdue" 
            options={{ 
                title: 'Overdue', 
                tabBarIcon: ({color, focused}) => (
                    <Ionicons name={focused ? 'alert-circle-sharp' : 'alert-circle-outline'} color={color} size={24} />
                )
            }}
        />
        <Tabs.Screen 
            name="add" 
            options={{ 
                title: 'Add new task', 
                tabBarIcon: ({color, focused}) => (
                    <Ionicons name={focused ? 'add-circle' : 'add-circle-outline'} color={color} size={24} />
                )
            }}
        />
    </Tabs>
  );
}
