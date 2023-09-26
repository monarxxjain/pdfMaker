import React, { Fragment } from 'react'
import { Page, Text, Image, View, Document, StyleSheet } from '@react-pdf/renderer'
import Header from './common/Header';
import CustomerDetails from './intoductionPage/CustomerDetails';
import Footer from './intoductionPage/Footer';
import PricingDetails from './intoductionPage/PricingDetails';
import Customer from './common/Customer';
import Disclaimer from './common/Disclaimer';
import { page1, page2, notes, tableRows, tableColumns } from '../Data/data';

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

const PDFFile = () => (
  <Document>
    
    <Page>
      <Header page1={page1} styles={styles}/>
       
      <Text style={[styles.page, styles.toText]}>To: </Text>

      <CustomerDetails page1={page1} styles={styles}/>

      <Text style={[styles.findBelowText, styles.page]}>Below please find pricing details that apply for above mentioned quote</Text>

      <PricingDetails styles={styles} tableColumns={tableColumns} tableRows={tableRows} />

      <Footer page1={page1} styles={styles} notes={notes} />
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
