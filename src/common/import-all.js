/**
 * @returns {string}
 */
function getBasename (path) {
  return path.match(/([\w-]+)\.js$/)[1]
}

/**
 * @returns {object} modules
 */
export default function importAll (req) {
  const modules = req.keys()
  const result = {}

  modules
    .filter(path => path.match(/\.js$/))
    .forEach(path => {
      const basename = getBasename(path)

      result[basename] = req(path).default
    })

  return result
}
