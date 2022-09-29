import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { useSelector } from "react-redux";

function ExportCSV({ csvData, fileName }) {
  const reportList = useSelector((state) => state.reports.value);
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (reportList, fileName) => {
    const ws = XLSX.utils.json_to_sheet(reportList);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <a
      className="btn white"
      variant="warning"
      onClick={(e) => exportToCSV(reportList, fileName)}
    >
      <span>Export to excel</span>
    </a>
    //   <a className="btn white">
    //         <span>Export to excel</span>
    //       </a>
  );
}
export default ExportCSV;
