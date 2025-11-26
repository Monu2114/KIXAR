import { Typography } from "@/styles/typography";
import { Image, Text, View } from "react-native";
import Button from "../ui/button";

const Sports = ({ sports }: { sports: string[] }) => {
  const sportIcons: Record<string, any> = {
    Football: require("@/assets/images/Foot Ball.png"),
    Cricket: require("@/assets/images/Cricket.png"),
    "Pickle Ball": require("@/assets/images/Pickle Ball.png"),
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={Typography.heading}>Available Sports & Types</Text>
      <View style={{ flexDirection: "column", gap: 16, marginTop: 30 }}>
        <View style={{ flexDirection: "row", gap: 16 }}>
          {sports.map((sport) => {
            return (
              <Button
                key={sport}
                text={sport}
                color="#F3F3F3"
                image_url={sportIcons[sport]}
              />
            );
          })}
        </View>
        <Image
          source={require("@/assets/images/turf.png")}
          style={{ width: 350, height: 150 }}
        />

        <Text
          style={{
            textAlign: "center",
            fontFamily: "DM Sans",
            fontWeight: "800",
            fontSize: 22,
            lineHeight: 24,
            letterSpacing: 0,
          }}
        >
          Turf - Foot Ball & Cricket
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "DM Sans",
            fontWeight: "400",
            fontSize: 18,
            lineHeight: 24,
            letterSpacing: 0,
          }}
        >
          7v7
        </Text>
      </View>
      <View style={Typography.line} />
    </View>
  );
};

export default Sports;
