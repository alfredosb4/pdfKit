import PDFDocument  from 'pdfkit-table';

export function buildPDF( dataCallback, endCallback ){
    const doc = new PDFDocument();

    doc.on("data", dataCallback);
    doc.on("end", endCallback);

    doc.text("Texto");


    const tableArray = {
        headers: ["cveFiado", "Razon Social", "Trend"],
        rows: [
          ["Switzerland", "12%", "+1.12%"],
          ["France", "67%", "-0.98%"],
          ["England", "33%", "+4.44%"],
        ],
      };
    doc.table( tableArray, { width: 300 });

    doc.end();
}