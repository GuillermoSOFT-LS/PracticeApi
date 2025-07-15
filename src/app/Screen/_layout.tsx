import {Tabs} from "expo-router";
import {Entypo} from "@expo/vector-icons";

const ScreensLayout = ()=> {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: "#f0a803",
            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: "#000",
            },
            headerTitleStyle: {
              color: "#f0a803",
            },
           tabBarStyle: {
               backgroundColor: 'black',
           }
        }}>
            <Tabs.Screen
            name="index"
            options={{
                title: 'Home products',
                tabBarIcon: ({color,size})=> <Entypo name="shopping-bag" size={size} color={color} />
            }}/>
            <Tabs.Screen
                name="Users"
                options={{
                    title: 'Listado de clientes',
                    tabBarIcon: ({color,size})=> <Entypo name="users" size={size} color={color} />
                }}/>
        </Tabs>
    )
}

export default ScreensLayout