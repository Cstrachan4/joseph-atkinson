import { useRouter } from 'next/router'
import { AnimatePresence } from "framer-motion";
import { useTransitionFix } from '../lib/transition-fix';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const transitionCallback = useTransitionFix();

  const handleExitComplete = () => {
    transitionCallback();
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 })
    }
  }

  return (
    <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}

export default MyApp;
