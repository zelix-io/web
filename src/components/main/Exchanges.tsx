import * as React from 'react';

interface IExchangesProps {}

const Exchanges: React.FunctionComponent<IExchangesProps> = (props) => {
  return (
    <>
      <div className="hero bg-base-100 overflow-hidden py-20">
        {/* <div className="hero-content text-center flex-col px-4 sm:px-0"> */}
        <div className="w-full  max-w-6xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold" data-aos="fade-up">Exchanges</h1>
          <div className="mt-5">
            <div className="flex flex-wrap justify-center gap-5 py-10" data-aos="fade-up">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={`Alliance_${i}`} className="btn btn-neutral h-20">
                  <img
                    src={`/images/exchanges/exchange-${i + 1}.png`}
                    alt="themepark"
                    // className="rounded-xl"
                    style={{ width: 160, height: 60 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exchanges;
