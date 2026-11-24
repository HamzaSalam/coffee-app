import { Stack } from "expo-router";
import "../../global.css";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const [myAllproducts, setMyAllProducts] = useState();
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Stack />
    </React.Fragment>
  );
}
