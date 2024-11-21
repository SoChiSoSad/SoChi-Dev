import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { AuthProvider } from "../context/AuthContextApi";
import { Slot, useRouter, useSegments, Stack } from 'expo-router';
import AppNav from "../app/(tabs)/AppNav";


export default function RootLayout() {
    return (
        <AuthProvider>
            <AppNav />
        </AuthProvider>
    );
}
