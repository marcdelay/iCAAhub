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
            className="max-h-[500px] md:text-6xl diff py-3 aspect-16/9"
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


          
            <div className="col-span-3 xl:col-span-1 card border-4 m-4">
              <div className="card-title text-3xl pl-4 xl:text-5xl join">
                <p className="join-item">
                  *  
              </p>
                <p className="join-item text-secondary">
                   <strong> | iCAA</strong> 
                </p>
              </div>

              <p className="card-body text-2xl xl:text-3xl text-center lg:text-start">
                Where the i.c.stars Alumni and Residents come together to learn,
                grow, and share!
              </p>
            </div>


            <div className="card card-border col-span-3 xl:col-span-2 bg-warning m-4 p-4">
              <div className="flex flex-col items-center">
                <h1 className="text-3xl text-warning-content font-bold">
                  Whats new?
                </h1>
                <Image
                  src="/newspaper.svg"
                  alt="Newspaper"
                  width={100}
                  height={100}
                />
              </div>
              <div className="">
                <p className="text-info-content text-center p-3 md:text-3xl">
                  Stay in-touch with the iCAA events and find opportunities to
                  take advantage of, or help-out with.
                 
                  </p><a
                    href="#"
                    target="_blank"
                    className="btn btn-secondary mt-3 flex flex-center md:btn-lg btn-outline"
                  >
                    Newsletter
                  </a>
               
              </div>
            </div>


            <div className="card card-dash bg-base-200 m-4 shadow-md">
              <h1 className="text-2xl font-bold card-title m-2">
                Card with Dashed Border
              </h1>
              <p>This card uses the custom card-dash class.</p>
            </div>

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
      </div>
    </main>
  );
}

{
  /*
  <div className="flex w-full justify-center lg:max-w-[1935px] min-h-screen bg-base-200">
        <div className="md:flex md:flex-row bg-base-200">

          <div className="max-w-[875px] gap-4 w-full p-4">



            




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
              
    
              



              
            </div>

            

           
          </div>

       
          
          Main Content Section 
            


          <div className="grid grid-rows-1 max-w-[875px] justify-around gap-4 w-full p-4">
            <div className="p-4 flex flex-col justify-start bg-base-200 items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full p-4">
           
              
              
              First Column 
                


                <div className="grid grid-cols-1">
                  
                </div>
          
          
          Second Column 
          

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

              
              
              Third Column 
                

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
         
              
              
              Footer Section 
              


              <div className="w-full flex justify-center mt-8">
                <Link className="btn btn-secondary" href="/classroom">
                  Enter classroom
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  */
}
