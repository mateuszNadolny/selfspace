import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
    publicRoutes: [
        '/',
        '/dashboard',
        '/focus',
        '/meditation',
        '/breathing',
        '/sounds',
        '/entries',
        '/journal',
    ],
    debug: true,
})

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
