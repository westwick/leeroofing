"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/next";

// Drop analytics events for the Keystatic admin UI so those pages don't show
// up in Vercel Analytics.
export default function Analytics() {
  return (
    <VercelAnalytics
      beforeSend={(event) => {
        try {
          const { pathname } = new URL(event.url);
          if (pathname === "/keystatic" || pathname.startsWith("/keystatic/")) {
            return null;
          }
        } catch {
          // If the URL can't be parsed, fall through and send the event.
        }
        return event;
      }}
    />
  );
}
