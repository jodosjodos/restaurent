import CustomButton from "@/components/CustomButton";
import DotComponent from "@/components/DotsComponents";
import { images } from "@/constants";
import { slides } from "@/constants/data";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
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
      <Text className="font-extrabold text-[#E4442A] text-4xl">
        {item.title}
      </Text>
      <Text className="text-2xl font-semibold">{item.description}</Text>
    </View>
  );
};

export default function Index() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const router = useRouter();
  const nextItem = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      router.push("/sign-in");
    }
  };
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <SimpleComponent item={slides[currentIndex]} />
      <DotComponent
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        totalSlides={slides.length}
      />
      <CustomButton fn={nextItem} title="Continue" />
      <Link href="/sign-in">
        <Text className=" font-extralight text-xl underline">Skip</Text>
      </Link>
    </SafeAreaView>
  );
}
