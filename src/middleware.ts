// export { default } from "next-auth/middleware";

import { withAuth, NextRequestWithAuth } from "next-auth/middleware";

export default withAuth(
  // Augments your request with the user's token
  function middleware(request: NextRequestWithAuth) {
    console.log(request.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "admin",
    },
  }
);

export const config = { matcher: ["/dashboard"] };
