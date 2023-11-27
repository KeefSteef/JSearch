import LangSearch from '../LangSearch/LangSearch.jsx'
import { useCategoryParams } from '../../hooks/useCategoryParams.js'

const mockData = [
  {
    value: 'php',
    label: 'PHP',
  },

  {
    value: 'js',
    label: 'JavaScript',
  },
]

function LangSearchParamsConnect() {
  const { langs, toggleSearchParams, removeParam } = useCategoryParams()
  return (
    <LangSearch
      langs={mockData}
      selectedLangs={langs}
      removeParam={removeParam}
      optionClickHandler={toggleSearchParams}
    />
  )
}

export default LangSearchParamsConnect
