import PdfDialog from "./projects/PDFViewer/PDFViewer";

export default function App() {
  return (
    <div>
      <PdfDialog
        pdfUrl="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf
"
        onClose={() => {}}
      />
    </div>
  );
}
