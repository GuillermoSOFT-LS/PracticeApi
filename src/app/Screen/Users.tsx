import {FlatList, Text, View} from "react-native";
import {useEffect, useState} from "react";
import {IUsers} from "@/src/interfaces/users.interface";
import {fetchData} from "@/src/core/api/FechApi";

const Users = () => {

    const [users, setUsers] = useState<IUsers[]>([])
    useEffect(() => {
        const loadedUser = async ()=> {
            const date = await fetchData<IUsers[]>('users')
            setUsers(date)
        }
        loadedUser()
    }, []);
    return (
        <View className='bg-white flex-1 px-5'>
            <FlatList
                data={users}
                renderItem={({item})=> (
                    <View className='pb-3'>
                        <View className='shadow-sm p-2'>
                            <Text className='font-bold'>usuario: {item.username}</Text>
                            <Text>Email: {item.email}</Text>
                        </View>
                    </View>
                )}
                />
        </View>
    )
}

export default Users;