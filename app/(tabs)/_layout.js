import { Tabs } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';

export default function TabsLayout() {
   return (
      <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#ff7e5f', tabBarInactiveTintColor: 'gray' }}>

         <Tabs.Screen
            name="index"
            options={{
               title: 'Home',
               tabBarIcon: ({ color, size, focused }) => (
                  <Entypo name={focused ? 'home' : 'home'} color={color} size={size} />
               )
            }}

         />
         <Tabs.Screen
            name="Travels"
            options={{
               title: 'Minhas Viagens',
            }}

         />
      </Tabs>
   );
}