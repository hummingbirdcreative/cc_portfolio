import Link from 'next/link';

// Navigation Links
// export const NavLink = styled.a`
//   font-family: 'Hind', sans-serif;
//   color: black;
//   font-size: 2rem;
//   line-height: 32px;
//   color: black;
//   transition: 0.4s ease;
//   &:hover {
//     background-color: #defe7b;
//     opacity: 1;
//     cursor: pointer;
//   }
//   @media ${(props) => props.theme.breakpoints.sm} {
//     padding: 0.5rem;
//   }
// `;

export const NavLink = (props) => {
  const { children, href } = props;

  return <Link href={href}>{children}</Link>;
};
