import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import wallet from "../assets/images/wallet.png";

export default function Index() {
  return (
    <LinearGradient
      colors={["#222831", "#31363F"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView className="h-full">
        <ScrollView
          contentContainerStyle={{
            height: "100%",
          }}
        >
          <View className="w-full flex justify-center items-center h-full px-4 gap-5">
            <Image
              source={wallet}
              className="max-w-[300px] max-h-[300px] object-contain"
              resizeMode="contain"
            />
            <Text className="text-[#76ABAE] text-3xl font-pbold">
              Welcome to &nbsp;
              <Text className="text-amber-400">Khunsi</Text>
            </Text>
            <View className="px-10 w-full">
              <Text className="text-[#EEEEEE] text-base font-pregular text-center">
                Your personal assistant for managing and reducing debt
              </Text>
            </View>
            <TouchableOpacity
              className="w-full flex justify-center items-center mt-6 bg-[#76ABAE] p-4 rounded-lg"
              onPress={() => {
                router.push("/home");
              }}
            >
              <Text className="text-[#222831] font-psemibold">Continue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#222831" style="light" />
      </SafeAreaView>
    </LinearGradient>
  );
}
