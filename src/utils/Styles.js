import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    parentView: {
      backgroundColor: "#FBFAF3",
      paddingTop: 5,
      paddingLeft: 15,
      paddingRight: 15,
    },
    userIcon: {
      position: "absolute",
      marginRight: 30,
    },
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    medicineText: {
      fontSize: 14.638,
      fontWeight: "600",
      lineHeight: 20,
    },
    offerText: {
      alignSelf: "center",
      fontSize: 13.0109,
      position: "absolute",
    },
    offText: {
      color: "#5F48E6",
      fontSize: 13.0109,
      position: "absolute",
    },
    prescriptionText: {
      fontSize: 17,
      fontWeight: "700",
      lineHeight: 21,
      marginBottom: 20,
    },
    uploadPrescription: {
      color: "#FFFFFF",
      alignSelf: "center",
      fontSize: 15,
      position: "absolute",
    },
    shieldGroup: {
      flexDirection: "row",
      marginLeft: 20,
      marginRight: 40,
      paddingRight: 50,
      marginBottom: 20,
    },
    shieldIcon: {
      marginRight: 10,
    },
    shieldText: {
      position: "absolute",
      fontWeight: "700",
      fontSize: 11.3845,
      lineHeight: 15,
    },
    whyUploadPrescription: {
      fontSize: 13,
      fontWeight: "700",
      marginBottom: 20,
    },
    validPrescription: {
      fontSize: 11,
      fontWeight: "700",
      color: "#5F48E6",
      textDecorationLine: "underline",
      marginBottom: 20,
    },
    adImageStyle: {
      width: "100%",
      marginBottom: 20,
    },
    continueButton: {
      flexDirection: "row",
      justifyContent: "center",
    },
    continueText: {
      fontSize: 15,
      fontWeight: "800",
      color: "white",
    },
    arrowIcon: {
      marginTop: 3,
      marginLeft: 5,
    },
  });

  export default styles;