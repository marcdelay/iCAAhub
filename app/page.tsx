import React from "react";
// import Link from "next/link";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import AnnouncementDash from "@/components/AnnouncementDash";

export default function Home() {
  return (
    <main>
      <div className="w-full mx-auto min-h-screen bg-base-200">
        {/* container */}
        <Header title="Welcome to iCAA" subtitle="Alumni hub" />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full py-4 items-start">
          <div className="col-span-1">
            <ProfileCard />
          </div>
          <div className="col-span-1 md:col-span-4">
            <AnnouncementDash />
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
    </main>
  );
}
