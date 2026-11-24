import { FlatList, Text, View } from "react-native";
import { AppText } from "@/components/AppText";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";

export default function IndexScreen() {
  const [myAllproducts, setMyAllProducts] = useState();

  let count = 0;

  const getAllProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setMyAllProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>Products</Text>
        <FlatList
          data={myAllproducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
