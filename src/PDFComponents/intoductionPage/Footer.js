import React from 'react'
import { Text, View } from '@react-pdf/renderer'

const Footer = ({page1, styles, notes}) => (
    <View style={styles.footer1}>
        <View style={[styles.page, styles.font8]}>
          <View>
            <Text style={[styles.greyBox, styles.footer2]}>Notes</Text>
          </View>
          {notes.map((note, id)=>(
            <View key={id}>
              <Text style={styles.font7}>{id+1}: {note}</Text>
            </View>
          ))}
        </View>

        <Text style={[styles.page, styles.font8]}>Sincerely,</Text>
        <Text style={[styles.page, styles.font8]}>{page1.salesPersonData.salesPersonName}</Text>
        <Text style={[styles.page, styles.font8]}>Phone : (O) : {page1.salesPersonData.phoneNo_O}, (M) : {page1.salesPersonData.phoneNo_M} ,  Email - emailId : {page1.salesPersonData.email}</Text>

        <Text style={[styles.page, styles.footer3]}>SEND ALL FUELING REQUESTS TO 24 HR DISPATCH: Ph: phone number Fax :Fax number</Text>
      </View>
)
export default Footer
