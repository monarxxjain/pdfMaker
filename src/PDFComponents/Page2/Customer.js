import React, {Fragment} from 'react'
import { View, Text } from '@react-pdf/renderer'
const Customer = ({page2, styles}) => (
    <View style={styles.page}>
        <Fragment>
          <View style={{display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", fontSize: "10px", marginTop: "20px"}}>
            <Text style={[styles.greyBox, {width: "46%", textAlign: "center", marginRight: "15px"}]}>Customer Name</Text>
            <Text style={[styles.greyBox, {width: "25%", textAlign: "center"}]}>Pricing Effective Date</Text>
            <Text style={[styles.greyBox, {width: "25%", textAlign: "center"}]}>Pricing Expiration Date</Text>
          </View>
          <View style={{display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", marginTop: "4px", fontSize: "10px"}}>
            <Text style={{width: "46%", textAlign: "center", marginRight: "15px"}}>{page2.table1.customerName}</Text>
            <Text style={{width: "25%", textAlign: "center"}}>{page2.table1.effDate}</Text>
            <Text style={{width: "25%", textAlign: "center"}}>{page2.table1.expDate}</Text>
          </View>
        </Fragment>

        <Fragment>
          <View style={{display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", fontSize: "10px", marginTop: "20px"}}>
            <Text style={[styles.greyBox, {width: "46%", textAlign: "center", marginRight: "15px"}]}>IATA / ICAO</Text>
            <Text style={[styles.greyBox, {width: "25%", textAlign: "center"}]}>Quote #</Text>
            <Text style={[styles.greyBox, {width: "25%", textAlign: "center"}]}>Quote Type</Text>
          </View>
          <View style={{display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", marginTop: "4px", fontSize: "10px"}}>
            <Text style={{width: "46%", textAlign: "center", marginRight: "15px"}}>{page2.table2.iata_icao}</Text>
            <Text style={{width: "25%", textAlign: "center"}}>{page2.table2.quote}</Text>
            <Text style={{width: "25%", textAlign: "center"}}>{page2.table2.quoteType}</Text>
          </View>
        </Fragment>

        <Fragment>
          <View style={{display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", fontSize: "10px", marginTop: "20px"}}>
            <Text style={[styles.greyBox, {width: "46%", textAlign: "center", marginRight: "15px"}]}>Airport</Text>
            <Text style={[styles.greyBox, {width: "25%", textAlign: "center"}]}>Quote Date</Text>
            <Text style={[styles.greyBox, {width: "25%", textAlign: "center"}]}>Uplift Date</Text>
          </View>
          <View style={{display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", marginTop: "4px", fontSize: "10px"}}>
            <Text style={{width: "46%", textAlign: "center", marginRight: "15px"}}>{page2.table3.airport}</Text>
            <Text style={{width: "25%", textAlign: "center"}}>{page2.table3.quoteDate}</Text>
            <Text style={{width: "25%", textAlign: "center"}}>{page2.table3.upliftDate}</Text>
          </View>
        </Fragment>

        <Fragment>
          <View style={{display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", fontSize: "10px", marginTop: "20px"}}>
            <Text style={[styles.greyBox, {width: "46%", textAlign: "center", marginRight: "15px"}]}>City / State</Text>
            <Text style={[styles.greyBox, {width: "25%", textAlign: "center"}]}>Quantity</Text>
            <Text style={[styles.greyBox, {width: "25%", textAlign: "center"}]}>Fuel Type</Text>
          </View>
          <View style={{display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", marginTop: "4px", fontSize: "10px"}}>
            <Text style={{width: "46%", textAlign: "center", marginRight: "15px"}}>{page2.table4.city_state}</Text>
            <Text style={{width: "25%", textAlign: "center"}}>{page2.table4.quantity}</Text>
            <Text style={{width: "25%", textAlign: "center"}}>{page2.table4.fuelType}</Text>
          </View>
        </Fragment>

        <Fragment>
          <View style={{display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", fontSize: "10px", marginTop: "20px"}}>
            <Text style={[styles.greyBox, {width: "46%", textAlign: "center", marginRight: "15px"}]}>Country</Text>
            <Text style={[styles.greyBox, {width: "25%", textAlign: "center"}]}>Flight Type</Text>
            <Text style={[styles.greyBox, {width: "25%", textAlign: "center"}]}>Delivery Method</Text>
          </View>
          <View style={{display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", marginTop: "4px", fontSize: "10px"}}>
            <Text style={{width: "46%", textAlign: "center", marginRight: "15px"}}>{page2.table5.country}</Text>
            <Text style={{width: "25%", textAlign: "center"}}>{page2.table5.fightType}</Text>
            <Text style={{width: "25%", textAlign: "center"}}>{page2.table5.deliveryMethod}</Text>
          </View>
        </Fragment>

        <Fragment>
          <View style={{display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", fontSize: "10px", marginTop: "20px"}}>
            <Text style={[styles.greyBox, {width: "20.5%", textAlign: "center"}]}>Price Index Basis</Text>
            <Text style={[styles.greyBox, {width: "20.5%", textAlign: "center"}]}>Pricing Cycle</Text>
            <Text style={[styles.greyBox, {width: "50.5%", textAlign: "center", marginLeft: "15px"}]}>Into-Plane Agent</Text>
          </View>
          <View style={{display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", marginTop: "4px", fontSize: "10px"}}>
            <Text style={{width: "20.5%", textAlign: "center"}}>{page2.table6.priceIndexBasis}</Text>
            <Text style={{width: "20.5%", textAlign: "center"}}>{page2.table6.pricingCycle}</Text>
            <Text style={{width: "50.5%", textAlign: "center", marginLeft: "15px"}}>{page2.table6.intoPLaneAgent}</Text>
          </View>
        </Fragment>

        <Fragment>
          <View style={{display: "flex", flexDirection: "row", alignItems: "center", fontSize: "10px", marginTop: "34px"}}>
            <Text style={[styles.greyBox, {width: "11%", height: "23px", paddingHorizontal: "2px", textAlign: "center"}]}>Index Price Amount</Text>
            <Text style={[styles.greyBox, {width: "11%", height: "23px", paddingHorizontal: "2px", textAlign: "center"}]}>Differential</Text>
            <Text style={[styles.greyBox, {width: "11%", height: "23px", paddingHorizontal: "2px", textAlign: "center"}]}>Fuel-Price</Text>
            <Text style={[styles.greyBox, {width: "11%", height: "23px", paddingHorizontal: "2px", textAlign: "center", marginRight: "10px"}]}>Into-Plane Fee</Text>
            
            <Text style={[styles.greyBox, {width: "12.5%", height: "23px", paddingHorizontal: "2px", textAlign: "center", marginLeft: "20px"}]}>Per UOM Fee</Text>
            <Text style={[styles.greyBox, {width: "12.5%", height: "23px", paddingHorizontal: "2px", textAlign: "center"}]}>Taxes</Text>
            <Text style={[styles.greyBox, {width: "12.5%", height: "23px", paddingHorizontal: "2px", textAlign: "center"}]}>Total Price Per UOM</Text>
            <Text style={[styles.greyBox, {width: "12.5%", height: "23px", paddingHorizontal: "2px", textAlign: "center"}]}>CURR/UOM</Text>
          </View>
          <View style={{display: "flex", flexDirection: "row", alignItems: "center", marginTop: "4px", fontSize: "10px"}}>
            <Text style={[{width: "11%", height: "23px", paddingHorizontal: "2px", textAlign: "center"}]}>{page2.table7.indexPriceAmount}</Text>
            <Text style={[{width: "11%", height: "23px", paddingHorizontal: "2px", textAlign: "center"}]}>{page2.table7.differential}</Text>
            <Text style={[{width: "11%", height: "23px", paddingHorizontal: "2px", textAlign: "center"}]}>{page2.table7.fuelPrice}</Text>
            <Text style={[{width: "11%", height: "23px", paddingHorizontal: "2px", textAlign: "center", marginRight: "10px"}]}>{page2.table7.intoPlaneFee}</Text>
            
            <Text style={[{width: "12.5%", height: "23px", paddingHorizontal: "2px", textAlign: "center", marginLeft: "20px"}]}>{page2.table7.perUOMFee}</Text>
            <Text style={[{width: "12.5%", height: "23px", paddingHorizontal: "2px", textAlign: "center"}]}>{page2.table7.taxes}</Text>
            <Text style={[{width: "12.5%", height: "23px", paddingHorizontal: "2px", textAlign: "center"}]}>{page2.table7.totalPricePerUOM}</Text>
            <Text style={[{width: "12.5%", height: "23px", paddingHorizontal: "2px", textAlign: "center"}]}>{page2.table7.curr_uom}</Text>
          </View>
        </Fragment>

        <Fragment>
          <View style={{display: "flex", flexDirection: "row", alignItems: "center", fontSize: "10px", marginTop: "20px"}}>
            <Text style={[styles.greyBox, {width: "44%", padding: "2px", fontSize: '9px'}]}>INTO-PLANE FEES DETAIL (included in price above)</Text>
            <Text style={[styles.greyBox, {width: "50%", padding: "2px", marginLeft: "30px", fontSize: '9px'}]}>PER FLIGHT FEES DETAIL</Text>
          </View>
          <View style={{display: "flex", flexDirection: "row", alignItems: "center", marginTop: "4px", fontSize: "10px"}}>
            <Text style={[{width: "44%", textAlign: "right"}]}>{page2.table8.intoPlaneFeeDetail}</Text>
            <Text style={[{width: "55%", textAlign: "right"}]}>{page2.table8.perFlightFeeDetail}</Text>
          </View>
        </Fragment>

        <Fragment>
          <View style={{display: "flex", flexDirection: "row", alignItems: "center", fontSize: "10px", marginTop: "20px"}}>
            <Text style={[styles.greyBox, {width: "44%", padding: "2px", fontSize: '9px'}]}>FEE DETAIL PER UOM (included in price above)</Text>
            <Text style={[styles.greyBox, {width: "50%", padding: "2px", marginLeft: "30px", fontSize: '9px'}]}>TAX DETAIL (included in price above)</Text>
          </View>
          <View style={{display: "flex", flexDirection: "row", alignItems: "center", marginTop: "4px", fontSize: "10px"}}>
            <Text style={[{width: "21%"}]}>Sagess: </Text>
            <Text style={[{width: "23%", textAlign: "right"}]}>{page2.table9.feeDetailPerUOM.Sagess}</Text>
            <Text style={[{width: "55%", textAlign: "right"}]}>{page2.table9.taxDetail}</Text>
          </View>
        </Fragment>
    </View>
)

export default Customer
