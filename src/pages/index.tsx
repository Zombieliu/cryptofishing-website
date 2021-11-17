import type { NextPage } from 'next';
import Head from 'next/head';
import Home from './home';
import Check from './haha';

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>david</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <Check></Check>
        {/*<Home></Home>*/}
      </header>
    </div>
  );
};

export default IndexPage;
