import React, { useState } from "react";
import Modal from "./components/Modal/Modal";


export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        style={{ position: "relative", zIndex: "1" }}
        onClick={() => console.log("clicked")}
      >
        <button onClick={() => setIsOpen(true)}>Modal Open</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Modal tex ------------------
        </Modal>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "red",
          padding: "10px",
          marginTop:'30px',
        }}
      >
        Other Content--
      </div>
    </>
  );
}
