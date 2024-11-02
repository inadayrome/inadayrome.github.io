import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-mono)]`}
      >
        <div className='max-w-full flex flex-1 justify-between'>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href='/' passHref>
                  <NavigationMenuLink>inadayrome</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList className='gap-4'>
              <NavigationMenuItem>
                <Link href='/Projects' passHref>
                  <NavigationMenuLink>Projects</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href='/About' passHref>
                  <NavigationMenuLink>About</NavigationMenuLink>
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
