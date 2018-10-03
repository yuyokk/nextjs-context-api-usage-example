import Link from 'next/link';
import { LangContext } from '../context';

function Nav() {
  return (
    <LangContext.Consumer>
      {({ lang, changeLang }) => {
        return (
          <div className="site-nav">
            <Link href="/">
              <a>index</a>
            </Link>{' '}
            |{' '}
            <Link href="/about">
              <a>about</a>
            </Link>{' '}
            | language = {lang}
            <button onClick={() => changeLang('ES')}>Change language to ES</button>
          </div>
        );
      }}
    </LangContext.Consumer>
  );
}

export default Nav;
