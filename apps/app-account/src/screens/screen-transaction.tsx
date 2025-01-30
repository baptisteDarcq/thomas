import React from "react";

import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

/* eslint-disable-next-line */
export interface ScreenTransactionProps {}

export function ScreenTransaction(props: ScreenTransactionProps) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "700", paddingVertical: 50 }}>
        Welcome to ScreenTransaction!
      </Text>
      <Link asChild href="../">
        <Button title="Go back" />
      </Link>
    </View>
  );
}

export default ScreenTransaction;
