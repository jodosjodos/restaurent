import { View, Text, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";

const SignUp = () => {
  const submit = () => {};
  return (
    <SafeAreaView >
      <View className="flex flex-col w-full justify-center px-6 h-full">
        <Text className=" self-center font-bold text-3xl text-[#FD8700]">Create new Account</Text>
        <View className="">
          <TextInput
            placeholder="Email"
            className="border-b-2 h-16"
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Email"
            className="border-b-2 h-16"
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Email"
            className="border-b-2 h-16"
            keyboardType="email-address"
          />
          <CustomButton fn={submit} title="Sign Up" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
