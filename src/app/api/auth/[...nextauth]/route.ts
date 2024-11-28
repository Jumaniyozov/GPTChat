import GithubProvider from 'next-auth/providers/github'
import NextAuth, { AuthOptions } from 'next-auth'

const authOptions: AuthOptions = {
  callbacks: {
    async signIn({
      profile,
    }: {
      profile: { login: string | null | undefined }
    }) {
      return profile.login === 'Jumaniyozov'
    },
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
