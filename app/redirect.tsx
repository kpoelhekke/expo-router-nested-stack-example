import { Redirect } from "expo-router";

export default function RedirectExample() {
  return <Redirect href={"/tab2/nested/second"} />;
}
