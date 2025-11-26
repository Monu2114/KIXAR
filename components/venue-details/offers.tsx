import { Image, Text, View } from "react-native";
import { Typography } from "../../styles/typography";

type offerItem = {
  id: string;
  title: string;
  description: string;
};
const Offers = ({ offer }: { offer: offerItem[] }) => {
  return (
    <>
      <View style={{ padding: 16 }}>
        <Text style={Typography.heading}>Offers</Text>
        {offer.map((offer) => {
          return (
            <View
              key={offer.id}
              style={{
                borderRadius: 10,
                padding: 16,
                backgroundColor: "#F4FBFA",
                marginTop: 20,
                borderColor: "#CAEBE8",
                borderWidth: 1,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center", // items-center
                  gap: 8, // space between icon & text
                }}
              >
                <Image
                  source={require("@/assets/images/offers.png")}
                  style={{ width: 20, height: 20 }}
                />

                <Text style={Typography.heading}>{offer.title}</Text>
              </View>

              <Text style={{ ...Typography.subHeading, marginTop: 8 }}>
                {offer.description}
              </Text>
            </View>
          );
        })}
        <View style={{ ...Typography.line, marginBlock: 40 }}></View>
      </View>
    </>
  );
};

export default Offers;
