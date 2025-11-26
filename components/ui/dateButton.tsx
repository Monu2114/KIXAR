import { Pressable, Text } from "react-native";

export default function DateButton({
  date,
  selected,
  onPress,
}: {
  date: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: selected ? "#2DB0A3" : "#F3F3F3",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          color: selected ? "#fff" : "#000",
          fontWeight: selected ? "600" : "400",
        }}
      >
        {date}
      </Text>
    </Pressable>
  );
}
