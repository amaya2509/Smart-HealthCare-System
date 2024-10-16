import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { DoctorProvider } from "@/app/context/DoctorContext";

const HomeLayout = () => {
  return (
    <DoctorProvider>
      <Slot />
    </DoctorProvider>
  );
};

export default HomeLayout;
