// import { Role } from '@/types/role';

export type SiteConfig = {
    name: string;
    description: string;
    navItems: NavItem[];
    navMenuItems: NavItem[];
    portalNavItems: NavItem[];
    portalNavMenuItems: NavItem[];
    links: {
      [key: string]: string;
    };
  };
  
  export type NavItem = {
    label: string;
    href: string;
    // roles?: Role[];
  };
  
  export const siteConfig = {
    name: 'Portfolio-Classroom-Project',
    description: 'Participated in a Hackathon host by Code Your Dreams where we created a classroom platform for CYD Hub.',
    navItems: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Painting Parties',
        href: '/paintingparties',
      },
      {
        label: 'About',
        href: '/about',
      },
  
      {
        label: 'Link Tree',
        href: '/linktree',
      },
    ],
    navMenuItems: [
      // {
      // 	label: "Buy me a coffee",
      // 	href: "/", //  Add Stripe donate link here in case 
      // },
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'About',
        href: '/about',
      },
  
      {
        label: 'Painting Parties',
        href: '/paintingparties',
      },
      {
        label: 'Sign Up',
        href: '/portal',
      },
      {
        label: 'Link Tree',
        href: '/linktree',
      },
    ],
    portalNavItems: [
      {
        label: 'Courses',
        href: '/portal/courses',
        // roles: [Role.Superadmin, Role.OrgAdmin, Role.ChapterAdmin, Role.ChapterMember],
      },
      {
        label: 'Users',
        href: '/portal/users',
        // roles: [Role.Superadmin, Role.OrgAdmin, Role.ChapterAdmin],
      },
      {
        label: 'Account',
        href: '/portal/account',
        // roles: [Role.Superadmin, Role.OrgAdmin, Role.ChapterAdmin, Role.ChapterMember],
      },
    ],
    portalNavMenuItems: [
      {
        label: 'Courses',
        href: '/portal/courses',
        // roles: [Role.Superadmin, Role.OrgAdmin, Role.ChapterAdmin, Role.ChapterMember],
      },
      {
        label: 'Users',
        href: '/portal/users',
        // roles: [Role.Superadmin, Role.OrgAdmin, Role.ChapterAdmin],
      },
      {
        label: 'Account',
        href: '/portal/account',
        // roles: [Role.Superadmin, Role.OrgAdmin, Role.ChapterAdmin, Role.ChapterMember],
      },
    ],
    links: {
      // donate: "https://localhost:3000", // Add Stripe donate link here
    },
  };
  