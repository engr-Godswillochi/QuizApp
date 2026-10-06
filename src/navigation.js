export const isProtectedResultRoute = (path) => path === '/results' || path === '/review'

export const canOpenRoute = (path, submitted) => !isProtectedResultRoute(path) || submitted
