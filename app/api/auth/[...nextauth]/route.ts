import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

// NextAuth will implicitly close the response (by calling res.end, res.send or similar), so you should not run code after NextAuth in the function body. Using return NextAuth makes sure you don't forget that.

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
