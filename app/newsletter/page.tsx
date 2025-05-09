import React from "react";

const page = () => {
  return (
    <div className="w-full mx-auto min-h-screen bg-base-200">
      <div className="card card-border min-h-screen col-span-3 xl:col-span-2 bg-warning m-4 p-4">
        <iframe
          loading="lazy"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            border: "none",
            padding: 5,
            margin: 0,
            borderRadius: "28px",
          }}
          src="https://www.canva.com/design/DAGmCQi009M/44e8EJwru8vC3_O72ZwMyQ/view?embed"
          allowFullScreen={true}
          allow="fullscreen"
        ></iframe>
        <a
          href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGmCQi009M&#x2F;44e8EJwru8vC3_O72ZwMyQ&#x2F;view?utm_content=DAGmCQi009M&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
          target="_blank"
          rel="noopener"
        >
          iCAA Newsletter MAY issue 9
        </a>{" "}
        by iCAA Exectutive Board, iCAA Secretary -Editor & Chief
      </div>
    </div>
  );
};

export default page;
