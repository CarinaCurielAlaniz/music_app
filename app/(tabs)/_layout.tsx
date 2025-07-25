import { Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const _Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{headerShown: false, title: "Home"}}
            />
            <Tabs.Screen
                name="search"
                options={{headerShown: false, title: "Search"}}
            />
            <Tabs.Screen
                name="saved"
                options={{headerShown: false, title: "Saved"}}
            />
            <Tabs.Screen
                name="account"
                options={{headerShown: false, title: "Account"}}
            />
        </Tabs>
    )
}
export default _Layout;
