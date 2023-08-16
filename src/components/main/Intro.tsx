import * as React from 'react';
import Typed from 'react-typed';

interface IIntroProps {}

const Intro: React.FunctionComponent<IIntroProps> = (props) => {
  return (
    <div
      className="hero min-h-screen bg-base-100 bg-intro"
      // style={{ backgroundImage: 'url(/images/1_intro.png' }}
      id="intro"
    >
      <div className="hero-content flex-col py-20 lg:flex-row-reverse text-center">
        {/* <img
          src="/images/test-img.gif"
          className="rounded-lg shadow-2xl w-80"
        /> */}
        <video
          src="/video/zx_video.mp4"
          className="rounded-lg shadow-2xl w-80"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="text-center lg:text-left md:w-3/5 md:mt-5">
          <h1 className="text-3xl md:text-5xl font-bold">ZELIX</h1>
          <Typed
            strings={['Metaverse Platform.']}
            typeSpeed={80}
            loop={true}
            className="text-2xl md:text-4xl font-bold whitespace-nowrap"
          />
          <p className="my-6">
            We present a new concep of metaverse to users & build a
            multi-ecosystem.
          </p>
          <a
            className="btn btn-accent rounded-full px-8 text-white"
            href="https://zelix-io.gitbook.io/zelix/"
            target="_blank"
          >
            Whitepaper
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
