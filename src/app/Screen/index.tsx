import {FlatList, ScrollView, Text, View} from "react-native";
import {useEffect, useState} from "react";
import {fetchData} from "@/src/core/api/FechApi";
import {IProducts} from "@/src/interfaces/products.interfaces";
import {Image} from "expo-image";
import {AntDesign} from "@expo/vector-icons";

const HomeProduct = () => {


    const [products, setProducts] = useState<IProducts[]>([])

    useEffect(() => {
        const loadedProducts = async ()=> {
            const date = await fetchData<IProducts[]>('products')
            setProducts(date)
        }
        loadedProducts()
    }, []);

    return (
        <ScrollView className='bg-white'>
            <View className='p-2'>
                <FlatList
                    data={products}
                    numColumns={2}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (


                        <View className='flex justify-center w-[50%] p-2  pb-10'>
                            <View className='p-2 bg-white rounded-2xl shadow-sm'>
                                <View className='flex-1 items-center'>
                                    <Image style={{}} className='w-28 h-36 resize-contain' source={{uri: item.image}}/>
                                    <Text className='font-bold pb-3 pt-2'>{item.title}</Text>
                                    <Text className='' numberOfLines={3}>{item.description}</Text>
                                </View>
                                <View className='flex-row justify-between items-center pt-2'>
                                    <Text className='font-bold pl-3'>US${item.price}</Text>
                                    <View className='flex-row items-center'>
                                        <AntDesign name="star" size={20} color="#f0a803" />
                                        {/*<Text className='font-bold'>{item.rating.rate}</Text>*/}
                                    </View>
                                </View>
                            </View>


                        </View>


                    )}
                />
            </View>
        </ScrollView>
    )
}

export default HomeProduct