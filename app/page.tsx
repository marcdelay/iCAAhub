import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full mx-auto min-h-screen justify-start bg-base-200 items-center">
      <div className="w-full max-w-[1935px] mx-auto min-h-screen justify-start bg-base-200 items-center">
        <div className="flex flex-row justify-start bg-base-200 items-center">
          <div className="grid grid-rows-1 gap-4 w-full p-4">
            <div className="card card-side bg-base-100 shadow-sm">
              <figure className="flex justify-center items-center">
                <div className="avatar-container flex justify-center items-center">
                  <div className="avatar w-3/4 max-w-[200px]">
                    <div className="ring-primary ring-offset-base-secondary rounded-full ring ring-offset-2 w-50 h-100%">
                      <Image
                        src="/JV_ByAnahiSoto.jpg"
                        alt="Photo of JV by Anahi Soto"
                        className="rounded-full object-cover"
                        layout="fill" // Ensures the image fills the container
                      />
                    </div>
                  </div>
                </div>
              </figure>
              <div className="card-body">
                <p className="card-title text-4xl">Jonathan Ramirez</p>
                <p className="card-body">Data Engineer Project Manager | Expert in Generative AI & Agile Project Management | Skilled in JavaScript, React, Node.js, PostgreSQL, MongoDB</p>
              </div>
            </div>

            <div className="card card-border bg-warning shadow-md m-4 p-4">
              <h1 className="text-4xl text-warning-content font-bold mb-2">
                Card with Border
              </h1>
              <p className="text-error-content text-2xl">
                This card uses the custom card-border class.
              </p>
            </div>

            <div className="card card-dash bg-base-200 shadow-md m-4 p-4">
              <h1 className="text-2xl font-bold mb-2">
                Card with Dashed Border
              </h1>
              <p>This card uses the custom card-dash class.</p>
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col justify-start bg-base-200 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full p-4">
            {/* First Column */}
            <div className="grid grid-cols-1">
              <div className="card card-border bg-base-100 shadow-md m-4 p-4">
                <h1 className="text-2xl card-title font-bold mb-2">Welcome</h1>
                <p className="card-body">
                  I, Jonathan Ramirez, a proud Cycle 53 Graduate of i.c.stars,
                  welcome you to my Portfolio-Classroom-Project. I am excited to
                  share my journey with you and showcase my skills and projects.
                </p>
              </div>
              <div className="card bg-base-100 shadow-md m-4 p-4">
                <h1 className="text-2xl card-title font-bold mb-2">Welcome</h1>
                <p>
                  I, Jonathan Ramirez, a proud Cycle 53 Graduate of i.c.stars,
                  welcome you to my Portfolio-Classroom-Project. I am excited to
                  share my journey with you and showcase my skills and projects.
                </p>
              </div>
              <div className="card card-border bg-base-100 shadow-md m-4 p-4">
                <h1 className="text-2xl font-bold mb-2">Welcome</h1>
                <p>
                  I, Jonathan Ramirez, a proud Cycle 53 Graduate of i.c.stars,
                  welcome you to my Portfolio-Classroom-Project. I am excited to
                  share my journey with you and showcase my skills and projects.
                </p>
              </div>
            </div>
            {/* Second Column */}
            <div className="grid grid-cols-1">
              <div className="card bg-accent card-dash shadow-lg m-4 p-4">
                <div className="text-2xl font-bold mb-2">About i.c.stars</div>
                <p>
                  Through i.c.stars, you’ll get the training, tools, and
                  experience to land great jobs in tech. Watch the video to
                  learn why our graduates chose i.c.stars and how the program
                  has helped them build successful careers and positively
                  influence their communities.
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
                  learn why our graduates chose i.c.stars and how the program
                  has helped them build successful careers and positively
                  influence their communities.
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
                  learn why our graduates chose i.c.stars and how the program
                  has helped them build successful careers and positively
                  influence their communities.
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
    </main>
  );
}
