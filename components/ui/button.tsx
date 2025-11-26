import { Image } from "expo-image";
import {
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Button = ({
  text,
  color,
  image_url,
}: {
  text: string;
  color: string;
  image_url: ImageSourcePropType;
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color,
        maxWidth: 120,
        maxHeight: 40,
        borderRadius: 40, // pill shape
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Icon */}
        <Image
          source={image_url}
          style={{ width: 20, height: 20, resizeMode: "contain" }}
        />

        {/* Text */}
        <Text style={{ fontSize: 14, fontWeight: "600" }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
