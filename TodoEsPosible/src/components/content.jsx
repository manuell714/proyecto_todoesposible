import React from "react";

const Content = () => {
  return (
    <main style={styles.main}>
      <h1>Bienvenido a Todo es Posible</h1>
      <p>
        Esta aplicación fue desarrollada por el siguiente equipo:
      </p>

      <section style={styles.teamSection}>
        <h2>Equipo de Desarrollo</h2>
        <ul style={styles.teamList}>
          <li style={styles.teamMember}>Elizabeth Gutiérrez Olvera</li>
          <li style={styles.teamMember}>Jassiel Noe Manuel Martinez </li>
        </ul>
      </section>
    </main>
  );
};

const styles = {
  main: {
    padding: "20px",
    maxWidth: "900px",
    margin: "80px auto 100px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
    textAlign: "center",
  },
  teamSection: {
    marginTop: "40px",
    backgroundColor: "#f0f0f0",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  teamList: {
    listStyleType: "none",
    padding: 0,
    marginTop: "10px",
  },
  teamMember: {
    fontSize: "1.2rem",
    margin: "10px 0",
    fontWeight: "600",
    color: "#007BFF",
  },
};

export default Content;
