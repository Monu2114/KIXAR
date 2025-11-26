import { Text, View } from "react-native";
import { Typography } from "../../styles/typography";
import Button from "../ui/button";

const Facilities = () => {
  return (
    <View style={{ padding: 16 }}>
      <Text style={Typography.heading}>Facilities</Text>
      <View style={{ flexDirection: "column", gap: 16, marginTop: 30 }}>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <Button
            text="Parking"
            color="#F3F3F3"
            image_url={require("@/assets/images/car.png")}
          />
          <Button
            text="Water"
            color="#F3F3F3"
            image_url={require("@/assets/images/water.png")}
          />
          <Button
            text="Ball"
            color="#F3F3F3"
            image_url={require("@/assets/images/ball.png")}
          />
        </View>

        <Button
          text="Night Light"
          color="#F3F3F3"
          image_url={require("@/assets/images/night.png")}
        />
      </View>
      <View style={Typography.line} />
    </View>
  );
};

export default Facilities;
