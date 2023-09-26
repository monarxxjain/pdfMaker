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

export { page1, page2, notes, tableRows, tableColumns }