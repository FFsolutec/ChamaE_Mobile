import { useEffect, useRef } from "react";
import { Animated, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Card } from "react-native-paper";

const SelectableCard = ({ selected, onPress, children, style }: any) => {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: selected ? 1.03 : 1,
      useNativeDriver: true,
    }).start();
  }, [selected]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          style,
          selected && styles.cardSelected,
          { transform: [{ scale }] },
        ]}
      >
        <Card>{children}</Card>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cardSelected: {
    borderColor: "#6200ee",
    backgroundColor: "#eceaffff",
  },
});

export default SelectableCard;
