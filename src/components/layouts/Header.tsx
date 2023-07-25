import * as React from 'react';
import { Link as ScrollLink } from 'react-scroll';
interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className="navbar bg-base-100 max-w-7xl m-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <ScrollLink to="milestone" smooth="true">
                Milestone
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="team" smooth="true">
                Team
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="advisor" smooth="true">
                Advisior
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="partners" smooth="true">
                Partners
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="exchanges" smooth="true">
                Exchanges
              </ScrollLink>
            </li>
            <li>
              <a>Whitepaper</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img src="/images/zx-logo.png" alt="logo" className="w-20" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ScrollLink to="milestone" smooth="true">
              Milestone
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="team" smooth="true">
              Team
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="advisor" smooth="true">
              Advisior
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="partners" smooth="true">
              Partners
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="exchanges" smooth="true">
              Exchanges
            </ScrollLink>
          </li>
          <li>
            <a>Whitepaper</a>
          </li>
          {/* <li tabIndex={0}>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Header;
