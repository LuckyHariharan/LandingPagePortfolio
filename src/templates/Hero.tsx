import Image from 'next/image';
import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import BackgroundImage from './background.jpg'; // Adjust the path to your background image
import { Logo } from './Logo';
import LuckyProfile from './LuckyProfile.jpeg';

const Hero = () => (
  <Background>
    <div className="absolute inset-0 z-[-1]">
      <Image
        src={BackgroundImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
    </div>

    <Section yPadding="py-6">
      <NavbarTwoColumns
        logo={<Logo xl />}
        // eslint-disable-next-line react/no-children-prop
        children={
          <>
            <li>
              <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
                GitHub
              </Link>
            </li>
            <li>
              <Link href="/">Sign in</Link>
            </li>
          </>
        }
      ></NavbarTwoColumns>
    </Section>
    <Section yPadding="py-4">
      <div className="flex justify-center">
        <Image alt="Lucky's profile image" src={LuckyProfile} height="200" />
      </div>
      <div className="flex justify-around md:hidden md:h-0">
        <Link href="/">
          <svg
            width="60"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* GitHub SVG */}
          </svg>
        </Link>

        <Link href="/">
          <svg
            width="60"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Another SVG */}
          </svg>
        </Link>

        <Link href="/">resume</Link>
      </div>
    </Section>
    <Section yPadding="pt-4 pb-32">
      <HeroOneButton
        title={
          <>
            {'Ex Actuarial\n'}
            <span className="text-primary-500">Software Engineer</span>
          </>
        }
        description="Hi! My name is Lucky and this is my frontend and android development portfolio."
        button={
          <Link href="#ProjectWork">
            <Button xl>See My Portfolio</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
