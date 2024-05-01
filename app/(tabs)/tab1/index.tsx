import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Link href={"/settings/"}>To /settings/</Link>
      <View style={{ height: 20 }} />
      <Link href={"/settings/deeper"}>
        Go to /settings/deeper page (should show back button to
        /settings/index.tsx in settings header)
      </Link>
      <View style={{ height: 20 }} />
      <Link href={"/transparent-modal"}>Go to transparent modal</Link>
      <View style={{ height: 20 }} />
      <Link href={"/redirect"}>
        Go to /redirect to /tab2/nested/second (should show back buttons)
      </Link>
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
