import { useParams } from 'react-router-dom'
import { getAreaBySlug } from '../data/areaLaundryData'
import AreaLaundryPage from './AreaLaundryPage'
import NotFound from './NotFound'

/**
 * Resolves /laundry-in-hsr-layout style URLs. Static routes in App take precedence;
 * this only runs for single-segment paths that are not /privacy, /support, etc.
 */
function LaundryInAreaOrNotFound() {
  const { slug } = useParams()
  if (!slug?.startsWith('laundry-in-')) {
    return <NotFound />
  }
  const areaSlug = slug.slice('laundry-in-'.length)
  if (!areaSlug) {
    return <NotFound />
  }
  const area = getAreaBySlug(areaSlug)
  if (!area) {
    return <NotFound />
  }
  return <AreaLaundryPage area={area} />
}

export default LaundryInAreaOrNotFound
