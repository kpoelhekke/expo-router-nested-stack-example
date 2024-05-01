import { Link } from "expo-router";
import { View } from "react-native";

export default function TransparentModal() {
  return (
    <View style={{ backgroundColor: "red", paddingVertical: 100 }}>
      <Link href={"/settings/deeper"}>
        To /settings/deeper page (should close modal?)
      </Link>
      <Link href={"/tab2/nested/second"}>
        To deeper nested stack in /tab2/nested/second (should show back button)
      </Link>
    </View>
  );
}
