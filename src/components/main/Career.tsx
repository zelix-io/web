import * as React from 'react';

interface ICareerProps {}

const careerInfos = [
  {
    title: 'Business development manager',
    desc: 'Conduct research to identify new markets and customer needs Arrange business meetings with prospective clients Build long-term relationships with new and existing customers Develop entry level staff into valuable salespeople',
    image: '/images/careers/career-1.svg',
  },
  {
    title: 'Project Manager',
    desc: 'Schedule projects and define budget constraints Conceptualize visuals based on requirements Prepare rough drafts and present ideas Create and maintain comprehensive project documentation Perform risk management to minimize  ',
    image: '/images/careers/career-2.svg',
  },
  {
    title: 'Game Development Manager',
    desc: 'Translate requirements into complicated but clean and efficient code Contribute to the design and audio features of the game Create unit tests and validation procedures to assure quality Detect identification and resolution and document technical specifications “Polish” the game, maintain code, fix bugs and iron out occurring problems ',
    image: '/images/careers/career-3.svg',
  },
  {
    title: 'Game producer assistant',
    desc: 'Assistant Game Producer Negotiate contracts, including licensing deals Develop and maintain schedules and budgets Arrange for localization Pitch game ideas to publishers ',
    image: '/images/careers/career-4.svg',
  },
  {
    title: 'Blockchain Developer',
    desc: 'Research, design, develop, and test blockchain technologies Brainstorm and help evaluate applications for new tools and technologies as they continually evolve Maintain and extend current client- and server-side applications responsible for integration and business logic ',
    image: '/images/careers/career-5.svg',
  },
  {
    title: 'Web Designer',
    desc: 'Execute all visual design stages from concept to final hand-off to engineering Conceptualize original website design ideas that bring simplicity and user friendliness to complex roadblocks Create wireframes, storyboards, user flows, process flows and site maps to communicate interaction and design ideas',
    image: '/images/careers/career-6.svg',
  },
  {
    title: 'Graphic Designer',
    desc: 'Provide technical support for design- and video-related efforts Edit video clips for use on social media platforms; Optimize graphics and video content for social media platforms Create short videos to highlight, recap, and promote various endeavors and events Maintain organized content files, and help to organize and archive existing video and graphics file ',
    image: '/images/careers/career-7.svg',
  },
  {
    title: 'Documentation Controller',
    desc: 'Copy, scan and store documents Check for accuracy and edit files, like contracts Review and update technical documents Distribute project-related copies to internal teams Retrieve files as requested by employees and clients Manage the flow of documentation within the organization Maintain confidentiality around sensitive information and terms of agreement Prepare ad-hoc reports on projects as needed ',
    image: '/images/careers/career-8.svg',
  },
  {
    title: 'Marketing Manager',
    desc: 'Develop strategies and tactics to get the word out about our company and drive qualified traffic to our front door Deploy successful marketing campaigns and own their implementation from ideation to execution Measure and report on the performance of marketing campaigns, gain insight and assess against goals Prepare and monitor the marketing budget on a quarterly and annual basis and allocate funds wisely ',
    image: '/images/careers/career-9.svg',
  },
  {
    title: 'Community Moderator',
    desc: 'Set and implement social media and communication campaigns to align with marketing strategies Provide engaging text, image and video content for social media accounts Respond to comments and customer queries in a timely manner Liaise with Development and Sales departments Build relationships with customers, potential customers, industry professionals and journalists ',
    image: '/images/careers/career-10.svg',
  },
];

const Career: React.FunctionComponent<ICareerProps> = (props) => {
  return (
    <div className="hero min-h-screen bg-base-200 py-20" id="career">
      <div className="hero-content text-center flex-col p-1">
        <div className="max-w-6xl">
          <h1 className="text-5xl font-bold py-10">Careers at Zelix</h1>
          <p className="text-lg">
            Join our quest to increase the Freedom of Money
          </p>
          <div className="mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {careerInfos.map((item, i) => (
                <figure
                  className="flex p-10 gap-5 bg-white"
                  key={`Career_${i}`}
                >
                  <div className="flex flex-col items-start text-left gap-5">
                    <img
                      src={item.image}
                      alt="themepark"
                      className="rounded-xl"
                      style={{ width: 56, height: 56 }}
                    />

                    <figcaption className="mt-2 text-xl font-bold text-accent">
                      {item.title}
                    </figcaption>
                    <figcaption className="text-md text-left">
                      {item.desc}
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
