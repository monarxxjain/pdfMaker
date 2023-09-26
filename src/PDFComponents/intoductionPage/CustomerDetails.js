import React, {Fragment} from 'react'
import { View, Text } from '@react-pdf/renderer'

const CustomerDetails = ({page1, styles}) => (
    <View style={styles.page}>
        <Fragment>
          <View style={styles.custDetails1}>
            <Text style={[styles.greyBox, styles.custDetails2]}>Customer Name</Text>
            <Text style={[styles.greyBox, styles.custDetails3]}>Estimate Date</Text>
            <Text style={[styles.greyBox, styles.custDetails3]}>Quote #</Text>
          </View>
          <View style={styles.custDetails4}>
            <Text style={styles.custDetails5}>{page1.customerData.customerName}</Text>
            <Text style={styles.custDetails3}>{page1.customerData.estimateDate}</Text>
            <Text style={styles.custDetails3}>{page1.customerData.quote}</Text>
          </View>
        </Fragment>

        <Fragment>
          <View style={styles.custDetails6}>
            <Text style={[styles.greyBox, styles.custDetails7]}>Credit Line</Text>
            <Text style={[styles.greyBox, styles.custDetails7]}>Terms</Text>
            <Text style={[styles.greyBox, styles.custDetails8]}>Total Pages</Text>
          </View> 
          <View style={styles.custDetails9}>
            <Text style={[styles.custDetails7]}>{page1.customerData.creditLine}</Text>
            <Text style={[styles.custDetails7]}>{page1.customerData.terms}</Text>
            <Text style={[styles.custDetails8]}>{page1.customerData.totalPages}</Text>
          </View> 
        </Fragment>
      </View>
)

export default CustomerDetails
