import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { ListOfReports } from "../components";

export default function PrintComponent() {
  let componentRef = useRef();
  return (
    <>
      <div className="btn white" style={{ marginRight: 20 }}>
        <ReactToPrint
          trigger={() => <span>Print Report</span>}
          content={() => componentRef}
        />
        <div style={{ display: "none" }}>
          <ListOfReports ref={(el) => (componentRef = el)} />
        </div>
      </div>
    </>
  );
}
