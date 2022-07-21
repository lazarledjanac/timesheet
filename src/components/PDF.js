import jsPDF from "jspdf";
import "jspdf-autotable";
import { useSelector } from "react-redux";

const PDF = () => {
  const reportList = useSelector((state) => state.reports.value);
  const doc = new jsPDF();

  const tableColumn = [
    "Date",
    "Team member",
    "Client",
    "Projects",
    "Categories",
    "Description",
    "Time",
  ];
  const tableRows = [];

  reportList.forEach((report) => {
    const reportData = [
      report.date,
      report.member,
      report.client,
      report.project,
      report.category,
      report.description,
      report.time,
    ];
    tableRows.push(reportData);
  });

  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  doc.text("Ispis izvestaja.", 14, 15);
  doc.save(`report_${Math.random()}.pdf`);
};
export default PDF;
