import { Typography } from "@/styles/typography";
import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={Typography.heading}>About Xciteplay Club</Text>
      <View>
        <Text style={styles.description}>
          Xciteplay Club is the perfect spot for football and cricket lovers to
          bring their game.
          <Text style={styles.readMore}>read more</Text>
        </Text>
        <View style={Typography.line} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    padding: 16,
  },

  description: {
    fontSize: 14,
    lineHeight: 20,
  },
  readMore: {
    color: "#2DB0A3",
    textDecorationLine: "underline",
  },
});
