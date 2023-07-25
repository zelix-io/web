import * as React from 'react';

interface IMilestoneProps {}

const Milestone: React.FunctionComponent<IMilestoneProps> = (props) => {
  return (
    <div className="hero min-h-screen bg-base-200" id='milestone'>
      <div className="hero-content text-center p-0">
        <div className="w-screen flex justify-center flex-col items-center">
          <h1 className="text-5xl font-bold">MILESTONE</h1>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-content bg-base-200 w-4/5 mt-10 text-left"
          >
            <input type="checkbox" className="peer" />

            <div className="collapse-title text-xl font-medium">
              METAVERSE MILESTONE
            </div>
            <div className="collapse-content pl-10">
              <p>Start the Metaverse Alliance</p>
              <p>Create 3D land platform Objects</p>
              <p>Metaverse Platform DEMO/BETA</p>
              <p>Metaverse Platform launching</p>
              <p>Genesis TOOL launching</p>
              <p>Muktilingual function support.</p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-content  bg-base-200 w-4/5 mt-5 text-left"
          >
            <input type="checkbox" className="peer" />

            <div className="collapse-title text-xl font-medium">
              MULTI METAVERSE MILESTONE
            </div>
            <div className="collapse-content pl-10">
              <p>Multi Wallet support</p>
              <p>Launching various coin swap services</p>
              <p>ZELIX SNS platform Launching</p>
              <p>
                Development ZELIX Station for implement with other Metaverses
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-content bg-base-200 w-4/5 mt-5 text-left"
          >
            <input type="checkbox" className="peer" />

            <div className="collapse-title text-xl font-medium">
              NFT MILESTONE
            </div>
            <div className="collapse-content pl-10">
              <p>NFT Minting</p>
              <p>NFT Creator Launching</p>
              <p>NFT Multi - Marketplace Launching</p>
              <p>NFT Minting service on SNS</p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-content  bg-base-200 w-4/5 mt-5 text-left"
          >
            <input type="checkbox" className="peer" />

            <div className="collapse-title text-xl font-medium">
              METAVERSE MILESTONE
            </div>
            <div className="collapse-content pl-10">
              <p>Development ZELIX Blockchain frame-work</p>
              <p>Multi-chain bridge</p>
              <p>Supports all metaverse token bridges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
