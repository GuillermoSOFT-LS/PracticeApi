import {Text, View, StyleSheet} from "react-native";
import {Image} from "expo-image";
import {AntDesign} from "@expo/vector-icons";

const  CardProducts = ({item}:any) => {

    const isFullWidth = item.rating.rate >= 4.8;

    return (
        <View
            style={{ width: isFullWidth ? '100%' : '50%' }}
            className="flex justify-center p-2 pb-10"
        >
            <View style={isFullWidth && {backgroundColor: '#ecc468'}} className="p-2 bg-white rounded-2xl shadow-sm">
                <View className="flex-1 items-center">
                    <Image
                        style={{ resizeMode: 'contain', width: isFullWidth ? '100%' : undefined }}
                        className={isFullWidth ? 'h-48' : 'w-28 h-36 resize-contain'}
                        source={{ uri: item.image }}
                    />
                    <Text className="font-bold pb-3 pt-2 text-center">
                        {item.title}
                    </Text>
                    <Text className="text-center" numberOfLines={3}>
                        {item.description}
                    </Text>
                </View>
                <View className="flex-row justify-between items-center pt-2">
                    <Text className="font-bold pl-3">US${item.price}</Text>
                    <View className="flex-row items-center">
                        <AntDesign name="star" size={20} color="#f0a803" />
                        <Text className="font-bold">{item.rating.rate}</Text>
                    </View>
                </View>
            </View>
        </View>
    );

};

export default CardProducts;

const styles = StyleSheet.create({
    CardDes: {
        width: '100%',
        backgroundColor: 'red',
    }
})