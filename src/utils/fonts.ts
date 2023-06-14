import { Nunito } from 'next/font/google';

/** @dev define NunitoFonts */
const NunitoFonts = Nunito({
  weight: ['200', '300', '400', '600', '700', '800', '900'],
  variable: '--font-nunito',
  subsets: ['vietnamese'],
  display: 'swap',
});

// @exports
export default NunitoFonts;
