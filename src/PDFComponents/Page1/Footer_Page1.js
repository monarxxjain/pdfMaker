import React from 'react'
import { Text, View } from '@react-pdf/renderer'

const Footer_Page1 = ({page1, styles, notes}) => (
    <View style={{position: "absolute", bottom: "30px", display: "flex", flexDirection: "column", gap:"10px"}}>
        <View style={[styles.page, {fontSize:"8px"}]}>
          <View>
            <Text style={[styles.greyBox, {width: "50px" ,padding: "1px 3px", marginBottom: "2px"}]}>Notes</Text>
          </View>
          {notes.map((note, id)=>(
            <View key={id}>
              <Text style={{fontSize: "7px"}}>{id+1}: {note}</Text>
            </View>
          ))}
        </View>

        <Text style={[styles.page, {fontSize:"8px"}]}>Sincerely,</Text>
        <Text style={[styles.page, {fontSize:"8px"}]}>{page1.salesPersonData.salesPersonName}</Text>
        <Text style={[styles.page, {fontSize:"8px"}]}>Phone : (O) : {page1.salesPersonData.phoneNo_O}, (M) : {page1.salesPersonData.phoneNo_M} ,  Email - emailId : {page1.salesPersonData.email}</Text>

        <Text style={[styles.page, {fontSize:"8px", textAlign: "center", marginTop: "20px", alignSelf:"center", marginLeft: "100px"}]}>SEND ALL FUELING REQUESTS TO 24 HR DISPATCH: Ph: phone number Fax :Fax number</Text>
      </View>
)
export default Footer_Page1
