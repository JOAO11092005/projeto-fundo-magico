import React, { useState } from "react";
import Loading from "./Loading.css";

function App() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000); // simula carregamento
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: "linear-gradient(135deg, black, blueviolet)",
        color: "white",
        border: "none",
        borderRadius: "10px",
        padding: "12px 24px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        transition: "all 0.3s ease",
      }}
    >
      {loading ? (
        <>
          <Loading />
          <span>Gerando...</span>
        </>
      ) : (
        "Gerar Background Mágico"
      )}
    </button>
  );
}

export default App;
