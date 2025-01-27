import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const Investor = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showCooldown, setShowCooldown] = useState(false);

  // Configuração do modal
  Modal.setAppElement("#root");

  // Gera um valor aleatório para o captcha
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const randomCaptcha = Math.random().toString(36).substring(2, 8).toUpperCase();
    setCaptchaValue(randomCaptcha);
    setCaptchaInput("");
    setCaptchaVerified(false);
  };

  const verifyCaptcha = () => {
    if (captchaInput === captchaValue) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Please solve the CAPTCHA correctly.");
      return;
    }

    setIsSubmitting(true);

    // Simular envio de e-mail
    setTimeout(() => {
      setShowModal(true);
      setShowCooldown(true);
      setEmail("");
      setMessage("");
      setCaptchaVerified(false);
      generateCaptcha(); // Gera um novo captcha após envio
      setIsSubmitting(false);
      setFormVisible(false);

      // Cooldown de 60 segundos
      setTimeout(() => {
        setShowCooldown(false);
      }, 60000);
    }, 2000);
  };

  const toggleFormVisibility = () => {
    if (!showCooldown) setFormVisible(!formVisible);
  };

  const closeModal = () => {
    setShowModal(false);
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
          Please wait before sending another message.
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
            <div style={{ marginBottom: "15px", textAlign: "center" }}>
              <p>
                <strong>Solve the CAPTCHA:</strong>{" "}
                <span
                  style={{
                    display: "inline-block",
                    padding: "5px 10px",
                    backgroundColor: "#f3f3f3",
                    borderRadius: "4px",
                    fontWeight: "bold",
                  }}
                >
                  {captchaValue}
                </span>
              </p>
              <input
                type="text"
                placeholder="Enter CAPTCHA"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                onBlur={verifyCaptcha}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "16px",
                }}
                required
              />
              {!captchaVerified && captchaInput && (
                <p style={{ color: "red", fontSize: "14px" }}>
                  CAPTCHA is incorrect.
                </p>
              )}
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
              disabled={isSubmitting || !captchaVerified}
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
