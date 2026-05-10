/**
 * Injects JSON-LD into document head (safe stringify for inline script).
 */
function JsonLd({ id, data }) {
  if (!data) return null
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default JsonLd
