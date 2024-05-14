import React from "react";

const Bio = () => {
  return (
    <div className="flex flex-col md:flex-row items-start p-4 md:p-8">
      <div className="md:w-1/3 flex flex-col items-center md:items-start mb-4 md:mb-0">
        <img
          src="path/to/your/image.jpg"
          alt="John Schibelli"
          className="rounded-full w-48 h-48 object-cover mb-4"
        />
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">John Schibelli</h3>
          <p className="text-sm">
            Full Stack Web Developer & President of Intraweb Technologies
          </p>
        </div>
      </div>
      <div className="md:w-2/3">
        <h2 className="text-2xl font-bold mb-4">About John Schibelli</h2>
        <p className="mb-4">
          John Schibelli is a distinguished Full Stack Web Developer with a rich
          history of impactful contributions to the tech industry. Since joining
          Intraweb Technologies in April 2024, where he serves as the owner and
          president, John has demonstrated unparalleled expertise in SQL Server
          and Nest.js, solidifying his reputation as a leading developer in his
          field. His innovative approach and dedication to excellence are
          evident through his creation of Schibelli.com, a modern, dynamic
          platform showcasing his mastery in NEXT.js, React, and GraphQL.
        </p>
        <p className="mb-4">
          A graduate of Bloomfield High School, John’s journey in the tech world
          began with a remarkable tenure at CNBC, where he served as an 'On-Air'
          Graphic Designer. His creative prowess brought life to prominent shows
          such as 'Morning Call,' 'Wake Up Call,' 'Dennis Miller,' and 'Power
          Lunch.' This role was a testament to his ability to blend technical
          skill with artistic vision, a combination that has become his
          signature style.
        </p>
        <p className="mb-4">
          John’s talent extends beyond corporate environments. He was personally
          selected by comedian Jim Florentine to be the Art Director for 'Meet
          The Creeps, Vol. 2,' a project that showcased his versatility and
          creativity. Following his time with NBC, John dedicated his knowledge
          and passion to educating others, instructing graphic design and web
          development at The Chubb Institute until June 2009.
        </p>
        <p className="mb-4">
          Beyond his professional achievements, John’s personal journey is
          equally inspiring. From traversing the country with his wife Tracy,
          hauling furniture for Allied Van Lines, to establishing a nurturing
          home in Northern New Jersey, John’s story is one of resilience and
          dedication.
        </p>
        <p className="mb-4">
          John’s expertise isn’t confined to just full stack web development;
          his leadership and collaborative skills have also made him a vital
          asset to any team he joins. At Intraweb Technologies, he is known not
          only for his technical acumen but also for his ability to mentor
          colleagues and drive projects to successful completion. His work in AI
          development and web development exemplifies his forward-thinking
          approach and commitment to delivering high-quality solutions.
        </p>
        <p className="mb-4">
          John's educational background and professional experiences are
          complemented by his continuous pursuit of knowledge and innovation. He
          remains at the forefront of technological advancements, constantly
          exploring new frameworks and methodologies to enhance his skill set.
          This dedication to lifelong learning ensures that he brings the most
          current and effective strategies to his work.
        </p>
        <p className="mb-4">
          In his personal life, John is a devoted family man. He and his wife,
          Tracy, share a strong bond, having navigated life’s ups and downs
          together since they met in 1998. Their son, Jack, is a central part of
          their lives, and John takes pride in being a supportive and loving
          father.
        </p>
        <p className="mb-4">
          John's roots in Northern New Jersey have always been a significant
          part of his identity. Despite living in various places, he has always
          considered New Jersey his true home. This deep connection to his
          community is reflected in his commitment to excellence and his drive
          to give back through his work and personal endeavors.
        </p>
        <p className="mb-4">
          Through his resilience, creativity, and unwavering dedication, John
          Schibelli continues to leave an indelible mark on the tech industry
          and all who have the privilege of working with him. His story is one
          of remarkable achievements and an enduring spirit, making him a true
          leader and innovator in his field.
        </p>
      </div>
    </div>
  );
};

export default Bio;
