'use client'

import Image from 'next/image';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


const group = [ // TODO replace with api call from DB later
  {
    user_id: 1,
    name: "Jasmine Valladares",
    email: "JValladares@icstars.org",
    linkedin: "https://www.linkedin.com/in/jasminevalladares/",
    image: "/images/headshots/Jasmine_Valladares.JPG",
    jobRoles: ["Business Analyst", "Data Analyst"],
    skills: ["HTML", "CSS", "SQL"],
    about:
      "Jasmine is a dedicated and goal-oriented professional known for their teamwork, strong collaboration skills, and kind demeanor. Peers often describe them as a reliable and resourceful individual who fosters positive relationships and consistently delivers high-quality results. Employers see them as a great asset due to their unwavering dedication, proactive mindset, and ability to align with long-term organizational goals."
  },
  {
    user_id: 2,
    name: "Malika Taitelieva",
    email: "MTaitelieva@icstars.org",
    linkedin: "https://www.linkedin.com/in/miaraylight/",
    image: "/images/headshots/Malika_Taitelieva.JPG",
    jobRoles: ["Front-End Developer", "Software Engineer"],
    skills: ["HTML", "CSS", "JavaScript", "React", "React Router Dom", "Redux", "Redux Toolkit", "SQL", "MySQL", "MongoDB", "Firebase", "Python", "Git", "Flutter"],
    about: "Malika is a collaborative team member with a strong analytical mindset, quick learning ability, and resourcefulness in identifying the most effective solutions to complex challenges. She excels in bridging front-end and back-end development, delivering intuitive, scalable solutions with a strong focus on user experience. Her adaptability, sharp technical expertise, and composure under pressure make her an invaluable asset, consistently delivering innovative solutions, and driving success in fast-paced environments."
},
{
    user_id: 3,
    name: "Jameer Harris",
    email: "JHarris@icstars.org",
    linkedin: "https://www.linkedin.com/in/hirejameerharris/",
    image: "/images/headshots/Jameer_Harris.JPG",
    jobRoles: ["Security Engineer", "Ethical Hacker"],
    skills: ["JavaScript", "CSS", "HTML", "Web Development"],
    about: "Jameer is a well-spoken person who displays leadership skills by helping manage projects during group work. Jameer takes initiative and is proactive when it comes to getting through tough assignments. He loves to publicly speak about the work that he and his group have completed, while pointing out the challenges and how he overcame them."
},
{
    user_id: 4,
    name: "Christian Acosta",
    email: "CAcosta@icstars.org",
    linkedin: "https://www.linkedin.com/in/user-christian-acosta/",
    image: "/images/headshots/Christian_Acosta.JPG",
    jobRoles: ["Full Stack Developer", "Network Security Architect"],
    skills: ["HTML", "Python", "SQL", "SIEM Tools"],
    about: "Christian makes us feel inspired to be the best version of ourselves. He easily becomes the heart of any team he is on, and is a natural and efficient leader. His passion for others, dedication to his craft, and overachiever mindset keep him steps ahead of the competition and make him a person you want to follow."
},
{
    user_id: 5,
    name: "Jozelyn Puente",
    email: "JPuente@icstars.org",
    linkedin: "https://www.linkedin.com/in/empowerjozelynpuente/",
    image: "/images/headshots/Jozelyn_Puente.JPG",
    jobRoles: ["User Experience (UX) Designer", "Product Management"],
    skills: ["HTML", "CSS", "SQL"],
    about: "Jozelyn is a creative and self-motivated professional with strong problem-solving and conflict-resolution skills. Her peers describe her as dependable, personable, and a natural mentor who fosters collaboration and growth in others. Employers value her curiosity and dedication, which drive her to excel in any challenge and contribute meaningfully to team success."
},
{
    user_id: 6,
    name: "Lidiia Vatsyk",
    email: "LVatsyk@icstars.org",
    linkedin: "https://www.linkedin.com/in/lidiia-vatsyk-58a440240/",
    image: "/images/headshots/Lidiia_Vatsyk.JPG",
    jobRoles: ["Project Manager", "Data Analyst"],
    skills: ["HTML", "CSS", "JavaScript", "SQL"],
    about: "Lidiia's is an experienced professional with over 20 years of expertise in retail and entrepreneurship. Her colleagues praise her leadership skills, ability to work effectively in a team, and natural talent for building strong relationships with people. Her passion for work, organizational skills, and results-oriented mindset make her a valuable asset to any team."
},
{
    user_id: 7,
    name: "Destiny Frieson",
    email: "DFrieson@icstars.org",
    linkedin: "https://www.linkedin.com/in/hiredestinyfrieson-423309335/",
    image: "/images/headshots/Destiny_Frieson.JPG",
    jobRoles: ["Software Engineer", "User Experience Designer"],
    skills: ["HTML", "JavaScript"],
    about: "Known for their determination and motivation, they consistently tackle challenges with focus and resilience. A skilled multitasker with excellent communication abilities, they seamlessly balance priorities while fostering collaboration and understanding. Peers often describe them as dependable, resourceful, and an inspiring team player, making them an invaluable asset to any organization."
},
{
    user_id: 8,
    name: "Asantea Payne",
    email: "APayne@icstars.org",
    linkedin: "https://www.linkedin.com/in/theasanteapayne/",
    image: "/images/headshots/Asantea_Payne.JPG",
    jobRoles: ["Quality Assurance Engineer", "Product Marketing"],
    skills: ["HTML", "CSS", "SQL", "Agile", "UI/UX Design", "Scrum"],
    about: "Asantea is a highly dependable and collaborative team member who consistently brings innovative ideas and a positive attitude to the table. She has strong communication skills, ability to problem-solve under pressure, and her willingness to support others to achieve shared goals. Employers should hire Asantea for her proven track record of adaptability, strong work ethic, and ability to foster a productive, positive team environment."
},
{
    user_id: 9,
    name: "Kiara Harris",
    email: "KHarris@icstars.org",
    linkedin: "https://www.linkedin.com/in/kiara-harris-877865289",
    image: "/images/headshots/Kiara_Harris.JPG",
    jobRoles: ["Audio Engineer/Studio Technician", "Chief Technology Officer (CTO)"],
    skills: ["HTML", "CSS", "JavaScript", "SQL"],
    about: "Kiara is a highly driven professional whose presence commands attention and leaves a lasting impact. Known for her resilience, unwavering determination, and strong integrity, she approaches every challenge with a commitment to learning and growth. With a track record of achieving goals and overcoming obstacles, Kiara consistently brings exceptional energy, focus, and a sense of trustworthiness to any team or project she is part of."
},
{
    user_id: 10,
    name: "Travis Rosario",
    email: "TRosario@icstars.org",
    linkedin: "https://www.linkedin.com/in/travis-rosario-3673341b0/",
    image: "/images/headshots/Travis_Rosario.JPG",
    jobRoles: ["Software Engineer", "Data Analyst"],
    skills: ["HTML", "CSS", "JavaScript", "SQL", "Excel", "UI/UX"],
    about: "Travis has undergone an incredible transformation, using introversion to become a capable contributor who excels in every challenge he faces. His commitment to growth, hard work, and overcoming obstacles has been evident in his consistent ability to rise to the occasion and deliver results. In addition to his personal success, Travis is passionate about supporting and uplifting others, always striving to inspire and help those around him achieve their own potential through collaboration and guidance."
},
{
    user_id: 11,
    name: "Noor Hassaballa",
    email: "NHassaballa@icstars.org",
    linkedin: "https://www.linkedin.com/in/theworldisnoors/",
    image: "/images/headshots/Noor_Hassaballa.JPG",
    jobRoles: ["Software Engineer", "DevOps"],
    skills: ["HTML", "CSS", "SQL", "React", "Python", "JavaScript"],
    about: "Noor is a powerhouse in technology, combining laser-sharp focus with an unrelenting drive to deliver results. Renowned for her ability to unravel complex challenges, she harnesses her deep expertise to craft innovative solutions that make an impact. With an unyielding pursuit of excellence, Noor turns obstacles into opportunities, emerging as a trusted problem-solver and leader in her field."
},
{
    user_id: 12,
    name: "Naia Dawson",
    email: "NDawson@icstars.org",
    linkedin: "https://www.linkedin.com/in/hirenaiadawson/",
    image: "/images/headshots/Naia_Dawson.JPG",
    jobRoles: ["Product Design", "E-commerce and Digital Solutions Architect"],
    skills: ["HTML", "CSS", "JavaScript", "Swift", "Rust", "Go", "Adobe Creative Cloud"],
    about: "Naia appreciates the thoughtful feedback her peers have shared about her. They often praise her for being organized, creative, and assertive—qualities that are highly valued in a creative department. These traits make her an exceptional asset to any team."
},
{
    user_id: 13,
    name: "Ivan Gomez",
    email: "IGomez@icstars.org",
    linkedin: "https://www.linkedin.com/in/ivan-gomez-03694331b/",
    image: "/images/headshots/Ivan_Gomez.JPG",
    jobRoles: ["Computer Engineer", "UI/UX Design"],
    skills: ["Photoshop", "HTML", "CSS", "SQL", "JavaScript", "React"],
    about: "Ivan is a highly motivated and detail-oriented individual with a lifelong passion for technology, dedicated to delivering efficient and high-quality results while upholding integrity and strong ethical values. After years of facing criticism and doubt from others in his environment, he came to recognize the immense power, confidence, and potential within himself, transforming these challenges into a source of strength. Now, he is committed to continuous self-improvement and aims to inspire others who feel marginalized or overlooked, encouraging them to embrace their uniqueness and step confidently into their potential."
},
{
    user_id: 14,
    name: "Shemar Houston",
    email: "SHouston@icstars.org",
    linkedin: "https://www.linkedin.com/in/shemarhouston/",
    image: "/images/headshots/Shemar_Houston.JPG",
    jobRoles: ["Full Stack Developer", "Cybersecurity Analyst"],
    skills: ["HTML", "CSS", "JavaScript", "React", "SQL", "Python", "Git"],
    about: "Shemar’s unique perspective and problem-solving approach allow him to consistently create meaningful contributions to projects. He is highly skilled at troubleshooting, and his team-oriented attitude makes him a highly sought-after member. His ability to prioritize tasks and meet deadlines while balancing technical aspects with user-centered design makes him an asset to any project."
},
{
    user_id: 15,
    name: "Edson Gonzalez",
    email: "EGonzalez@icstars.org",
    linkedin: "https://www.linkedin.com/in/hireed/",
    image: "/images/headshots/Edson_Gonzalez.JPG",
    jobRoles: ["Product Designer", "Software Engineer"],
    skills: ["HTML", "CSS", "JavaScript", "Python", "SQL", "React", "JavaScript Frameworks"],
    about: "Edson’s passion for technology is evident in his ability to seamlessly blend creativity with technical expertise. Peers recognize him as a thoughtful problem-solver who brings unique perspectives to team discussions. His ability to collaborate and communicate clearly allows him to contribute effectively to any project. With a focus on continuous growth and innovation, Edson has established himself as a valuable team player in the tech industry."
},
{
    user_id: 16,
    name: "Anahi Ojeda",
    email: "AOjeda@icstars.org",
    linkedin: "https://www.linkedin.com/in/anahi-ojeda-67a174aa/",
    image: "/images/headshots/Anahi_Ojeda.JPG",
    jobRoles: [ "Front-end development", "UI/UX Designer"],
    skills: ["HTML", "CSS", "JavaScript", "UI/UX Design", "Artificial Intelligence"],
    about: "Anahi is known for their exceptional problem-solving skills, adaptability, and ability to work collaboratively across teams. Peers often describe them as a dependable and open-minded team player who is always willing to lend a hand and share creative solutions. Employers value their dedication to excellence, and ability to thrive in fast-paced environments and navigate challenges with a thoughtful and balanced mindset."
},
{
    user_id: 17,
    name: "Jaluan Newson",
    email: "JNewson@icstars.org",
    linkedin: "https://www.linkedin.com/in/jaluan4success/",
    image: "/images/headshots/Jaluan_Newson.JPG",
    jobRoles: ["Product Manager", "Mobile App Developer", "Blockchain Developer" ],
    skills: ["SQL", "HTML", "React", "JavaScript", "CSS", "Express"],
    about: "Jaluan Newson's realtor leadership style and integrator and management style makes him the perfect person to maximize the talent on any team he is a part of.  His peers see him as a collaborative, thoughtful and efficient. Jaluan is an excellent active listener, which enables him to clearly understand what clients require and that his team is set up for success."
},

{
    user_id: 19,
    name: "Daniel Arismendi",
    email: "DArismendi@icstars.org",
    linkedin: "https://www.linkedin.com/in/daab36/",
    image: "/images/headshots/Daniel_Arismendi.JPG",
    jobRoles: ["Data Analyst", "Software Developer"],
    skills: ["JavaScript", "SQL", "Python", "SAS", "R", "HTML", "CSS"],
    about: "Highly motivated and results-oriented professional. Notably, he thrives in collaborative environments, demonstrating strong teamwork and communication skills honed through experiences leading teams and contributing to complex projects. His ability to effectively communicate technical concepts, combined with his analytical and problem-solving abilities, makes him a valuable asset to any organization seeking a driven and adaptable professional."
},
{
    user_id: 20,
    name: "Daniel Alvarez",
    email: "DAlvarez@icstars.org",
    linkedin: "https://www.linkedin.com/in/daniel-alvarez-05967bb8/",
    image: "/images/headshots/Daniel_Alvarez.JPG",
    jobRoles: ["Software Engineer", "Web Developer" ],
    skills: ["SQL", "HTML", "CSS", "JavaScript"],
    about: "Daniel is a dedicated and hardworking professional with a strong passion for technology and problem-solving. He brings a diligent work ethic to every project, ensuring high-quality results while staying focused on both the big picture and the finer details. A team-oriented individual, Daniel thrives in collaborative environments, always willing to contribute and support colleagues to achieve shared goals."
},
{
    user_id: 18,
    name: "Sally Ruslanova",
    email: "SRuslanova@icstars.org",
    linkedin: "https://www.linkedin.com/in/sally-ruslanova-735b1b339/",
    image: "/images/headshots/Sally_Ruslanova.JPG",
    jobRoles: ["Project Manager", "Scrum Master"],
    skills: ["HTML", "CSS", "JavaScript", "GitHub", "SQL", "Agile Tools (Jira, Trello, Asana)"," AI Chatbot Development", "UX/UI Design"," Mobile App Development"],
    about: "Sally Ruslanova is a highly organized and detail-oriented professional, with a strong ability to lead teams, manage timelines, and communicate effectively with stakeholders. She has a proven track record of working closely with senior leadership, including Vice Presidents and Fortune company CEOs, delivering strategic insights and impactful reports. Her entrepreneurial experience and expertise in brand building enable her to approach projects with a creative, results-driven mindset, ensuring business growth and operational success. Sally’s peers admire her proactive mindset, exceptional communication skills, and ability to stay calm under pressure. Currently working towards her CAPM certification, with plans to pursue PMP certification next, Sally is committed to ongoing professional development. Employers should hire Sally for her leadership, strong interpersonal skills, and unwavering commitment to delivering results; she is a valuable asset to any organization."
},
  
];

