import * as React from 'react';

interface IWhatisProps {}

const Whatis: React.FunctionComponent<IWhatisProps> = (props) => {
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{ backgroundImage: 'url(/images/2_zelix.png' }}
      id="whatis"
    >
      <div className="hero-content text-center flex-col py-20 2xl:py-0 w-full">
        <div className="max-w-md">
          <h1 className="text-3xl md:text-5xl font-bold" data-aos="fade-up">
            What is ZELIX?
          </h1>
          <p className="my-6" data-aos="fade-up">
            ZELIX is a link that integrates or extends all members of the ZELIX
            Metaverse community.
            <br />
            ZELIX develops ZELIX Metaverse Platform and ZELIX Marketplace, a new
            virtual reality metaverse ecosystem.
          </p>

          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
        <div className="py-10 w-full" data-aos="fade-up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full">
            <figure className="flex flex-col items-center mb-10 lg:mb-0">
              <div className="btn btn-info h-full">
                <img
                  src="/images/ZX_ThemePark.png"
                  alt="themepark"
                  className="rounded-xl w-full"
                />
              </div>
              <figcaption className="mt-2 text-lg font-bold">
                Theme Park
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center  mb-10 lg:mb-0">
              <div className="btn btn-info h-full">
                <img
                  src="/images/ZX_Shopping.png"
                  alt="shopping"
                  className="rounded-xl w-full"
                />
              </div>
              <figcaption className="mt-2 text-lg font-bold">
                Shopping
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center  mb-10 lg:mb-0">
              <div className="btn btn-info h-full">
                <img
                  src="/images/ZX_NFTArt.png"
                  alt="nft-art"
                  className="rounded-xl w-full"
                />
              </div>
              <figcaption className="mt-2 text-lg font-bold">
                NFT ART
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center  mb-10 lg:mb-0">
              <div className="btn btn-info h-full">
                <img
                  src="/images/ZX_Work.png"
                  alt="work"
                  className="rounded-xl w-full"
                />
              </div>
              <figcaption className="mt-2 text-lg font-bold">Work</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatis;
