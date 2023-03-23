export const getApiResource = async (url) => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      return false
    }
    return await response.json()
  } catch (error) {
    return false
  }
}
