import store from '@/store/index'

export function queryProjectList (queryString, cb) {
  const serviceList = store.state.projectList
  let results = serviceList
  if (queryString !== '' && queryString !== null) {
    results = queryString ? serviceList.filter(createFilter(queryString)) : serviceList
  }
  if (cb !== undefined) {
    cb(results)
  } else {
    return results
  }
}

function createFilter (queryString) {
  return (service) => {
    return (service.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
  }
}
