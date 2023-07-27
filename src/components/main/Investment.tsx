import * as React from 'react';

interface IInvestmentProps {}

const Investment: React.FunctionComponent<IInvestmentProps> = (props) => {
  return (
    <>
      <div className="hero  bg-base-200 overflow-hidden py-20">
        <div className="hero-content text-center flex-col px-4 sm:px-0">
          <div className="w-full  text-center">
            <h1 className="text-5xl font-bold">Investment & Market Making</h1>
            <div className="mt-5 flex justify-center py-10 ">
              <div className="btn btn-neutral w-40 h-20">
                <img
                  src="/images/dwf.png"
                  alt="dwf"
                  className="w-full h-auto"
                />{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investment;
