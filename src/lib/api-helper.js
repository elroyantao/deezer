export const callApi = (url, options) => {
  return fetch(url, options)
    .then((response) => (
        response.ok
        ? response.json()
        : Promise.reject(response.text())
      ),
      (error) => Promise.reject(error)
    )
    .catch((error) => ({ error }))
}
