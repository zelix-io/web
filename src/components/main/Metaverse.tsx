import * as React from 'react';

interface IMetaverseProps {}

const Metaverse: React.FunctionComponent<IMetaverseProps> = (props) => {
  return (
    <div className="hero min-h-screen bg-base-100" id="metaverse">
      <div className="hero-content text-center py-20">
        <div data-aos="fade-up">
          <h1 className="text-3xl md:text-5xl font-bold">ZELIX Metaverse Platform</h1>

          <div className="mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <figure className="flex flex-col items-center px-5 pt-10">
                <img
                  src="/images/metaverse-1.png"
                  alt="themepark"
                  className="rounded-xl object-cover w-full h-48"
                />
              </figure>
              <figure className="flex flex-col items-center px-5 pt-10">
                <img
                  src="/images/metaverse-2.png"
                  alt="shopping"
                  className="rounded-xl object-cover w-full h-48"
                />
              </figure>
              <figure className="flex flex-col items-center px-5 pt-10">
                <img
                  src="/images/metaverse-3.png"
                  alt="nft-art"
                  className="rounded-xl object-cover w-full h-48"
                />
              </figure>
            </div>
            <p className="py-6 font-bold text-xl">
              High quality blockchain metaverse platform built by Unity engine
            </p>
          </div>

          <div className="mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <figure className="flex flex-col items-center px-5 pt-10">
                <img
                  src="/images/metaverse-4.jpg"
                  alt="themepark"
                  className="rounded-xl object-cover w-full h-48"
                />
              </figure>
              <figure className="flex flex-col items-center px-5 pt-10">
                <img
                  src="/images/metaverse-5.jpg"
                  alt="shopping"
                  className="rounded-xl object-cover w-full h-48"
                />
              </figure>
              <figure className="flex flex-col items-center px-5 pt-10">
                <img
                  src="/images/metaverse-6.png"
                  alt="nft-art"
                  className="rounded-xl object-cover w-full h-48"
                />
              </figure>
            </div>
            <p className="py-6 font-bold text-xl">
              Multi-contents metaverse platform where user can experience a
              variety of content
            </p>
          </div>

          <div className="mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <figure className="flex flex-col items-center px-5 pt-10">
                <img
                  src="/images/metaverse-7.png"
                  alt="themepark"
                  className="rounded-xl object-cover w-full h-48"
                />
              </figure>
              <figure className="flex flex-col items-center px-5 pt-10">
                <img
                  src="/images/metaverse-8.png"
                  alt="shopping"
                  className="rounded-xl object-cover w-full h-48"
                />
              </figure>
              <figure className="flex flex-col items-center px-5 pt-10">
                <img
                  src="/images/metaverse-9.png"
                  alt="nft-art"
                  className="rounded-xl object-cover w-full h-48"
                />
              </figure>
            </div>
            <p className="py-6 font-bold text-xl">
              Multi-Metaverse is a gateway where freely crosses all metaverses
            </p>
          </div>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Metaverse;
