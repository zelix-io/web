import * as React from 'react';
import { Link as ScrollLink } from 'react-scroll';
interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById(
      'my-drawer-4'
    ) as HTMLInputElement;
    if (drawerCheckbox) drawerCheckbox.checked = false;
  };

  return (
    <div className="navbar bg-base-100 max-w-7xl m-auto">
      <div className="navbar-start w-full flex justify-between items-center">
        <a className="btn btn-ghost normal-case text-xl hover:bg-transparent">
          <img src="/images/zx-logo.png" alt="logo" className="w-32" />
        </a>

        <div className="drawer drawer-end w-auto">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer-4" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="drawer-side z-10">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu p-4 h-full bg-base-100 text-base-content w-60 text-lg active:bg-transparent active:text-black">
              <li>
                <ScrollLink to="milestone" smooth="true" onClick={closeDrawer}>
                  Milestone
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="team" smooth="true" onClick={closeDrawer}>
                  Team
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="advisor" smooth="true" onClick={closeDrawer}>
                  Advisor
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="partners" smooth="true" onClick={closeDrawer}>
                  Partners
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="exchanges" smooth="true" onClick={closeDrawer}>
                  Exchanges
                </ScrollLink>
              </li>
              <li>
                <a>Whitepaper</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-lg">
          <li>
            <ScrollLink
              to="milestone"
              smooth="true"
              className="hover:bg-transparent"
            >
              Milestone
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="team"
              smooth="true"
              className="hover:bg-transparent"
            >
              Team
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="advisor"
              smooth="true"
              className="hover:bg-transparent"
            >
              Advisior
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="partners"
              smooth="true"
              className="hover:bg-transparent"
            >
              Partners
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="exchanges"
              smooth="true"
              className="hover:bg-transparent"
            >
              Exchanges
            </ScrollLink>
          </li>
          <li>
            <a className="hover:bg-transparent">Whitepaper</a>
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
      {/* <div className="navbar-end"><a className="btn">Button</a></div> */}
    </div>
  );
};

export default Header;
