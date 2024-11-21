import React, { useState } from 'react'
import QRCode from "react-qr-code"
const QrCode = () => {
  const [name, setName] = useState("")
  const[ qrCode, setQrcode] = useState("");
  function handleQrCode(){
    setQrcode(name);
    setName("");
  }
  return (
    <div>
      <label htmlFor="name-field">Enter name</label>
      <input
        type="text"
        id="name-field"
        className="name-field"
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="enter your name"
        value={name}
      />
      <button
        onClick={() => {
          handleQrCode();
        }}
      >
        Generate
      </button>
      {qrCode && <QRCode value={qrCode}></QRCode>}
    </div>
  );
}

export default QrCode