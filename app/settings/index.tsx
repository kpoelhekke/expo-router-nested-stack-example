import { Link, usePathname } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const pathname = usePathname();

  return (
    <>
      <Text>{pathname}</Text>
      <View style={{ height: 30 }} />
      <Link href={"/settings/deeper"}>
        Go to /settings/deeper page (shows back button properly)
      </Link>
    </>
  );
}
