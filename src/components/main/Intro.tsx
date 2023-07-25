import * as React from 'react';
import Typed from 'react-typed';

interface IIntroProps {}

const Intro: React.FunctionComponent<IIntroProps> = (props) => {
  return (
    <div className="hero min-h-screen bg-base-200" id="intro">
      <div className="hero-content flex-col lg:flex-row-reverse text-center">
        <img
          src="/images/test-img.gif"
          className="max-w-15 rounded-lg shadow-2xl hidden lg:block"
        />
        <div className="text-center lg:text-left md:w-3/5">
          <h1 className="text-5xl font-bold">ZELIX</h1>
          <Typed
            strings={['Metaverse Platform.']}
            typeSpeed={80}
            loop={true}
            className="text-5xl font-bold"
          />
          <p className="py-6">
            We present a new concep of metaverse to users & build a
            multi-ecosystem.
          </p>
          <button className="btn btn-primary">Whitepaper</button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
