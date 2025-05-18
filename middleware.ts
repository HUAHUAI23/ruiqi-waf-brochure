import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, isValidLocale, locales } from './lib/i18n';

// Static file extensions that should be served from /public
const staticFileExtensions = ['.svg', '.png', '.jpg', '.jpeg', '.gif', '.ico', '.css', '.js'];

// Get the preferred locale from headers
function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');
  
  if (acceptLanguage) {
    const acceptedLanguages = acceptLanguage
      .split(',')
      .map(item => item.split(';')[0].trim());
      
    for (const lang of acceptedLanguages) {
      if (lang.startsWith('zh')) return 'zh';
      if (lang.startsWith('en')) return 'en';
    }
  }
  
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if this is a path that might be trying to access a static file
  // but has the locale prefix (like /en/logo.svg or /zh/waf-zh.png)
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) {
    // Extract the potential file extension
    const fileExtension = pathname.substring(pathname.lastIndexOf('.'));
    
    // If this is a static file request with a locale prefix
    if (staticFileExtensions.includes(fileExtension)) {
      // Remove the locale prefix
      const locale = pathname.split('/')[1];
      const staticPath = pathname.replace(`/${locale}`, '');
      
      // Rewrite to the correct path in public directory
      return NextResponse.rewrite(new URL(staticPath, request.url));
    }
    
    // If it's not a static file with locale, continue as normal
    return NextResponse.next();
  }
  
  // If no locale in pathname, redirect to locale from accept-language or default
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url);
  
  return NextResponse.redirect(newUrl);
}

// Only run the middleware on specific paths
export const config = {
  matcher: [
    // Match all paths except for api routes, _next, and direct static files in public
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 