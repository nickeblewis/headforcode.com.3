const base = {
  name: 'HeadForCode',
  url: 'https://headfoecode.com'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} - DevOps. Code. Remote`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } DevOps. Code. Remote`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'DevOps. Code. Remote',

  /* url */
  siteUrl: base.url,
  siteImage: 'preview.png',
  // pathPrefix: '',

  // author
  authorName: 'nick lewis'
};

module.exports = config;
