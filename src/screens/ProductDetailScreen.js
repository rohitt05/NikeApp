import {
  View,
  StyleSheet,
  Image,
  FlatList,
  useWindowDimensions,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import products from "../data/products";

export default function ProductDetailScreen() {
  const product = products[0];

  const { width } = useWindowDimensions();
  
  const addToCart = () => {
    console.warn("Add to cart")
  }

  const styles = StyleSheet.create({
    container: {},
    image: {
      width: width,
      aspectRatio: 1,
      marginRight: 5,

      borderRadius: 30,
    },
    title: {
      fontSize: 34,
      fontWeight: "500",
      marginVertical: 10,
    },
    price: {
      fontWeight: "500",
      fontSize: 16,
    },
    description: {
      marginVertical: 10,
      fontSize: 18,
      lineHeight: 30,
      fontWeight: "300",
    },
    button:{
      position: "absolute",
      backgroundColor: "black",
      bottom: 30,
      width: "90%",
      alignSelf: "center",
      padding:20,
      borderRadius: 100,
      alignItems:"center",
    },
    buttonText:{
      color: "white",
      fontWeight: "500",
      fontSize: 16,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* image carousel */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{
                uri: item,
              }}
              style={styles.image}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          {/* title */}
          <Text style={styles.title}>{product.name}</Text>

          {/* price */}
          <Text style={styles.price}>${product.price}</Text>
          {/* description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      {/* add to cart btn*/}
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>

      {/* navigation icon */}
    </View>
  );
}
