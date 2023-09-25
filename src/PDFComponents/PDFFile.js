import React, { Fragment } from 'react'
import { Page, Text, Image, View, Document, StyleSheet } from '@react-pdf/renderer'
import Header from './Header';
import CustomerDetails from './Page1/CustomerDetails';
import Footer_Page1 from './Page1/Footer_Page1';
import PricingDetails from './Page1/PricingDetails';
import Customer from './Page2/Customer';
import Disclaimer from './Disclaimer';

const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    padding: "0 30px"
  },
  head: {
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
  },
  image:{
    width:"40px"
  },
  flexRow:{
    display: "flex",
  },
  flexRowGap:{
    display: "flex",
    gap: "50px",
  },
  pdfTitle: {
    color: "#800080",
    // marginTop: "10px",
    fontSize: "16px",
    fontStyle: "sans-serif",
    fontWeight: 600
  },
  address: {
    textAlign: "center",
    maxWidth: "70%",
    fontSize: "9px"
  },
  greyBox: {
    color: 'white',
    backgroundColor: "#808080",
    width: "400px"
  },
  textCenter: {
    textAlign: "center"
  },
  verticalGap: {
    display: "flex",
    flexDirection: "column",
    gap: "4px"
  }

});

const page2= {
  table1: {
    customerName: "Monark Jain",
    effDate: "01 Aug 2023",
    expDate: "31 Aug 2023"
  },
  table2: {
    iata_icao: "LBG /LFPB",
    quote: "23454",
    quoteType: "Scheduled"
  },
  table3: {
    airport: "Paris - Le Bourget Airport",
    quoteDate: "11 Aug 2014",
    upliftDate: "11 Aug 2014"
  },
  table4: {
    city_state: "11 Aug 2014",
    quantity: "1000",
    fuelType: "Jet Fuel, Jet A-1"
  },
  table5: {
    country: "France",
    fightType: "Commercial/International",
    deliveryMethod: "pipeline"
  },


  table6: {
    priceIndexBasis: ".",
    pricingCycle: ".",
    intoPLaneAgent: "GCAB Air Total"
  },

  table7: {
    indexPriceAmount: ".",
    differential: ".",
    fuelPrice: "4.328956",
    intoPlaneFee: "0.000000000",


    perUOMFee: "0.045210",
    taxes: "0.000000",
    totalPricePerUOM: "$4.374166",
    curr_uom: "USD/USG"
  },

  table8: {
    intoPlaneFeeDetail: "N/A",

    perFlightFeeDetail: "N/A"
  },
 
  table9: {
    feeDetailPerUOM: {
      "Sagess" : "0.045210",
    },

    taxDetail: "N/A"
  }
}

const tableColumns = ["IATA", "ICAO" ," DOM/NTL", "UOM", "CUR", "DEL METHOD", "FUEL PRICE", "INTO PLANE", "OTH FEES" , "TAXES", "TOT PRICE", "P F FEE"]
const tableRows = [
  {
    name: 1,
    values: ["1","2","3","4","5","6","7","8","9","10","11","12"]
  },
  {
    name: 2,
    values: ["1","2","3","4","5","6","7","8","9","10","11","12"]
  }
]

const notes=["note1", "Note 2" ,"Note 3","Note 4","Note5"]
const page1 = {
  companyData: {
    companyLogo: "/download.png",
    companyName: "Fiverr",
    address: "This is address 1",
    companyContactDetails: {
      phoneNo: "(001) 1234 567689",
      fax: "(101) 123-45678",
      hourDispatch: "(001) 123-456-789",
      email: "email@email.com"
    }
  },

  customerData: {
    customerName: "Monark Jain",
    creditLine: "150,000.00",
    terms: "Net 14 Days",
    estimateDate: "11 Aug 2023",
    quote: "23425",
    totalPages: 4
  },

  salesPersonData: {
    salesPersonName: "Monark Jain",
    phoneNo_O: "3948690900",
    phoneNo_M: "8939865893869",
    email:"oenrgo@gmail.com"

  }
}

const PDFFile = ({data}) => (
  <Document>
    
    <Page size="A4">
      <Header page1={page1} styles={styles}/>
       
      <Text style={[styles.page, {fontSize: "10px", alignSelf: "flex-start", marginTop: "25px"}]}>To: </Text>

      <CustomerDetails page1={page1} styles={styles}/>

      <Text style={[{fontSize: "10px", marginTop: "20px"},styles.page]}>Below please find pricing details that apply for above mentioned quote</Text>

      <PricingDetails styles={styles} tableColumns={tableColumns} tableRows={tableRows} />

      <Footer_Page1 page1={page1} styles={styles} notes={notes} />
    </Page>
    
    <Page>
      <Header page1={page1} styles={styles}/>

      <Customer page2={page2} styles={styles} />

      <Disclaimer styles={styles} notes={notes} />
    </Page>

    <Page>
      <Header page1={page1} styles={styles}/>

      <Customer page2={page2} styles={styles} />

      <Disclaimer styles={styles} notes={notes} />
    </Page>

    <Page>
      <Header page1={page1} styles={styles}/>

      <Customer page2={page2} styles={styles} />

      <Disclaimer styles={styles} notes={notes} />
    </Page>
    
  </Document>
);

export default PDFFile
