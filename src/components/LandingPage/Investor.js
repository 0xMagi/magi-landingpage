import React, { useState } from "react";
import emailjs from "emailjs-com";
import Countdown from "react-countdown";
import Modal from "react-modal";

const Investor = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCooldown, setShowCooldown] = useState(false);

  // Configurações do Modal
  Modal.setAppElement("#root");

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const templateParams = {
      from_email: email,
      message: message,
      to_email: "contact@magi.best",
    };

    emailjs
      .send("service_heozram", "template_wgadw3q", templateParams, "Uh8e_5pCyVmom-LUK")
      .then(() => {
        setShowModal(true);
        setShowCooldown(true);
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        alert("Failed to send the email. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
        setFormVisible(false);
      });
  };

  const toggleFormVisibility = () => {
    if (!showCooldown) setFormVisible(!formVisible);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCooldownComplete = () => {
    setShowCooldown(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}>
        Investors and Partners
      </h2>

      <button
        onClick={toggleFormVisibility}
        style={{
          backgroundColor: "#fbb519",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "8px",
          fontSize: "16px",
          border: "none",
          cursor: "pointer",
        }}
        disabled={showCooldown}
      >
        {formVisible ? "Close Form" : "Become an Investor"}
      </button>

      {showCooldown && (
        <p style={{ marginTop: "10px", color: "#888", fontSize: "14px" }}>
          Please wait{" "}
          <Countdown
            date={Date.now() + 60000}
            onComplete={handleCooldownComplete}
            renderer={({ seconds }) => <span>{seconds} seconds</span>}
          />{" "}
          before sending another message.
        </p>
      )}

      {formVisible && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            maxWidth: "400px",
            margin: "20px auto",
            backgroundColor: "#fff",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "16px",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <textarea
                placeholder="Write your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="4"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "16px",
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: isSubmitting ? "#ccc" : "#fbb519",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "8px",
                fontSize: "16px",
                border: "none",
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Request"}
            </button>
          </form>
        </div>
      )}

      {/* Modal de Sucesso */}
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center",
            maxWidth: "400px",
          },
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>Success!</h2>
        <p>Your request has been sent successfully.</p>
        <button
          onClick={closeModal}
          style={{
            marginTop: "15px",
            backgroundColor: "#fbb519",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "16px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Investor;
