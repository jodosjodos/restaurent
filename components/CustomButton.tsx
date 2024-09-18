import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  fn,
  title,
  customStyles,
}: {
  fn: () => void;
  title: String;
  customStyles?: string;
}) => {
  return (
    <TouchableOpacity
      onPress={fn}
      className={`bg-[#FD8700] py-3 px-16  rounded-lg w-[95%] items-center justify-center mt-5 ${customStyles} `}
    >
      <Text className="text-white font-bold text-xl">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
