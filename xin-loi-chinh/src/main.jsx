import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const NO_PHRASES = [
  "Không đâu 💔",
  "Chinh ơi, đừng giận anh nữa mà... 🥺",
  "Anh biết lỗi với Chinh rồi! 💕",
  "Một cơ hội cuối thôi mà Chinh ơi?",
  "Đừng làm tim anh tan vỡ, Chinh nhé :(",
  "Chinh suy nghĩ lại đi mà...",
  "Chinh mà cứ thế này là anh khóc thật đấy!",
];

function App() {
  const [noClicks, setNoClicks] = useState(0);
  const [isForgiven, setIsForgiven] = useState(false);
  const yesButtonSize = (noClicks * 20) + 16;

  const firstImg = "https://media.tenor.com/VIChDQ6ejRQAAAAj/jumping-bear-hearts-no-png.gif";
  const secondImg = "https://media.tenor.com/f1xnRxTRxLAAAAAj/bears-with-kisses-bg.gif";

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px", backgroundColor: "#fff0f3" }}>
      {!isForgiven ? (
        <>
          <img src={firstImg} style={{ width: "200px" }} />
          <h1>Chinh ơi đừng giận anh nữa mà 💘</h1>
          <div>
            <button onClick={() => setIsForgiven(true)} style={{ fontSize: `${yesButtonSize}px`, margin: "10px", padding: "10px 20px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Hết giận rùi
            </button>
            <button onClick={() => setNoClicks(noClicks + 1)} style={{ fontSize: "16px", margin: "10px", padding: "10px 20px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              {noClicks === 0 ? "Không" : NO_PHRASES[Math.min(noClicks - 1, NO_PHRASES.length - 1)]}
            </button>
          </div>
        </>
      ) : (
        <>
          <img src={secondImg} style={{ width: "200px" }} />
          <div style={{ fontSize: "40px", color: "#ff4d6d", fontWeight: "bold", marginTop: "20px" }}>
            Yêu Chinh nhất trên đời! 💖🎉
          </div>
        </>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);