/**
 * Les slides de la présentation
 */
const uri = '/nuxt-introduction'
module.exports = {
  uri,
  icon: '/images/icon-nuxt.png',
  title: 'Introduction à Nuxt.js',
  slides: [
    {
      title: 'Nuxt.js',
      uri: uri + '/'
    },
    {
      title: 'Ma slide',
      uri: uri + '/slide-1'
    },
    {
      title: 'Ma deuxième slide',
      uri: uri + '/slide-2'
    },
    {
      title: 'mon troisième slide',
      uri: uri + '/slide-3'
    }
  ]
}
