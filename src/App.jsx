import React, { useState } from "react";
import Favicon from "react-favicon";

const App = () => {
  // Initialize the favicon URL state
  // with the default favicon
  const [faviconUrl, setFaviconUrl] = useState(
    "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_favicon.png"
  );

  // Function to toggle the favicon
  const toggleFavicon = () => {
    // Check the current favicon and
    // toggle to the opposite
    setFaviconUrl((prevUrl) =>
      prevUrl ===
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_favicon.png"
        ? // Change to your second favicon file
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200X200.png"
        : // Change to your first favicon file
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_favicon.png"
    );
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#eee",
    color: "black",
    fontFamily: "Arial, sans-serif",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "20px",
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "10px",
    textTransform: "uppercase",
    color: "green",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    maxWidth: "500px",
    lineHeight: "1.5",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#0074D9",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  };

  return (
    <div style={containerStyle} className="App">
      <Favicon url={faviconUrl} />
      <header style={headerStyle}>
        <h1 style={headingStyle}>Welcome to GeeksforGeeks</h1>
        <p style={paragraphStyle}>
          Click the button below to change the favicon.
        </p>
        <button onClick={toggleFavicon} style={buttonStyle}>
          Toggle Favicon
        </button>
      </header>
    </div>
  );
};

export default App;
