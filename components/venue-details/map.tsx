import { Image, Text, View } from "react-native";
import { Typography } from "../../styles/typography";

export default function Map() {
  return (
    <View>
      <Text style={{ ...Typography.heading, padding: 16 }}>Map View</Text>
      <Image
        source={require("@/assets/images/map-preview.png")}
        style={{ width: 390, height: 390, top: 34 }}
      />
    </View>
  );
}
