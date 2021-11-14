import React from 'react';
import { View, StyleSheet } from 'react-native';

const defaultColor = '#737373';

interface Props {
  color: string;
}

export const ToolbarSeperator: React.FC<Props> = ({ color }) => {
  return null;
};

const styles = StyleSheet.create({
  separator: {
    width: 1,
    marginTop: 4,
    marginBottom: 4,
  },
});
