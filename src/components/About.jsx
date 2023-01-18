import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Dedicated engineer with a motive to solve real world problems with the application of technical knowledge.Seeking a entry level job oppurtunity to build a career out of it.
        </p>

        <br />

        <p className="text-xl">
        I am a 4th year B.Tech student in INFORMATION SCIENCE AND TECHNOLOGY with a passion for IT. I have completed several projects that have helped me develop a strong understanding of Front-end and Some back-end technologies. I am a proactive learner with a keen interest in staying up-to-date with the latest industry trends. I am looking for opportunities to apply my skills and knowledge in real-world projects. I am confident that my passion, dedication and strong work ethic will make me a valuable asset to any team or organization
        </p>
      </div>
    </div>
  );
};

export default About;
