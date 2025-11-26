import { StyleSheet } from "react-native";

export const Typography = StyleSheet.create({
  heading: {
    fontFamily: "DM Sans",
    fontWeight: "800",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },

  subHeading: {
    fontFamily: "DM Sans",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
  },

  body: {
    fontFamily: "DM Sans",
    fontSize: 13,
    lineHeight: 18,
  },
  line: {
    height: 0.4, // Adjust the height for thicker lines
    backgroundColor: "#111111", // Set the color of your line
    width: "350px", // Make the line span the full width
    marginVertical: 10, // Add vertical spacing if needed
    marginTop: 30,
  },
});
