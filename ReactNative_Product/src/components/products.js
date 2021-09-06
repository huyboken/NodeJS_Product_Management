// import React, { useState, useEffect } from 'react'
// import { StyleSheet, Text, View, FlatList, SafeAreaView, Image } from 'react-native'


// const Item = ({ item, navigation }) => {
//     const onPress = (item) => {
//         navigation.navigate('detail', { item: item })
//     }
//     return (
//         <View>
//             <Image
//                 style={styles.image}
//                 source={{ uri: 'http://10.0.2.2:3001/images/' + item.img }}
//             />
//             <Text onPress={() => onPress(item)} style={styles.card}>Tên sản phẩm:{item.name}</Text>
//             <Text onPress={() => onPress(item)}style={styles.card}>Giá:{item.price}</Text>
//             <Text onPress={() => onPress(item)}style={styles.card}>Loai:{item.idLoaiSP.name}</Text>
//         </View>
//     )
// }
// const products = ({ navigation }) => {
//     const [data, setData] = useState([])
//     useEffect(() => {
//         fetch('http://10.0.2.2:3001/api/products')
//             .then((response) => response.json())
//             .then((json) => setData(json))
//             .catch((error) => console.error('>>>>>>>', error));
//     }, []);
//     const renderItem = ({ item }) => (
//         <Item item={item} navigation={navigation} />
//     );
//     console.log(data)
//     return (
//         <SafeAreaView>
//             <FlatList
//                 data={data}
//                 renderItem={renderItem}
//                 keyExtras={(item) => item._id}
//             />
//         </SafeAreaView>
//     )
// }
// export default products