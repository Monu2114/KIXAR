import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import DateButton from "../components/ui/dateButton";
import Time from "../components/ui/time";
import { Typography } from "../styles/typography";

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState("24");
  const [selectedTime, setSelectedTime] = useState("Noon");
  const [selectedCourt, setSelectedCourt] = useState("B");

  function generateDates(startDate: Date, days: number) {
    const list = [];
    for (let i = 0; i < days; i++) {
      const newDate = new Date(startDate);
      newDate.setDate(startDate.getDate() + i);
      list.push(newDate);
    }

    return list;
  }
  const today = new Date();
  const dates = generateDates(today, 7);
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <View>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                Xciteplay Club
              </Text>
            </View>
          ),
        }}
      />
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View
          style={{
            padding: 16,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            left: 20,
          }}
        ></View>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            paddingBottom: 120,
            paddingHorizontal: 16,
            left: 12,
          }}
        >
          {/* SELECT DATE */}
          <View>
            <Text style={Typography.heading}>Select Date</Text>
            <Text
              style={{
                color: "#2DB0A3",
                marginTop: 20,
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              November 2025
            </Text>

            {/* Dates */}
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                marginTop: 16,
                flexWrap: "wrap",
              }}
            >
              {dates.map((d) => {
                const dateNumber = d.getDate().toString();

                return (
                  <DateButton
                    key={dateNumber}
                    date={dateNumber}
                    selected={selectedDate === dateNumber}
                    onPress={() => setSelectedDate(dateNumber)}
                  />
                );
              })}
            </View>
          </View>
          <View style={{ ...Typography.line, marginBlock: 40 }}></View>

          {/* SELECT TIME */}
          <View>
            <View
              style={{
                flexDirection: "row",
                gap: 86,
              }}
            >
              <Text style={Typography.heading}>Select Time</Text>
              <Text>8 slots available for today.</Text>
            </View>
            {/* Time Buttons Row */}
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 8,
                top: 20,
              }}
            >
              <Time text="Morning" icon="partly-sunny" />
              <Time text="Afternoon" icon="sunny" />
              <Time text="Evening" icon="moon" />
              <Time text="Night" icon="cloud" />
            </View>

            <Text style={{ marginTop: 16 }}>12:00 PM - 04:00 PM</Text>
          </View>

          {/* TIME SLOT BAR */}
          <View
            style={{
              height: 60,
              marginTop: 24,
              backgroundColor: "#EEE",
              borderRadius: 10,
            }}
          />

          {/* SELECT COURT */}
          <View style={{ marginTop: 32 }}>
            <Text style={Typography.heading}>Select Cricket Court</Text>

            <View
              style={{
                flexDirection: "row",
                gap: 10,
                marginTop: 16,
              }}
            >
              <View
                style={{
                  paddingVertical: 14,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#CCC",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: 8,
                  justifyContent: "space-evenly",
                  width: 171,
                }}
              >
                <Ionicons name="radio-button-off"></Ionicons>
                <Text>Court A</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  paddingVertical: 14,
                  borderRadius: 10,
                  backgroundColor: "#D5EFED",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#2DB0A3",

                  flexDirection: "row",
                  gap: 8,
                  justifyContent: "space-evenly",
                  width: 171,
                }}
              >
                <Ionicons name="radio-button-off"></Ionicons>

                <Text style={{ color: "#2DB0A3", fontWeight: "600" }}>
                  Court B
                </Text>
              </View>
            </View>
          </View>

          {/* PLAYER COUNT */}
          <View style={{ marginTop: 32 }}>
            <Text style={Typography.heading}>Select Players Count</Text>

            <View
              style={{
                flexDirection: "row",
                marginTop: 16,
                borderWidth: 1,
                borderColor: "#DDD",
                borderRadius: 14,
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  width: 70,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#EEE",
                }}
              >
                <Text style={{ fontSize: 20 }}>-</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>5 Players</Text>
              </View>

              <View
                style={{
                  width: 70,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#EEE",
                }}
              >
                <Text style={{ fontSize: 20 }}>+</Text>
              </View>
            </View>
          </View>

          {/* PRICE */}
          <View style={{ marginTop: 32 }}>
            <Text style={{ fontSize: 22, fontWeight: "700" }}>₹ 1200</Text>
            <Text>₹240 per player</Text>
            <Text style={{ color: "#2DB0A3", marginTop: 4 }}>
              View Price Breakup
            </Text>
          </View>
        </ScrollView>

        {/* BOTTOM NEXT BUTTON */}
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: 16,
            backgroundColor: "#fff",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: "#2DB0A3",
              paddingVertical: 14,
              paddingHorizontal: 30,
              borderRadius: 12,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>Next →</Text>
          </View>
        </View>
      </View>
    </>
  );
}
