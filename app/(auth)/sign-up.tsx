import { View, Text, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { Link, useRouter } from "expo-router";

const SignUp = () => {
  const router = useRouter()
  const submit = () => {
    router.push("/location")
  };
  return (
    <SafeAreaView>
      <View className="flex flex-col w-full justify-center px-6 h-full">
        <Text className=" self-center font-bold text-3xl text-[#FD8700]">
          Create new Account
        </Text>
        <View className="">
          <TextInput placeholder="Your Name" className="border-b-2 h-16" />
          <TextInput placeholder="Phone Number" className="border-b-2 h-16" />
          <TextInput
            placeholder="Email"
            className="border-b-2 h-16"
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Password"
            className="border-b-2 h-16"
            keyboardType="visible-password"
          />
          <CustomButton fn={submit} title="Sign Up" />
          <View className="flex flex-row font-bold items-center mt-5 justify-center">
            <Text>Already have an account? </Text>
            <Link href="/sign-in" className="text-blue-500 font-bold underline">
              Log In
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
