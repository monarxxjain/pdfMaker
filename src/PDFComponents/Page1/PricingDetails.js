import React, { Fragment } from "react";
import { View, Text } from "@react-pdf/renderer";
const PricingDetails = ({ styles, tableColumns, tableRows }) => (
  <Fragment>
    <View
      style={[
        styles.pricingDetails1,
        styles.page,
      ]}
    >
      {tableColumns.map((colHead, id) => (
        <Text
          style={[
            styles.greyBox,
            styles.pricingDetails2
          ]}
        >
          <Text>{colHead}</Text>
        </Text>
      ))}
    </View>
    {tableRows.map((row, id) => (
      <View
        key={id}
        style={styles.pricingDetails3}
      >
        {row.values.map((value, index) => (
          <Text key={index} style={styles.pricingDetails4}>
            {value}
          </Text>
        ))}
      </View>
    ))}
  </Fragment>
);

export default PricingDetails;
