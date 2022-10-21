import * as React from 'react';
import * as SecureStore from 'expo-secure-store';

export async function SaveStorage(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

export async function GetValueForStorage(key: string) {
  let result = await SecureStore.getItemAsync(key);
  return result
}