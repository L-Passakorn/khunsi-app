import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
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
        ></ScrollView>
        <StatusBar backgroundColor="#222831" style="light" />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
