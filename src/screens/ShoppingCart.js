import { View, FlatList, StyleSheet, Text, Pressable } from "react-native";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";

const ShoppingCart = () => {
    const ShoppingCartTotals  = () => (
        <View style={styles.totalContainer}>
          <View style={styles.row}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}>$960 US</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Delivery</Text>
            <Text style={styles.text}>$100 US</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textBold}>Total</Text>
            <Text style={styles.textBold}>$1060 US</Text>
          </View>
        </View>
      )
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable  style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  totalContainer: {
    margin: 10,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 70
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 20,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default ShoppingCart;
