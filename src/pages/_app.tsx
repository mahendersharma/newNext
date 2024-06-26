// _app.tsx
import { AppProps } from 'next/app';
import Chakra from '../chakra';
import ErrorBoundary from '../pages/components/ErrorBoundary';
import Navbar from '../pages/components/Navbar'; // Adjust the path as per your project structure

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra>
      <ErrorBoundary>
        <Navbar />
        <Component {...pageProps} />
      </ErrorBoundary>
    </Chakra>
  );
}

export default MyApp;
