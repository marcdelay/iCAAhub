import React from "react";
// import Link from "next/link";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <main>
      <div className="w-full mx-auto min-h-screen bg-base-200">
        {/* container */}
        <Header title="Welcome to iCAA" subtitle="Alumni hub" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full py-4">
          {/* Profile card */}
          <ProfileCard />

          <div className="card card-border col-span-3 xl:col-span-2 bg-warning m-4 p-4">
            <h1 className="card-title justify-start text-warning-content font-bold">
              Announcements
            </h1>

            <div className="grid grid-cols-3">
              <p className="text-info-content text-center p-3 col-span-1">
                Stay in-touch with the iCAA events and find opportunities to
                take advantage of, or help-out with.
              </p>
              <p className="text-center col-span-1">
                <a
                  href="#"
                  target="_blank"
                  className="btn btn-secondary col-span-1 m-3 md:btn-lg btn-outline"
                >
                  Newsletter
                </a>
              </p>
              <p className="text-warning-content col-span-1">qr code</p>
            </div>
          </div>

          <div className="card-border col-span-3 text-info-content xl:col-span-1 shadow-md m-4 p-4">
            <h1 className="card-title font-bold mb-2">platform</h1>
            <p className="card-body">
              This div style here is to use as a raised platform to place
              smaller cards on to give it a bit of a stacked feel
            </p>
            <div className="card col-span-3 xl:col-span-1 card-dash bg-info m-4 p-4 shadow-md">
              <h1 className="font-bold card-title m-2 p-2">
                Card with Dashed Border
              </h1>
              <p className="card-body m-2 p-2">
                This card uses the custom card-dash class.
              </p>
            </div>
            <div className="card col-span-3 xl:col-span-1 card-dash bg-info m-4 p-4 shadow-md">
              <h1 className="font-bold card-title m-2 p-2">
                Card with Dashed Border
              </h1>
              <p className="card-body m-2 p-2">
                This card uses the custom card-dash class.
              </p>
            </div>
            <div className="card col-span-3 xl:col-span-1 card-dash bg-info m-4 p-4 shadow-md">
              <h1 className="font-bold card-title m-2 p-2">
                Card with Dashed Border
              </h1>
              <p className="card-body m-2 p-2">
                This card uses the custom card-dash class.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md col-span-3 xl:col-span-2 m-4 p-4">
            <h1 className="card-title font-bold mb-2">Welcome 2</h1>
            <p className="card-body">
              I, Jonathan Ramirez, a proud Cycle 53 Graduate of i.c.stars,
              welcome you to my Portfolio-Classroom-Project. I am excited to
              share my journey with you and showcase my skills and projects.
            </p>
          </div>

          <div className="card card-border text-info-content bg-info shadow-md col-span-3 xl:col-span-3 m-4 p-4">
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
