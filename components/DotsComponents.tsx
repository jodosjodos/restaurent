import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

interface DotsProps {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  totalSlides: number;
}

const DotComponent = ({ currentIndex, setCurrentIndex, totalSlides }: DotsProps) => {
  return (
    <View className="flex-row space-x-2 mt-6">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setCurrentIndex(index)}
          className={`h-3  rounded-full ${index === currentIndex ? 'bg-red-500 w-7' : 'bg-gray-400 w-3'}`}
        />
      ))}
    </View>
  );
};

export default DotComponent;
