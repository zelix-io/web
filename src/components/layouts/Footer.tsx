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

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <footer className="footer footer-center p-10 bg-base-100 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-7">
          <a className="link link-hover">
            <BsTwitter fontSize={24} />
          </a>
          <a className="link link-hover">
            <BsDiscord fontSize={24} />
          </a>
          <a className="link link-hover">
            <BsFacebook fontSize={24} />
          </a>
          <a className="link link-hover">
            <BsCurrencyBitcoin fontSize={24} />
          </a>
          <a className="link link-hover">
            <BsTelegram fontSize={24} />
          </a>
          <a className="link link-hover">
            <BsGithub fontSize={24} />
          </a>
          <a className="link link-hover">
            <BsYoutube fontSize={24} />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 Zelix All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
