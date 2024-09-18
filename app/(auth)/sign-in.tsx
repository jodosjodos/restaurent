import { View, Text, TextInput } from "react-native";
import React from "react";
import CustomButton from "@/components/CustomButton";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const router = useRouter()
  const login = () => {
    router.push("/location")
  };
  return (
    <SafeAreaView className="flex-1  justify-center px-5 ">
      <Text className="self-center font-bold text-2xl text-[#FD8700]">
        Log In
      </Text>
      <View className="flex flex-col ">
        <TextInput
          placeholder="Email"
          className="border-b-2 h-16"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="password"
          className="border-b-2 h-16"
          keyboardType="email-address"
        />
        <CustomButton fn={login} title="Login" />
        <View className="flex flex-row font-bold items-center mt-5 justify-center">
          <Text>Don’t have an account?</Text>
          <Link href="/sign-up" className="text-blue-500 font-bold underline">
            Sign Up
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
