import { withAuth } from "next-auth/middleware";


export default withAuth({
  secret: process.env.NEXTAUTH_SECRECT,
});

// If you only want to secure certain pages, export a config object with a matcher:
export const config = { matcher: ["/dashboard"] }