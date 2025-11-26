import { Typography } from "@/styles/typography";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import About from "../components/about";
import ImageViewer from "../components/image";
import Facilities from "../components/venue-details/facilities";
import Map from "../components/venue-details/map";
import Offers from "../components/venue-details/offers";
import Sports from "../components/venue-details/sports";
import Timings from "../components/venue-details/timings";

import { router } from "expo-router";

const PlaceholderImage = require("@/assets/images/football.png");

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer imgSource={PlaceholderImage} />
          <About />
          <Timings />
          <Facilities />
          <Sports sports={["Foot Ball", "Cricket", "Pickle Ball"]} />
          <Offers
            offer={[
              {
                id: "1",
                title: "FIRSTBOOK",
                description:
                  "Get a 20% Offer on your first turf booking with Kixar App",
              },
              {
                id: "2",
                title: "Student Offer",
                description: "Show ID to get ₹100 off.",
              },
            ]}
          />
          <Map />
          <View style={{ padding: 16, backgroundColor: "#D5EFED", width: 400 }}>
            <Text style={Typography.body}>
              15% OFF <Text style={Typography.heading}>ends in 01:50 s</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <View>
          <Text style={Typography.heading}>₹ 1200 / 1 hour</Text>
          <Text style={Typography.subHeading}>
            per player cost in next step
          </Text>
        </View>

        <TouchableOpacity
          style={styles.bookBtn}
          onPress={() => router.push("/booking")}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>Book Now </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    flex: 1,
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 16,
    borderTopColor: "#eee",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  bookBtn: {
    backgroundColor: "#2DB0A3",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
});
