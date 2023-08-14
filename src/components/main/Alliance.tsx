import * as React from 'react';

interface IAllianceProps {}

const Alliance: React.FunctionComponent<IAllianceProps> = (props) => {
  return (
    <>
      <div className="hero bg-base-100 overflow-hidden">
        {/* <div className="hero-content text-center flex-col px-4 sm:px-0"> */}
        <div className="w-full py-20 px-5">
          <h1 className="text-3xl md:text-5xl font-bold text-center" data-aos="fade-up">Metaverse Alliance</h1>
          <div className="mt-5">
            <div className="flex flex-wrap justify-center gap-5 py-10 " data-aos="fade-up">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={`Alliance_${i}`}>
                  <img
                    src={`/images/alliance/alliance-${i + 1}.jpg`}
                    alt="themepark"
                    className="rounded-xl w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Alliance;
