import React, {Fragment} from 'react'
import { View, Text } from '@react-pdf/renderer'

const CustomerDetails = ({page1, styles}) => (
    <View style={styles.page}>
        <Fragment>
          <View style={{display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", fontSize: "10px", marginTop: "34px"}}>
            <Text style={[styles.greyBox, {width: "46%", textAlign: "center", marginRight: "15px"}]}>Customer Name</Text>
            <Text style={[styles.greyBox, {width: "25%", textAlign: "center"}]}>Estimate Date</Text>
            <Text style={[styles.greyBox, {width: "25%", textAlign: "center"}]}>Quote #</Text>
          </View>
          <View style={{display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", marginTop: "4px", fontSize: "10px"}}>
            <Text style={{width: "46%", textAlign: "center", marginRight: "15px"}}>{page1.customerData.customerName}</Text>
            <Text style={{width: "25%", textAlign: "center"}}>{page1.customerData.estimateDate}</Text>
            <Text style={{width: "25%", textAlign: "center"}}>{page1.customerData.quote}</Text>
          </View>
        </Fragment>

        <Fragment>
          <View style={{display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", marginTop: "10px", fontSize: "10px"}}>
            <Text style={[styles.greyBox, {width: "21%", textAlign: "center"}]}>Credit Line</Text>
            <Text style={[styles.greyBox, {width: "21%", textAlign: "center"}]}>Terms</Text>
            <Text style={[styles.greyBox, {width: "24%", textAlign: "center", marginLeft: "20px"}]}>Total Pages</Text>
          </View> 
          <View style={{display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", marginTop: "4px", fontSize: "10px"}}>
            <Text style={[{width: "21%", textAlign: "center"}]}>{page1.customerData.creditLine}</Text>
            <Text style={[{width: "21%", textAlign: "center"}]}>{page1.customerData.terms}</Text>
            <Text style={[{width: "24%", textAlign: "center", marginLeft: "20px"}]}>{page1.customerData.totalPages}</Text>
          </View> 
        </Fragment>
      </View>
)

export default CustomerDetails
