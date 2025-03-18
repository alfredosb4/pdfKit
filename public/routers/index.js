import { Router } from "express";
import { buildPDF } from '../lib/pdfkit.js';

const router = Router();

router.get("/invoice", (req,res) =>{
    //res.send('invoice')

    const stream = res.writeHead( 200, {
        "content-type": "appication/pdf",
        "content-disposition": "attachment; filename=invoice.pdf"
    })
    buildPDF( 
        (data) => stream.write( data ),
        (data) => stream.end()
    );
});

export default router;