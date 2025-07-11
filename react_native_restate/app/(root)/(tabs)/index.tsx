import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import { cards, featuredCards } from "@/constants/data"; // Assuming you have a data file with the necessary data

const index = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={cards.slice(0, 4)}
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={() => router.push(`/properties/${item.id}`)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex-row items-center justify-between mt-5">
              <View className="flex-row items-center">
                <Image
                  source={images.avatar}
                  className="size-12 rounded-full"
                />
                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-rubik text-black-100">
                    Good Morning
                  </Text>
                  <Text className="text-base font-rubik-medium text-black-300">
                    Denver
                  </Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6" />
            </View>
            <Search />
            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-blacl-300">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={featuredCards.slice(0, 2)}
                renderItem={({ item }) => (
                  <FeaturedCard
                    item={item}
                    onPress={() => router.push(`/properties/${item.id}`)}
                  />
                )}
                keyExtractor={(item) => item.id.toString()}
                bounces={false}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="flex gap-5 mt-5"
              />
            </View>

            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-blacl-300">
                  Our Recommendation
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <Filters />
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default index;
