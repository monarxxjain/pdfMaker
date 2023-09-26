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
    paddingTop: "30px"
  },
  image:{
    width:"40px"
  },
  toText: {
    fontSize: "10px",
    alignSelf: "flex-start", 
    marginTop: "25px"
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
  findBelowText: {fontSize: "10px",
    marginTop: "20px"
  },
  verticalGap: {
    display: "flex",
    flexDirection: "column",
    gap: "4px"
  },
  font9: {
    fontSize: "9px"
  },
  custDetails1: {display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", fontSize: "10px", marginTop: "34px"},
  custDetails2: {width: "46%", textAlign: "center", marginRight: "15px"},
  custDetails3: {width: "25%", textAlign: "center"},
  custDetails4: {display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", marginTop: "4px", fontSize: "10px"},
  custDetails5: {width: "46%", textAlign: "center", marginRight: "15px"},
  custDetails6: {display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", marginTop: "10px", fontSize: "10px"},
  custDetails7: {width: "21%", textAlign: "center"},
  custDetails8: {width: "24%", textAlign: "center", marginLeft: "20px"},
  custDetails9: {display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", marginTop: "4px", fontSize: "10px"},

  pricingDetails1: {
    display: "flex",
    flexDirection: "row",
    gap: "3px",
    alignItems: "center",
    fontSize: "10px",
    marginTop: "40px",
  },
  pricingDetails2: {
    textAlign: "center",
    fontSize: "7px",
    padding: "2px 1px",
    height: "20px",
    width: "50px",
  },
  pricingDetails3: {
    display: "flex",
    flexDirection: "row",
    gap: "3px",
    alignItems: "center",
    fontSize: "10px",
    marginTop: "3px",
    padding: "0 30px",
  },
  pricingDetails4: { textAlign: "center", width: "50px" },
  
  font7: {fontSize:"7px"},
  font8: {fontSize:"8px"},
  footer1: {position: "absolute", bottom: "30px", display: "flex", flexDirection: "column", gap:"10px"},
  footer2: {width: "50px" ,padding: "1px 3px", marginBottom: "2px"},
  footer3: {fontSize:"8px", textAlign: "center", marginTop: "20px", alignSelf:"center", marginLeft: "100px"},


  customer1: {display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", fontSize: "10px", marginTop: "20px"},
  customer2: {width: "46%", textAlign: "center", marginRight: "15px"},
  customer3: {width: "25%", textAlign: "center"},
  customer4: {display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", marginTop: "4px", fontSize: "10px"},
  customer5: {width: "20.5%", textAlign: "center"},
  customer6: {width: "50.5%", textAlign: "center", marginLeft: "15px"},
  customer7: {display: "flex", flexDirection: "row", alignItems: "center", fontSize: "10px", marginTop: "34px"},
  customer8: {width: "11%", height: "23px", paddingHorizontal: "2px", textAlign: "center"},
  customer9:{width: "11%", height: "23px", paddingHorizontal: "2px", textAlign: "center", marginRight: "10px"},
  customer10: {width: "12.5%", height: "23px", paddingHorizontal: "2px", textAlign: "center", marginLeft: "20px"},
  customer11: {width: "12.5%", height: "23px", paddingHorizontal: "2px", textAlign: "center"},
  customer12: {display: "flex", flexDirection: "row", alignItems: "center", marginTop: "4px", fontSize: "10px"},
  customer13: {display: "flex", flexDirection: "row", alignItems: "center", fontSize: "10px", marginTop: "20px"},
  customer14: {width: "44%", padding: "2px", fontSize: '9px'},
  customer15: {width: "50%", padding: "2px", marginLeft: "30px", fontSize: '9px'},
  customer16: {width: "44%", textAlign: "right"},
  customer17: {width: "55%", textAlign: "right"},
  customer18: {width: "21%"},
  customer19: {width: "23%", textAlign: "right"},


  disclaimer1: {fontSize:"7px", position: "absolute", bottom: "50px"},
  disclaimer2: {marginBottom: "2px"},
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
       
      <Text style={[styles.page, styles.toText]}>To: </Text>

      <CustomerDetails page1={page1} styles={styles}/>

      <Text style={[styles.findBelowText, styles.page]}>Below please find pricing details that apply for above mentioned quote</Text>

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
