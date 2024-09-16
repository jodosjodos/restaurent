import DotComponent from "@/components/DotsComponents";
import { images } from "@/constants";
import { Link, Navigator } from "expo-router";
import { useRef, useState } from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SlideProp {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

const SimpleComponent = ({ item }: { item: SlideProp }) => {
  return (
    <View className="flex items-center justify-center gap-5">
      <Image source={item.image} />
      <Text className="font-extrabold text-[#E4442A] text-4xl">{item.title}</Text>
      <Text className="text-2xl font-semibold">{item.description}</Text>
    </View>
  );
};

export default function Index() {
  const slides = [
    {
      id: "1",
      title: "Select a restaurant",
      description: "Choose from a variety \n of restaurants around you.",
      image: images.restaurant,
    },
    {
      id: "2",
      title: "Order food you like",
      description: "Browse the menu and \norder your favorite meals.",
      image: images.food,
    },
    {
      id: "3",
      title: "Deliver to your home",
      description: "Enjoy fast delivery \nright to your door.",
      image: images.delivery,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const nextItem = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
    
    }
  };
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <SimpleComponent item={slides[currentIndex]} />
      <DotComponent currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} totalSlides={slides.length}/>
      <TouchableOpacity
        onPress={nextItem}
        className="bg-[#FD8700] py-3 px-16  rounded-lg w-[95%] items-center justify-center mt-5"
      >
        <Text className="text-white font-bold text-xl">Continue</Text>
      </TouchableOpacity>
      <Link href="/sign-in">
        <Text className=" font-extralight text-xl underline">Skip</Text>
      </Link>
    </SafeAreaView>
  );
}
