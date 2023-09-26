import React from "react";
import { View, Image, Text } from "@react-pdf/renderer";


const Header = ({page1, styles}) => (
  <View style={[ styles.page, styles.head]}>
    <Image style={styles.image} src={page1.companyData.companyLogo} />
    <Text style={[styles.flexRow, styles.pdfTitle]}>
      <Text>{page1.companyData.companyName}</Text>
      <Text> FUEL PRICE QUOTE</Text>
    </Text>
    <Text style={styles.address}>
      Office Address - {page1.companyData.address}
    </Text>
    <Text style={[styles.flexRow, styles.font9]}>
      <Text>Ph: {page1.companyData.companyContactDetails.phoneNo}, </Text>
      <Text> Fax: {page1.companyData.companyContactDetails.fax}, </Text>
      <Text>
        {" "}
        24Hr Dispatch: {
          page1.companyData.companyContactDetails.hourDispatch
        },{" "}
      </Text>
      <Text> email: {page1.companyData.companyContactDetails.email}</Text>
    </Text>
  </View>
);

export default Header;
