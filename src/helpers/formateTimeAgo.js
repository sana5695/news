export const formatTimeAgo = (dateString) => {
    const now = new Date()
    const date = new Date(dateString)
    const secondPass = (now.getTime() - date.getTime()) / 1000
    if (secondPass < 60) return `${Math.floor(secondPass)}s ago`
    if (secondPass < 3600) return `${Math.floor(secondPass / 60)}m ago`
    if (secondPass <= 86400) return `${Math.floor(secondPass / 3600)}h ago`
    if (secondPass > 86400) return `${Math.floor(secondPass / 86400)}d ago`
}