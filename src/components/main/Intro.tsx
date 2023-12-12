import * as React from 'react';
import Typed from 'react-typed';

interface IIntroProps {}

const Intro: React.FunctionComponent<IIntroProps> = (props) => {
  // const openModal = React.useCallback(() => {
  //   const modalElement = document.getElementById(
  //     'my_modal_3'
  //   ) as HTMLDialogElement | null;
  //   if (modalElement) {
  //     modalElement.showModal();
  //   }
  // }, []);

  // React.useEffect(() => {
  //   openModal();
  // }, []);

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
      <div className="relative">
        <dialog id="my_modal_3" className="modal">
          <div
            className="modal-box h-auto"
            style={{
              backgroundImage: "url('/images/back-modal.jpg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              paddingTop: '3rem', // ✕ 버튼의 크기와 여백을 고려한 상단 패딩
            }}
          >
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-white absolute top-2 right-2 z-10">
                ✕
              </button>
            </form>

            <div className="my-div pb-16">
              <h3 className="font-bold text-lg">Dear ZELIX Community,</h3>

              <div
                id="text-box"
                className="overflow-y-auto my-text-box overflow-hidden"
              >
                <p>
                  <br />
                  [Exciting Rebranding News: ONSTON is rebranding to ZELIX]
                  <br />
                  <br />
                  Token Swap Details:
                  <br />
                  <br />
                  - Previous Token Name: ONSTON
                  <br />
                  - New Token Name: ZELIX
                  <br />
                  - ZELIX Token Contract : 0x0257ffd7ea2ebba4aaa090c7adbdd032a08c1f74
                  <br />
                  - Swap Ratio: For every 1 ONSTON token, you will receive 10
                  ZELIX tokens.
                  <br />
                  - Swap Platforms: Huobi, Kucoin, Poloniex, Gate.io, Mexc
                  <br />
                  - Snapshot Date: October 10, 00:00 (GMT+8)
                  <br />
                  <br />
                  For those who wish to personally request a swap, please use
                  the following link: <br />
                  <a
                    href="https://forms.gle/96RYvuUiv4veqBGGA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-secondary"
                  >
                    https://forms.gle/96RYvuUiv4veqBGGA
                  </a>
                  <br />
                  - Application period : 2023.10.10 00:00 (GMT+0) ~ 2023.10.16
                  24:00 (GMT+0)
                  <br />
                  <br />
                  More Detail:
                  <br />
                  <a
                    href="https://link.medium.com/sx4eaPzsyDb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-secondary"
                  >
                    https://link.medium.com/sx4eaPzsyDb
                  </a>
                  <br />
                  <br />
                  [Notice on termination of ONSTON Wallet service]
                  <br />
                  <br />
                  As ONSTON tokens are swapped to ZELIX, ONSTON wallet service
                  will be terminated. (
                  <a
                    href="http://onston.club/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-secondary"
                  >
                    http://onston.club/
                  </a>
                  )
                  <br />
                  ONSTON wallet service will be terminated according to the
                  schedule below and swap to ZELIX according to application
                  details.
                  <br />
                  <br />
                  ONSTON Wallet Service Details:
                  <br />
                  <br />
                  - Wallet deposit/withdrawal suspension: 2023.10.11 00:00
                  (GMT+9)~
                  <br />
                  - Wallet service terminated: 2023.10.31 24:00 (GMT+9)
                  <br />
                  - Services (withdrawal and swap) are not supported for assets
                  that have not been applied for and withdrawn within the
                  relevant period.
                  <br />
                  <br />
                  For those who wish to request withdrawal and swap, please use
                  the following link:
                  <br />
                  <a
                    href=" https://forms.gle/pHinoShqENvNtC6v9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-secondary"
                  >
                    https://forms.gle/pHinoShqENvNtC6v9
                  </a>
                  <br />
                  - Application period : 2023.10.11 00:00 (GMT+9) ~ 2023.10.24
                  24:00 (GMT+9)
                  <br />
                  <br />
                  With deep appreciation,
                  <br />
                  The ZELIX Team
                </p>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Intro;
