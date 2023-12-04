import type { ReactNode } from 'react';

type IFooterIconListProps = {
  children: ReactNode;
};

const FooterIconList = (props: IFooterIconListProps) => (
  <div className="footer-icon-list flex justify-between space-x-12 ">
    {props.children}

    <style jsx>
      {`
        .footer-icon-list :global(a) {
          @apply text-gray-500;
        }

        .footer-icon-list :global(a:hover) {
          @apply text-gray-700;
        }

        .footer-icon-list :global(svg) {
          @apply fill-current w-12 h-12;
        }
      `}
    </style>
  </div>
);

export { FooterIconList };
