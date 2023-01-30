import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import BoxComponent from "../components/BoxComponent";
import RowContainer from "../components/RowContainer";
import { Badge, Avatar } from "react-native-elements";
import ImageUtils from "../utils/ImageUtils";
import styles from "../utils/Styles";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.parentView}>
        <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            <Image source={ImageUtils.UserImage} />
            <Text style={styles.medicineText}>MEDICINE</Text>
          </View>
          <View>
            <Avatar source={ImageUtils.CartImage} rounded size={25} />
            <Badge
              value={<Text style={{ color: "white", fontSize: 10 }}>2</Text>}
              containerStyle={{
                position: "absolute",
                right: -9,
                bottom: 12,
              }}
              badgeStyle={{ backgroundColor: "black", borderWidth:3, borderColor:'#0BAB7C',  }}
            />
          </View>
        </View>
        <BoxComponent color={"#D7D0FF"}>
          <Text style={styles.offerText}>
            Flat <Text style={styles.offText}>15% off*</Text> on Medicine Order
          </Text>
        </BoxComponent>
        <Text style={styles.prescriptionText}>Have a Prescription?</Text>
        <BoxComponent
          color={"#0BAB7C"}
          children={
            <Text style={styles.uploadPrescription}>Upload Prescription</Text>
          }
        />
        <View style={styles.shieldGroup}>
          <Image style={styles.shieldIcon} source={ImageUtils.ShieldImage} />
          <Text>Your Attached Prescription will be secure and Private.</Text>
        </View>
        <Text style={styles.whyUploadPrescription}>
          Why Upload a Prescription?
        </Text>
        <RowContainer
          icon={ImageUtils.PhoneImage}
          text="Never Lose the Digital of your Prescription. It will be with you wherever you go."
        />
        <RowContainer
          icon={ImageUtils.MedicineImage}
          text="Tata labs specialist will help you."
        />
        <RowContainer
          icon={ImageUtils.LockImage}
          text="Details from your Prescription are not shared with any third Party."
        />
        <Text style={styles.validPrescription}>
          What is a Valid Prescription?
        </Text>
        <Image style={styles.adImageStyle} source={ImageUtils.AdImage} />
        <BoxComponent
          color={"#0BAB7C"}
          children={
            <View style={styles.continueButton}>
              <Text style={styles.continueText}>Continue</Text>
              <Image style={styles.arrowIcon} source={ImageUtils.ArrowImage} />
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
