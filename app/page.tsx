import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full mx-auto min-h-screen bg-base-200">
      <div className="w-full max-w-[1935px] mx-auto min-h-screen bg-base-200">
        <div className="flex flex-col sm:flex-row justify-around bg-base-200">
          <div className="grid grid-rows-1 max-w-[875px] justify-around gap-4 w-full p-4">



            <figure className="diff aspect-16/9" tabIndex={0}>
              <div className="diff-item-1" role="img">
                <div className="bg-info text-info-content grid place-content-center text-9xl font-black">
               <div>
                <span className="text-success-content">*</span>
                <span> | iCAA</span>
                </div>
                </div>
              </div>
              <div className="diff-item-2" role="img" tabIndex={0}>
                <div className="bg-secondary grid place-content-center text-9xl font-black text-secondary-content">
                  <div>
                <span className="text-success-content">*</span> | iCAA
                </div>
                </div>
              </div>
              <div className="diff-resizer"></div>
            </figure>




            <div className="card card-side max-h-125 card-border bg-base-100 shadow-md m-4 p-4">
              {/* 
              
              As a side to this card, I want to add an image or icon of an * i.c.stars logo or something similar.
              
              <figure className="flex justify-center items-center">
                <div className="avatar-container flex justify-center items-center">
                  <div className="avatar w-3/4 max-w-[200px]">
                    <div className="ring-primary ring-offset-base-secondary rounded-full ring ring-offset-2 w-50 h-100%">
                      <Image
                        *** Here I want a large asteric ***
                      />
                    </div>
                  </div>
                </div>
              </figure> 
              
              */}

              <div className="card-body">
                <p className="card-title text-5xl">
                  *|
                  <strong>iCAA</strong>
                </p>

                <p className="card-body text-3xl text-center">
                  Where the i.c.stars Alumni and Residents come together to
                  learn, grow, and share!
                </p>
              </div>
            </div>

            <div className="card card-border bg-error shadow-md m-4 p-4">
              <div className="flex justify-around p-5 items-center">
                <h1 className="text-3xl text-center text-warning-content font-bold mb-2">
                  Whats new?
                </h1>
                <Image
                  src="/newspaper.svg"
                  alt="Newspaper"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex justify-around p-5 items-center">
                <p className="text-error-content text-center p-3 md:pb-5 md:text-3xl">
                  Stay in-touch with the iCAA events and find opportunities to
                  take advantage of, or help-out with.
                </p>
                <p className="text-error-content text-center md:text-2xl">
                  <a
                    href="https://www.icstars.org/program/"
                    target="_blank"
                    className="btn btn-secondary md:btn-lg btn-outline"
                  >
                    Newsletter
                  </a>
                </p>
              </div>
            </div>

            <div className="card card-dash bg-base-200 shadow-md m-4 p-4">
              <h1 className="text-2xl font-bold mb-2">
                Card with Dashed Border
              </h1>
              <p>This card uses the custom card-dash class.</p>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="grid grid-rows-1 max-w-[875px] justify-around gap-4 w-full p-4">
            <div className="p-4 flex flex-col justify-start bg-base-200 items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full p-4">
                {/* First Column */}
                <div className="grid grid-cols-1">
                  <div className="card card-border bg-base-100 shadow-md m-4 p-4">
                    <h1 className="text-2xl card-title font-bold mb-2">
                      Welcome
                    </h1>
                    <p className="card-body">
                      I, Jonathan Ramirez, a proud Cycle 53 Graduate of
                      i.c.stars, welcome you to my Portfolio-Classroom-Project.
                      I am excited to share my journey with you and showcase my
                      skills and projects.
                    </p>
                  </div>
                  <div className="card bg-base-100 shadow-md m-4 p-4">
                    <h1 className="text-2xl card-title font-bold mb-2">
                      Welcome
                    </h1>
                    <p>
                      I, Jonathan Ramirez, a proud Cycle 53 Graduate of
                      i.c.stars, welcome you to my Portfolio-Classroom-Project.
                      I am excited to share my journey with you and showcase my
                      skills and projects.
                    </p>
                  </div>
                  <div className="card card-border bg-base-100 shadow-md m-4 p-4">
                    <h1 className="text-2xl font-bold mb-2">Welcome</h1>
                    <p>
                      I, Jonathan Ramirez, a proud Cycle 53 Graduate of
                      i.c.stars, welcome you to my Portfolio-Classroom-Project.
                      I am excited to share my journey with you and showcase my
                      skills and projects.
                    </p>
                  </div>
                </div>
                {/* Second Column */}
                <div className="grid grid-cols-1">
                  <div className="card bg-accent card-dash shadow-lg m-4 p-4">
                    <div className="text-2xl font-bold mb-2">
                      About i.c.stars
                    </div>
                    <p>
                      Through i.c.stars, you’ll get the training, tools, and
                      experience to land great jobs in tech. Watch the video to
                      learn why our graduates chose i.c.stars and how the
                      program has helped them build successful careers and
                      positively influence their communities.
                    </p>
                    <div className="card-actions justify-end">
                      <a
                        href="https://www.icstars.org/program/"
                        target="_blank"
                        className="btn btn-secondary btn-outline"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>

                  <div className="card bg-info shadow-md m-4 p-4">
                    <h1 className="text-2xl text-success font-bold mb-2">
                      About i.c.stars
                    </h1>
                    <p>
                      Through i.c.stars, you’ll get the training, tools, and
                      experience to land great jobs in tech. Watch the video to
                      learn why our graduates chose i.c.stars and how the
                      program has helped them build successful careers and
                      positively influence their communities.
                    </p>
                    <div className="card-actions justify-end">
                      <a
                        href="https://www.icstars.org/program/"
                        target="_blank"
                        className="btn btn-secondary btn-outline"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                {/* Third Column */}
                <div className="grid grid-cols-1">
                  <div className="card bg-info shadow-md m-4 p-4">
                    <h1 className="text-2xl font-bold mb-2">About i.c.stars</h1>
                    <p>
                      Through i.c.stars, you’ll get the training, tools, and
                      experience to land great jobs in tech. Watch the video to
                      learn why our graduates chose i.c.stars and how the
                      program has helped them build successful careers and
                      positively influence their communities.
                    </p>
                    <div className="card-actions justify-end">
                      <a
                        href="https://www.icstars.org/program/"
                        target="_blank"
                        className="btn btn-secondary btn-outline"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>

                  <div className="card bg-base-100 shadow-md m-4 p-4">
                    <h1 className="text-2xl font-bold mb-2">Team Code Mages</h1>
                    <p>
                      <a
                        href="https://www.linkedin.com/in/bhatianehaa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        Neha Bhatia
                      </a>
                      , Flynn Richardson, and myself.
                    </p>
                  </div>
                </div>
              </div>
              {/* Footer Section */}
              <div className="w-full flex justify-center mt-8">
                <Link className="btn btn-secondary" href="/classroom">
                  Enter classroom
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
