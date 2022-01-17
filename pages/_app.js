import { ThemeProvider } from 'theme-ui';
import Layout from '../components/Layout';

import theme from '../theme';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
