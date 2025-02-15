import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { GITHUB_URL, LINKEDIN_URL } from '@/lib/utils';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased font-[family-name:var(--font-geist-mono)]`}
      >
        <div className='max-w-full flex flex-1 justify-between p-4 border-b border-neutral-700'>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href='/' passHref>
                  inadayrome
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList className='gap-4'>
              <NavigationMenuItem>
                <Link href='/projects' passHref>
                  Projects
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href='/about' passHref>
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={LINKEDIN_URL}>
                  <LinkedInLogoIcon />
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={GITHUB_URL}>
                  <GitHubLogoIcon />
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {children}
      </body>
    </html>
  );
}
