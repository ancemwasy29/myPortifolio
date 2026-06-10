import pdfFile from "./assets/manual.pdf";

function downloadPDF() {
  const link = document.createElement("a");
  link.href = pdfFile;
  link.download = "manual.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function App() {
  return (
    <button onClick={downloadPDF}>
      Download PDF
    </button>
  );
}