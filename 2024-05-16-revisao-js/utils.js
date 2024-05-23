export function queryString() {
    const search = new URLSearchParams(window.location.href)
    return search
}