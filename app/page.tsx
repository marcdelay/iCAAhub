import React from "react";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen flex flex-col justify-center items-center">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/triipyPortriat.png)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              I, Jonathan Ramirez, a proud Cycle 53 Graduate of i.c.stars
              welcome you to my Portfolio-Classroom-Project. I am excited to
              share my journey with you and showcase my skills and projects.
            </p>
            <p className="mb-5">
              <h1 className="text-3xl font-bold">
               Team Code Mages
              </h1>
              <h2 className="mb-5">
              <a href="https://www.linkedin.com/in/bhatianehaa/" target="_blank" rel="noopener noreferrer">Neha Bhatia</a>, Flynn Richardson, and myself     
              </h2>
              Code Your Dreams threw an extended Hackathon with three teams and three different platforms that will eventualy become their CYD Hub. Code Mages developed a classroom platform where a teacher can view homework submissions, grade them, and provide feedback to students. Students can view their grades and feedback. The platform also allows students to submit homework and view their grades. The platform is built using Next.js with typescript, Prisma, and PostgreSQL hosted on AWS RDS and S3 buckets for submissions.
            </p>
            <p className="mb-5">
              Please feel free to explore my site and reach out to me if you
              have any questions or would like to connect. I look forward to
              hearing from you!
            </p>
           <Link className="btn btn-accent" href="/classroom">
              <Button>Enter Classroom</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
