import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
export default function Time({
  text,
  icon,
}: {
  text: string;
  icon: keyof typeof Ionicons.glyphMap;
}) {
  return (
    <View
      style={{
        backgroundColor: "#F3F3F3",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 48,
        alignItems: "center",
        flexDirection: "row",
        gap: 8,
        width: 171,
      }}
    >
      <Ionicons name={icon} size={24} color="black" />

      <Text>{text}</Text>
    </View>
  );
}
