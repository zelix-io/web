import * as React from 'react';

interface IInvestmentProps {}

const ExchangeLink = [
  'https://www.kucoin.com/trade/ZELIX-USDT',
  'https://www.gate.io/trade/ZELIX_USDT',
  'https://www.htx.com/en-us/trade/zelix_usdt',
  'https://www.mexc.com/exchange/ZELIX_USDT',
  'https://www.poloniex.com/trade/ZELIX_USDT',
];

const Investment: React.FunctionComponent<IInvestmentProps> = (props) => {
  return (
    <>
      <div
        className="hero bg-base-200 overflow-hidden py-20"
        style={{ backgroundImage: 'url(/images/7_investment.png' }}
      >
        <div
          className="hero-content text-center flex-col sm:px-0"
          id="exchanges"
        >
          <div className="w-full py-20 text-center">
            <h1 className="text-3xl md:text-5xl font-bold" data-aos="fade-up">
              Investment & Market Making
            </h1>
            <div className="mt-5 flex justify-center py-10">
              <div className="btn btn-neutral w-40 h-20" data-aos="fade-up">
                <a
                  className="link link-hover"
                  href="https://www.dwf-labs.com/dwf-labs-portfolio-project/18-metaverse-gamefi/130-onston"
                  target="_blank"
                >
                  <img
                    src="/images/dwf.png"
                    alt="dwf"
                    className="w-full h-auto"
                  />{' '}
                </a>
              </div>
            </div>
            <div className="w-full pt-20 px-0">
              <h1 className="text-3xl md:text-5xl font-bold" data-aos="fade-up">
                Exchanges
              </h1>
              <div className="mt-5">
                <div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 py-10"
                  data-aos="fade-up"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={`Alliance_${i}`} className="btn btn-neutral h-20">
                      <a
                        className="link link-hover"
                        href={ExchangeLink[i]}
                        target="_blank"
                      >
                        <img
                          src={`/images/exchanges/exchange-${i + 1}.png`}
                          alt="themepark"
                          // className="rounded-xl"
                          style={{ width: 140, height: 60 }}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investment;
