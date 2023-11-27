import Categories from '../Categories/Categories.jsx'
import { useCategoryParams } from '../../hooks/useCategoryParams.js'

const categories = ['html', 'js', 'php', 'ruby']

function CategoriesSearchParamsConnect() {
  const { toggleSearchParams, isCategorySelected } = useCategoryParams()
  return (
    <Categories
      categories={categories}
      isCategoryLangSelect={isCategorySelected}
      categoryClickHandler={toggleSearchParams}
    />
  )
}

export default CategoriesSearchParamsConnect
