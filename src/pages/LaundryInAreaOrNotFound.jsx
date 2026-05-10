import { useParams } from 'react-router-dom'
import { resolveAreaPage } from '../data/areaLaundryData'
import AreaLaundryPage from './AreaLaundryPage'
import NotFound from './NotFound'

const LAUNDRY_PREFIX = 'laundry-in-'
const DRY_PREFIX = 'dry-cleaning-in-'

/**
 * Resolves /laundry-in-{area} and /dry-cleaning-in-{area}.
 * Static routes in App take precedence.
 */
function LaundryInAreaOrNotFound() {
  const { slug } = useParams()

  if (!slug) {
    return <NotFound />
  }

  if (slug.startsWith(LAUNDRY_PREFIX)) {
    const areaKey = slug.slice(LAUNDRY_PREFIX.length)
    const area = resolveAreaPage(areaKey, 'laundry')
    if (!area) return <NotFound />
    return <AreaLaundryPage area={area} />
  }

  if (slug.startsWith(DRY_PREFIX)) {
    const areaKey = slug.slice(DRY_PREFIX.length)
    const area = resolveAreaPage(areaKey, 'dry-cleaning')
    if (!area) return <NotFound />
    return <AreaLaundryPage area={area} />
  }

  return <NotFound />
}

export default LaundryInAreaOrNotFound
