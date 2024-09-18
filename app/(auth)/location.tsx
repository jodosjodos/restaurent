import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Location = () => {
  const getLocation = () => {};
  return (
    <SafeAreaView className="flex">
      <View className="flex flex-col px-6  justify-between h-full py-12">
        <View className="flex flex-col gap-5">
          <Image source={images.scope} />
          <Text className="self-center font-bold text-2xl">
            Hi, nice to meet you!
          </Text>
          <Text className="text-[#606060] self-center text-xl">
            Set your location to start exploring {"\n"}restaurants around you
          </Text>
          <View>
            <CustomButton
              customStyles="ml-4"
              fn={getLocation}
              title="Use current location"
            />
            <Text className="self-center mt-3 text-[#FD8700] text-xl">
              Set your location manually
            </Text>
          </View>
        </View>
        <Text className="self-center text-[#606060] ">
          We only access your location while you are {"\n"}using the app to
          improve your experience
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Location;
