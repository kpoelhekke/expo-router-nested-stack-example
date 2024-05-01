import { Link, router } from "expo-router";
import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";

export default function ModalScreen() {
  return (
    <View style={{ backgroundColor: "green", paddingVertical: 100 }}>
      <Link href={"/settings/deeper"}>To deeper settings page</Link>
      <Text
        onPress={() => {
          router.back();
          requestAnimationFrame(() => {
            router.navigate("/settings/deeper");
          });
        }}
      >
        To deeper settings page with router.back() onClick
      </Text>
      <Link href={"/tab2/nested/second"}>To deeper nested</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
