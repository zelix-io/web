import * as React from 'react';

interface ITeamProps {}

const teamProfile = [
  {
    name: 'Hwan Sup Lee',
    position: 'CEO of Zelix',
    career:
      'In-house professor of SK Telecom – SK Communications Master of Science in Han Yang University',
    image: '/images/team-1.png',
  },
  {
    name: 'Kyung Chan Park',
    position: 'CMO of Zelix',
    career:
      'CEO of CTU global Ltd. Graduated from KyungHee University in South Korea',
    image: '/images/team-2.png',
  },
  {
    name: 'Oleh Basystiuk',
    position: 'CTO of Zelix',
    career:
      "Cofounder of CodePillow Software Engineer of LvivCityHelper Graduated from Lviv Polytechnic National University Master of Engineering - MEng, Artificial Intelligence Bachelor's degree, Computer Science",
    image: '/images/team-3.png',
  },
  {
    name: 'Oleh Nykoliak',
    position: 'Developer of Zelix',
    career:
      "Developer of CodePillow Bachelor's degree, Computer Science in Lviv Polytechnic National University",
    image: '/images/team-4.png',
  },
  {
    name: 'Vlad Vereskun',
    position: 'Developer of Zelix',
    career:
      "UX UI Designer of CodePillow Mariupol'skyy Electromechanical Technical School",
    image: '/images/team-5.png',
  },
  {
    name: 'Oleh Nykoliak',
    position: 'Developer of Zelix',
    career:
      "Developer of CodePillow Bachelor's degree, Internet of Things in Lviv Polytechnic National University",
    image: '/images/team-6.png',
  },
];
const advisorProfile = [
  {
    name: 'Richard Wang',
    position: 'Partner at Draper Dragon',
    career:
      'DFJDragon Fund/Draper Dragon Fund CEO of QunZhong E Commerce Ph.D candidates, National Chio Tung University',
    image: '/images/advisor-1.png',
  },
  {
    name: 'Andy Cheung',
    position: 'Founder ACDX & AC Ventures',
    career: 'CEO of Bitwork Former OKEx COO Bond University Bachelors',
    image: '/images/advisor-2.png',
  },
  {
    name: 'Flora Fang',
    position: 'COO of Highstreet Core Team',
    career:
      'Managing Partner at Avalanche Asia Star Fund Stratedgic Advisor of GeneOnline Former NEM Group Global Partnership Director Hult International Business School Vancouver Film School',
    image: '/images/advisor-3.png',
  },
];

const Team: React.FunctionComponent<ITeamProps> = (props) => {
  return (
    <div className="hero min-h-screen bg-base-200 py-20" id='team'>
      <div className="hero-content text-center flex-col p-0">
        <div className="max-w-6xl">
          <h1 className="text-5xl font-bold" data-aos="fade-up">Zelix Team</h1>
          <div className="mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" data-aos="fade-up">
              {teamProfile.map((item, i: number) => (
                <div key={`Team_${i}`}>
                  <figure className="flex flex-col items-center px-10 pt-10">
                    <img
                      src={item.image}
                      alt="themepark"
                      className="rounded-xl"
                    />
                    <figcaption className="mt-2 text-xl font-bold">
                      {item.name}
                    </figcaption>
                    <figcaption className="my-5 text-md font-bold">
                      {item.position}
                    </figcaption>
                    <figcaption className="text-md">{item.career}</figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-screen mt-40 max-w-6xl" id='advisor'>
          <h1 className="text-5xl font-bold" data-aos="fade-up">Advisor</h1>
          <div className="mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {advisorProfile.map((item, i: number) => (
                <div key={`Team_${i}`}>
                  <figure className="flex flex-col items-center px-10 pt-10" data-aos="fade-up">
                    <img
                      src={item.image}
                      alt="themepark"
                      className="rounded-xl"
                    />
                    <figcaption className="mt-2 text-xl font-bold">
                      {item.name}
                    </figcaption>
                    <figcaption className="my-5 text-md font-bold">
                      {item.position}
                    </figcaption>
                    <figcaption className="text-md">{item.career}</figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
