import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Location = () => {
  const getLocation = () => {};
  return (
    <SafeAreaView>
      <View className="flex flex-col justify-center">
        <View>
          <Image source={images.scope} />
          <Text>Hi, nice to meet you!</Text>
          <Text>
            Set your location to start exploring {"\n"}restaurants around you
          </Text>
          <CustomButton fn={getLocation} title="Use current location" />
          <Text>Set your location manually</Text>
        </View>
        <Text>
          We only access your location while you are {"\n"}using the app to
          improve your experience
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Location;
