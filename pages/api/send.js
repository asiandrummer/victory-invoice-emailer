// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import mammoth from "mammoth";

// import html2canvas from 'html2canvas'
// import jsPdf from 'jspdf'

import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const { date, invoiceNumber } = req.body;
  // Load the docx file as binary content
  const content = fs.readFileSync(
    path.resolve("./public", "template.docx"),
    "binary"
  );

  const zip = new PizZip(content);

  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  // Render the document
  doc.render({
    date,
    invoice_number: invoiceNumber,
  });

  const buf = doc.getZip().generate({
    type: "nodebuffer",
    // compression: DEFLATE adds a compression step.
    // For a 50MB output document, expect 500ms additional CPU time
    compression: "DEFLATE",
  });

  const outputPath = path.resolve(__dirname, "output.docx");
  const outputPDFPath = path.resolve(__dirname, "output.pdf");

  // buf is a nodejs Buffer, you can either write it to a
  // file or res.send it with express for example.
  fs.writeFileSync(outputPath, buf);

  // Testing docx -> html -> PDF creation but honestly we won't need this if we could just build a whole app around it
  // const htmlNode = await mammoth.convertToHtml({ path: outputPath });
  // console.log(htmlNode);

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  const testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  let result = null;

  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Hyo Test Account 👻" <foo@example.com>', // sender address
      to: "Hyo Jeong <hyo@jeong.com>", // list of receivers
      subject: "John Doe " + date + " Invoice", // Subject line
      text: "Testing auto invoice emailing system", // plain text body
      attachments: [{ path: path.resolve(__dirname, "output.docx") }],
    });
    result = nodemailer.getTestMessageUrl(info);
  } catch (e) {
    console.error(e);
  }

  res.status(200).json({ url: result });
}
