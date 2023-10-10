import * as React from 'react';
import {
  BsTwitter,
  BsDiscord,
  BsFacebook,
  BsCurrencyBitcoin,
  BsTelegram,
  BsGithub,
  BsYoutube,
} from 'react-icons/bs';
import { GrMedium } from 'react-icons/gr';

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <footer className="footer footer-center p-10 bg-base-100 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        {/* <a className="link link-hover">About us</a> */}
        <a
          className="link link-hover"
          href="mailto:contact@official@zelix.io"
          target="_blank"
          rel="noreferrer"
        >
          official@zelix.io
        </a>
        {/* <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a> */}
      </div>
      <div>
        <div className="flex flex-wrap gap-7 justify-center">
          <a
            className="link link-hover"
            href="https://twitter.com/zelix_official"
            target="_blank"
          >
            <BsTwitter fontSize={24} />
          </a>
          <a
            className="link link-hover"
            href="https://discord.gg/PR5ZAGwJ9X"
            target="_blank"
          >
            <BsDiscord fontSize={24} />
          </a>
          <a
            className="link link-hover"
            href="https://www.facebook.com/zelixofficialfb"
            target="_blank"
          >
            <BsFacebook fontSize={24} />
          </a>
          {/* <a className="link link-hover">
            <BsCurrencyBitcoin fontSize={24} />
          </a> */}
          <a
            className="link link-hover"
            href="https://t.me/zelixofficial"
            target="_blank"
          >
            <BsTelegram fontSize={24} />
          </a>
          <a
            className="link link-hover"
            href="https://medium.com/@zelix_official"
            target="_blank"
          >
            <GrMedium fontSize={24} />
          </a>

          {/* <a className="link link-hover">
            <BsGithub fontSize={24} />
          </a>
          <a className="link link-hover">
            <BsYoutube fontSize={24} />
          </a> */}
        </div>
      </div>
      <div>
        <p>Copyright © 2023 ZELIX All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
