import React, { Fragment } from "react";
import { View, Text } from "@react-pdf/renderer";
const PricingDetails = ({ styles, tableColumns, tableRows }) => (
  <Fragment>
    <View
      style={[
        {
          display: "flex",
          flexDirection: "row",
          gap: "3px",
          alignItems: "center",
          fontSize: "10px",
          marginTop: "40px",
        },
        styles.page,
      ]}
    >
      {tableColumns.map((colHead, id) => (
        <Text
          style={[
            styles.greyBox,
            {
              textAlign: "center",
              fontSize: "7px",
              padding: "2px 1px",
              height: "20px",
              width: "50px",
            },
          ]}
        >
          <Text>{colHead}</Text>
        </Text>
      ))}
    </View>
    {tableRows.map((row, id) => (
      <View
        key={id}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "3px",
          alignItems: "center",
          fontSize: "10px",
          marginTop: "3px",
          padding: "0 30px",
        }}
      >
        {row.values.map((value, index) => (
          <Text key={index} style={[{ textAlign: "center", width: "50px" }]}>
            {value}
          </Text>
        ))}
      </View>
    ))}
  </Fragment>
);

export default PricingDetails;
