import React, {Fragment} from 'react'
import { View, Text } from '@react-pdf/renderer'
const Customer = ({page2, styles}) => (
    <View style={styles.page}>
        <Fragment>
          <View style={styles.customer1}>
            <Text style={[styles.greyBox, styles.customer2]}>Customer Name</Text>
            <Text style={[styles.greyBox, styles.customer3]}>Pricing Effective Date</Text>
            <Text style={[styles.greyBox, styles.customer3]}>Pricing Expiration Date</Text>
          </View>
          <View style={styles.customer4}>
            <Text style={styles.customer2}>{page2.table1.customerName}</Text>
            <Text style={styles.customer3}>{page2.table1.effDate}</Text>
            <Text style={styles.customer3}>{page2.table1.expDate}</Text>
          </View>
        </Fragment>

        <Fragment>
          <View style={styles.customer1}>
            <Text style={[styles.greyBox, styles.customer2]}>IATA / ICAO</Text>
            <Text style={[styles.greyBox, styles.customer3]}>Quote #</Text>
            <Text style={[styles.greyBox, styles.customer3]}>Quote Type</Text>
          </View>
          <View style={styles.customer4}>
            <Text style={styles.customer2}>{page2.table2.iata_icao}</Text>
            <Text style={styles.customer3}>{page2.table2.quote}</Text>
            <Text style={styles.customer3}>{page2.table2.quoteType}</Text>
          </View>
        </Fragment>

        <Fragment>
          <View style={styles.customer1}>
            <Text style={[styles.greyBox, styles.customer2]}>Airport</Text>
            <Text style={[styles.greyBox, styles.customer3]}>Quote Date</Text>
            <Text style={[styles.greyBox, styles.customer3]}>Uplift Date</Text>
          </View>
          <View style={styles.customer4}>
            <Text style={styles.customer2}>{page2.table3.airport}</Text>
            <Text style={styles.customer3}>{page2.table3.quoteDate}</Text>
            <Text style={styles.customer3}>{page2.table3.upliftDate}</Text>
          </View>
        </Fragment>

        <Fragment>
          <View style={styles.customer1}>
            <Text style={[styles.greyBox, styles.customer2]}>City / State</Text>
            <Text style={[styles.greyBox, styles.customer3]}>Quantity</Text>
            <Text style={[styles.greyBox, styles.customer3]}>Fuel Type</Text>
          </View>
          <View style={styles.customer4}>
            <Text style={styles.customer2}>{page2.table4.city_state}</Text>
            <Text style={styles.customer3}>{page2.table4.quantity}</Text>
            <Text style={styles.customer3}>{page2.table4.fuelType}</Text>
          </View>
        </Fragment>

        <Fragment>
          <View style={styles.customer1}>
            <Text style={[styles.greyBox, styles.customer2]}>Country</Text>
            <Text style={[styles.greyBox, styles.customer3]}>Flight Type</Text>
            <Text style={[styles.greyBox, styles.customer3]}>Delivery Method</Text>
          </View>
          <View style={styles.customer4}>
            <Text style={styles.customer2}>{page2.table5.country}</Text>
            <Text style={styles.customer3}>{page2.table5.fightType}</Text>
            <Text style={styles.customer3}>{page2.table5.deliveryMethod}</Text>
          </View>
        </Fragment>

        <Fragment>
          <View style={styles.customer1}>
            <Text style={[styles.greyBox, styles.customer5]}>Price Index Basis</Text>
            <Text style={[styles.greyBox, styles.customer5]}>Pricing Cycle</Text>
            <Text style={[styles.greyBox, styles.customer6]}>Into-Plane Agent</Text>
          </View>
          <View style={styles.customer4}>
            <Text style={styles.customer5}>{page2.table6.priceIndexBasis}</Text>
            <Text style={styles.customer5}>{page2.table6.pricingCycle}</Text>
            <Text style={styles.customer6}>{page2.table6.intoPLaneAgent}</Text>
          </View>
        </Fragment>

        <Fragment>
          <View style={styles.customer7}>
            <Text style={[styles.greyBox, styles.customer8]}>Index Price Amount</Text>
            <Text style={[styles.greyBox, styles.customer8]}>Differential</Text>
            <Text style={[styles.greyBox, styles.customer8]}>Fuel-Price</Text>
            <Text style={[styles.greyBox, styles.customer9]}>Into-Plane Fee</Text>
            
            <Text style={[styles.greyBox, styles.customer10]}>Per UOM Fee</Text>
            <Text style={[styles.greyBox, styles.customer11]}>Taxes</Text>
            <Text style={[styles.greyBox, styles.customer11]}>Total Price Per UOM</Text>
            <Text style={[styles.greyBox, styles.customer11]}>CURR/UOM</Text>
          </View>
          <View style={styles.customer12}>
            <Text style={[styles.customer8]}>{page2.table7.indexPriceAmount}</Text>
            <Text style={[styles.customer8]}>{page2.table7.differential}</Text>
            <Text style={[styles.customer8]}>{page2.table7.fuelPrice}</Text>
            <Text style={[styles.customer9]}>{page2.table7.intoPlaneFee}</Text>
            
            <Text style={[styles.customer10]}>{page2.table7.perUOMFee}</Text>
            <Text style={[styles.customer11]}>{page2.table7.taxes}</Text>
            <Text style={[styles.customer11]}>{page2.table7.totalPricePerUOM}</Text>
            <Text style={[styles.customer11]}>{page2.table7.curr_uom}</Text>
          </View>
        </Fragment>

        <Fragment>
          <View style={styles.customer13}>
            <Text style={[styles.greyBox, styles.customer14]}>INTO-PLANE FEES DETAIL (included in price above)</Text>
            <Text style={[styles.greyBox, styles.customer15]}>PER FLIGHT FEES DETAIL</Text>
          </View>
          <View style={styles.customer12}>
            <Text style={styles.customer16}>{page2.table8.intoPlaneFeeDetail}</Text>
            <Text style={[styles.customer17]}>{page2.table8.perFlightFeeDetail}</Text>
          </View>
        </Fragment>

        <Fragment>
          <View style={styles.customer13}>
            <Text style={[styles.greyBox, styles.customer14]}>FEE DETAIL PER UOM (included in price above)</Text>
            <Text style={[styles.greyBox, styles.customer15]}>TAX DETAIL (included in price above)</Text>
          </View>
          <View style={styles.customer12}>
            <Text style={styles.customer18}>Sagess: </Text>
            <Text style={styles.customer19}>{page2.table9.feeDetailPerUOM.Sagess}</Text>
            <Text style={[styles.customer17]}>{page2.table9.taxDetail}</Text>
          </View>
        </Fragment>
    </View>
)

export default Customer
