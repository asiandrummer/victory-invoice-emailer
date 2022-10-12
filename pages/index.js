import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState(new Date());
  const [invoiceNumber, setInvoiceNumber] = useState(null);
  const [testURL, setTestURL] = useState(null);

  const handleDateChange = (e) => setDate(e.target.value);
  const handleInvoiceNumberChange = (e) => setInvoiceNumber(e.target.value);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const endpoint = "/api/send";
    const data = {
      date: new Date(date).toLocaleDateString("en-US"),
      invoiceNumber,
    };

    const JSONdata = JSON.stringify(data);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();

    if (result != null) {
      setTestURL(result.url);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Date: <input type="text" name="date" onChange={handleDateChange} />
        </div>
        <div>
          Invoice #:{" "}
          <input
            type="text"
            name="invoice_number"
            onChange={handleInvoiceNumberChange}
          />
        </div>
        <input type="submit" value="Send" />
      </form>
      <div>
        TestURL: <a href={testURL}>{testURL}</a>
      </div>
    </div>
  );
}