export default function CandidatesPage() {
    const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

    const handleEmailClick = async (email: string) => {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2000);
    };
  
    return (
      <div>
        <header className="w-full py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/images/background.jpg")' }}>
          <div className="bg-[#a60f3597] py-8 px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white uppercase">Alumn</h1>
            <h2 className="text-3xl sm:text-6xl font-bold text-white uppercase mt-4">Skills Profiles</h2>
          </div>
        </header>
  
        <main className="max-w-screen-xl mx-auto px-4 py-12">
          <section className="about mb-12 text-center">
            <h3 className="text-3xl font-bold text-[#751040] mb-4">About i.c.stars</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              i.c.stars works to activate a technology community of change agents to power social and economic freedom.
              Working with low-income adults, providing them with employment opportunities and preparing them for community-based
              advocacy allows us to achieve our social purpose.
            </p>
          </section>
  
          <section className="info mb-12 p-4">
            <h4 className="text-4xl text-[#d21242] uppercase mb-6">Seeing stars...</h4>
            <h5 className="text-3xl text-[#751040] font-bold mb-2">Who are we?</h5>
            <h6 className="text-xl text-[#d21242] mb-2">An untapped talent pool.</h6>
            <p className="text-lg text-gray-700 mb-6">
              i.c.stars |* Chicago is a technology & leadership training program. It connects underserved and underrepresented people from
              the Chicago area with the necessary business, leadership and technology training they need to launch themselves into professional careers.
            </p>
            <h5 className="text-3xl text-[#751040] font-bold mb-2">How can you hire from us?</h5>
            <h6 className="text-xl text-[#d21242] mb-2">We offer employers options to hire in the following ways:</h6>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Full-time employee referrals</li>
              <li>Contingent workforce resources</li>
              <li>Project-based consultants</li>
            </ul>
          </section>
  
          <section className="contact mb-20 p-4">
            <h5 className="text-3xl text-[#751040] font-bold mb-4">Interested in learning more?</h5>
            <p className="text-2xl font-semibold text-gray-800 mb-4">Contact</p>
            <div className="flex flex-col md:flex-row items-center gap-6 shadow-md p-6">
              <Image src="/images/contact.webp" alt="Arely Dorsey" width={200} height={200} className="rounded-2xl" />
              <div className="text-lg text-gray-700">
                <p className="text-[#d21242] font-bold text-xl">Arely Dorsey</p>
                <p className="text-[#d21242]">Director of Workforce Development</p>
                <p className="mt-2">adorsey@icstars.org</p>
                <p>312-248-4446</p>
              </div>
            </div>
          </section>
  
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Candidates
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {group.map((member) => (
              <div
                key={member.user_id}
                className="flex flex-col bg-white shadow-md rounded-2xl overflow-hidden"
              >
                <div className="w-full flex justify-center items-center p-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={250}
                    height={300}
                    className="rounded-xl shadow-lg object-cover"
                  />
                </div>
                <div className="w-full p-4 flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl font-semibold text-[#d21242]">
                      {member.name}
                    </h4>
                    <h5 className="text-xl text-[#751040] mt-2 font-semibold">
                      {member.jobRoles.join(', ')}
                    </h5>
                    <h6 className="text-lg text-[#d21242] mt-1">
                      Top Skills: {member.skills.join(', ')}
                    </h6>
                    <p className="mt-4 text-gray-700 text-sm">{member.about}</p>
                  </div>
                  <div className="flex mt-6 gap-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform"
                    >
                      <i className="bi bi-linkedin text-2xl text-[#0072b1]"></i>
                    </a>
                    <button
                      onClick={() => handleEmailClick(member.email)}
                      className="hover:scale-110 transition-transform"
                    >
                      <i className="bi bi-envelope-fill text-2xl text-[#d21242]"></i>
                    </button>
                    {copiedEmail === member.email && (
                      <span className="text-sm text-green-600 ml-2">Copied!</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }
  