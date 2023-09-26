import PDFFile from "./PDFComponents/PDFFile";
import { PDFViewer } from "@react-pdf/renderer";
import React, { Component, Fragment } from "react";

function App() {
  const data = {
    id: "5df3180a09ea16dc4b95f910",
    items: [
      {
        sr: 1,
        desc: "desc1",
        xyz: 5,
      },
      {
        sr: 2,
        desc: "desc2",
        xyz: 6,
      },
    ],
  };
  return (
    <Fragment>
      <PDFViewer style={{width: "100vmax", height: "100vmin"}}>
        <PDFFile data={data}/>
      </PDFViewer>
    </Fragment>
  );
}

export default App;
