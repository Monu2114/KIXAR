import { Text, View } from "react-native";
import { Typography } from "../../styles/typography";

const Timings = () => {
  return (
    <View style={{ padding: 16 }}>
      <Text style={Typography.heading}>Timings Information</Text>
      <View style={Typography.line} />
    </View>
  );
};

export default Timings;
