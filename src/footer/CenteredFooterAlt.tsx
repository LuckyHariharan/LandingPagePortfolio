import type { ReactNode } from 'react';

import { FooterIconList } from './FooterIconList';

type ICenteredFooterAltProps = {
  iconList: ReactNode;
  logo: ReactNode;
};

const CenteredFooterAlt = (props: ICenteredFooterAltProps) => (
  <div className="text-center">
    {props.logo}
    <nav>
      <ul className="navbar mt-5 flex flex-row justify-between  text-gray-800"></ul>
    </nav>
    <div className="flex justify-center ">
      <FooterIconList>{props.iconList}</FooterIconList>
    </div>
    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooterAlt };
