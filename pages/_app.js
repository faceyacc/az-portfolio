import '@/styles/globals.css'
import Sidebar from '@/components/sidebar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </>
  )
}
