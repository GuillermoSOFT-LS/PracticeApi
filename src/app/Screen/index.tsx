import {FlatList, View} from "react-native";
import {useEffect, useState} from "react";
import {fetchData} from "@/src/core/api/FechApi";
import {IProducts} from "@/src/interfaces/products.interfaces";
import CardProducts from "@/src/Components/CardProducts";

export  default function HomeProduct() {

    const [products, setProducts] = useState<IProducts[]>([])

    useEffect(() => {
        const LoadedProducts = async ()=> {
            const date = await fetchData<IProducts[]>('products')
            setProducts(date)
        }
        LoadedProducts()
    }, []);


    return (
            <View style={{flex: 1}} className='p-2'>
                <FlatList
                    data={products}
                    numColumns={2}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={CardProducts}
                />
            </View>
    )
}
