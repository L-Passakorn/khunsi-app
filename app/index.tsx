import { Text, View } from "react-native";
import "../global.css";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-500 text-3xl font-psemibold">Khunsi</Text>
    </View>
  );
}
