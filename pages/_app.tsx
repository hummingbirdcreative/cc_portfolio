import '../styles/global.css';
import type { AppProps } from 'next/app';
import { Fira_Sans, Work_Sans } from '@next/font/google';

const firaSans = Fira_Sans({
  weight: ['400', '900'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --firaSans-font: ${firaSans.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
