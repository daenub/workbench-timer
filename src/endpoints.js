const API = {
  host: __API_HOST,
  endpoints: {
    projects: q => `projects/autocomplete/?q=${q}/`,
    services: id => `projects/${id}/services/`,
    createHours: id => `projects/${id}/createhours/`,
  },
}

export function endpointUrl({name, urlParams = []}) {
  if (!(name in API.endpoints)) return undefined
  return [API.host, API.endpoints[name](...urlParams)].join("")
}