/** @jsx jsx */
import { jsx } from '@emotion/core';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {
  wrapperStyles,
} from './LayoutTheme.styles';

const LayoutTheme = ({ children }) => {
  return (
    <div>
      <Header />
        <div css={wrapperStyles}>
          { children }
        </div>
      <Footer />
    </div>
  );
}

export default LayoutTheme;