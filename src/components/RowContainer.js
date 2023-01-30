import React from "react";
import { View, Text,Image, StyleSheet } from "react-native";

const RowContainer = ({ icon, text }) => {
  return (
    <View style={styles.container}>
      <Image source={icon} />
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginBottom:20
    },
    textStyle:{
        fontSize:11,
        fontWeight:'400',
        paddingRight:20
    }
});

export default RowContainer;
