import * as React from 'react';

interface IWhatisProps {}

const Whatis: React.FunctionComponent<IWhatisProps> = (props) => {
  return (
    <div className="hero min-h-screen bg-base-200 pt-40" id='whatis'>
      <div className="hero-content text-center flex-col">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">What is ZELIX?</h1>
          <p className="py-6">
            ZELIX is a link that integrates or extends all members of the ZELIX
            Metaverse community.
            <br />
            ZELIX develops ZELIX Metaverse Platform and ZELIX Marketplace, a new
            virtual reality metaverse ecosystem.
          </p>

          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <figure className="flex flex-col items-center px-10 pt-10">
              <img
                src="/images/ZX_ThemePark.png"
                alt="themepark"
                className="rounded-xl"
              />
              <figcaption className="mt-2 text-lg font-bold">Theme</figcaption>{' '}
            </figure>
            <figure className="flex flex-col items-center px-10 pt-10">
              <img
                src="/images/ZX_Shopping.png"
                alt="shopping"
                className="rounded-xl"
              />
              <figcaption className="mt-2 text-lg font-bold">
                Shopping
              </figcaption>{' '}
            </figure>
            <figure className="flex flex-col items-center px-10 pt-10">
              <img
                src="/images/ZX_NFTArt.png"
                alt="nft-art"
                className="rounded-xl"
              />
              <figcaption className="mt-2 text-lg font-bold">
                NFT ART
              </figcaption>{' '}
            </figure>
            <figure className="flex flex-col items-center px-10 pt-10">
              <img
                src="/images/ZX_Work.png"
                alt="work"
                className="rounded-xl"
              />
              <figcaption className="mt-2 text-lg font-bold">Work</figcaption>{' '}
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatis;
