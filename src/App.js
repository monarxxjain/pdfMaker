import PDFFile from "./PDFComponents/PDFFile";
import { PDFViewer } from "@react-pdf/renderer";
import React, { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <PDFViewer style={{width: "100vmax", height: "100vmin"}}>
        <PDFFile/>
      </PDFViewer>
    </Fragment>
  );
}

export default App;
