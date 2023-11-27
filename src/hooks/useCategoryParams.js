import { useSearchParams } from 'react-router-dom'

export function useCategoryParams() {
  const [searchParams, setSearchParams] = useSearchParams()
  const langs = searchParams.getAll('lang')

  function isCategorySelected(lang) {
    return searchParams.has('lang', lang)
  }

  function removeParam(lang) {
    searchParams.delete('lang', lang)
    setSearchParams(searchParams)
  }

  function addParam(lang) {
    searchParams.append('lang', lang)
    setSearchParams(searchParams)
  }

  function toggleSearchParams(lang) {
    if (isCategorySelected(lang)) {
      return removeParam(lang)
    }
    return addParam(lang)
  }

  return {
    langs,
    addParam,
    removeParam,
    toggleSearchParams,
    isCategorySelected,
    searchParams,
    setSearchParams,
  }
}
