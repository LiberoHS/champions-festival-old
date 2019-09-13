import { useMediaQuery } from 'react-responsive';

const isDesktop = useMediaQuery({ minWidth: 992 });
const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
const isMobile = useMediaQuery({ maxWidth: 767 });
const isNotMobile = useMediaQuery({ minWidth: 768 });
const isNotTablet = useMediaQuery({ minWidth: 992 });

module.exports = isMobile;

// export const Desktop = ({ children }) => {
//   const isDesktop = useMediaQuery({ minWidth: 992 })
//   return isDesktop ? children : null
// }
//
// export const Tablet = ({ children }) => {
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
//   return isTablet ? children : null
// }
//
// export const Mobile = ({ children }) => {
//   const isMobile = useMediaQuery({ maxWidth: 767 })
//   return isMobile ? children : null
// }
//
// export const Default = ({ children }) => {
//   const isNotMobile = useMediaQuery({ minWidth: 768 })
//   return isNotMobile ? children : null
// }
