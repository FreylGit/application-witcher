export const getPersonPageId = (url) => {
  return Number(url.split('=')[1])
}
