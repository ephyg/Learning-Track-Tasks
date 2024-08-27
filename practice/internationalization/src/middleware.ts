import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en)/:path*']
};