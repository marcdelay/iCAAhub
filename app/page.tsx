// If you want to get better at flexbox and have fun check this link out: https://flexboxfroggy.com/ also for more coding games: https://codepip.com/

import React from "react";
// import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full mx-auto min-h-screen bg-base-200">
      <div className="flex flex-col flex-wrap items-center justify-around">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full py-4">
          <div className="sr-only lg:not-sr-only flex justify-center lg:col-span-3">
            <figure
              className="max-h-[500px] md:text-9xl diff py-3 aspect-16/9"
              tabIndex={0}
            >
              <div className="diff-item-1" role="img">
                <div className="bg-info text-info-content grid place-content-center font-black">
                  <div>
                    <span className="text-success-content">*</span>

                    <span> | iCAA</span>
                  </div>
                </div>
              </div>
              <div className="diff-item-2" role="img" tabIndex={0}>
                <div className="bg-secondary grid place-content-center font-black text-secondary-content">
                  <div>
                    <span className="text-success-content">*</span> | iCAA
                  </div>
                </div>
              </div>
              <div className="diff-resizer"></div>
            </figure>
          </div>

          <div className="col-span-3 xl:col-span-1 card bg-info border-4 m-4">
            <div className="card-title pl-4 join">
              <p className="join-item">*</p>
              <p className="join-item text-secondary">
                <strong> | iCAA</strong>
              </p>
            </div>

            <p className="card-body text-center lg:text-start">
              Where the i.c.stars Alumni and Residents come together to learn,
              grow, and share!
            </p>
          </div>

          <div className="card card-border col-span-3 xl:col-span-2 bg-warning m-4 p-4">


           
              
              <h1 className="card-title justify-center text-warning-content font-bold">
                Whats new?
              </h1>

             
                <p className="text-info-content card-body text-center p-3">
                  Stay in-touch with the iCAA events and find opportunities to
                  take advantage of, or help-out with.
                </p>

                <p className="text-center">
      
                  <a
                    href="#"
                    target="_blank"
                    className="btn btn-secondary col-span-1 m-3 md:btn-lg btn-outline"
                  >
                    Newsletter
                  </a>


                </p>
            
          </div>

          <div className="card border text-info-content col-span-3 bg-info image-full xl:col-span-1 mx-4 shadow-md">
          <figure>
  <Image
    src="/CodeMages.jpg"
    alt="Team Code Mages"
    width={500} // Set an appropriate width
    height={300} // Set an appropriate height
  />
</figure>
<div className="card-body m-2 p-2">
            <h1 className="card-title mx-3 font-bold">Team Code Mages</h1>
            <p className="text-info-content card-body">
              This project was created by a team of talented individuals who are
              passionate about coding and technology. <br />
              The team consists of Jonathan Ramirez, who is the lead developer,
              and other members including <br />
              <span>
                Lead Developer:
                <a
                  href="https://www.linkedin.com/in/bhatianehaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-success-content underline"
                >
                   Neha Bhatia
                </a>
              </span>
              Developer: Flynn Richardson.
            </p></div>
          </div>

          <div className="card col-span-3 xl:col-span-1 card-dash bg-info m-4 p-4 shadow-md">
            <h1 className="font-bold card-title m-2 p-2">
              Card with Dashed Border
            </h1>
            <p className="card-body m-2 p-2">
              This card uses the custom card-dash class.
            </p>
          </div>

          <div className="card border col-span-3 xl:col-span-1 bg-base-100 shadow-md m-4 p-4">
            <h1 className="card-title font-bold mb-2">Welcome 1</h1>
            <p className="card-body">
              I, Jonathan Ramirez, a proud Cycle 53 Graduate of i.c.stars,
              welcome you to my Portfolio-Classroom-Project. I am excited to
              share my journey with you and showcase my skills and projects.
            </p>
          </div>

          <div className="card bg-base-100 shadow-md col-span-3 xl:col-span-1 m-4 p-4">
            <h1 className="card-title font-bold mb-2">Welcome 2</h1>
            <p className="card-body">
              I, Jonathan Ramirez, a proud Cycle 53 Graduate of i.c.stars,
              welcome you to my Portfolio-Classroom-Project. I am excited to
              share my journey with you and showcase my skills and projects.
            </p>
          </div>

          <div className="card card-border text-info-content bg-info shadow-md col-span-3 xl:col-span-1 m-4 p-4">
            <h1 className="font-bold mb-2">Welcome 3</h1>
            <p className="card-body">
              I, Jonathan Ramirez, a proud Cycle 53 Graduate of i.c.stars,
              welcome you to my Portfolio-Classroom-Project. I am excited to
              share my journey with you and showcase my skills and projects.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
