import React from "react";

const Newsletter = () => {
  return (
    <div className="max-h-screen overflow-y-auto w-full mx-auto bg-base-200">
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh", // Set height to full viewport height
          boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
          marginTop: "1.6em",
          marginBottom: "0.9em",
          overflow: "hidden",
          borderRadius: "8px",
          willChange: "transform",
        }}
      >
        <iframe
          loading="lazy"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%", // Ensure iframe fills the parent container
            top: 0,
            left: 0,
            border: "none",
            padding: 0,
            margin: 0,
          }}
          src="https://www.canva.com/design/DAGjIo3HOVU/WXvKfJ-j9OQ40pRO3QEC7g/view?embed"
          allowFullScreen={true}
          allow="fullscreen"
        ></iframe>
      </div>
      <a
        href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGjIo3HOVU&#x2F;WXvKfJ-j9OQ40pRO3QEC7g&#x2F;view?utm_content=DAGjIo3HOVU&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
        target="_blank"
        rel="noopener"
      >
        iCAA Newsletter APRIL issue 6
      </a>{" "}
      by Jonathan Ramirez
    </div>
  );
};

export default Newsletter;