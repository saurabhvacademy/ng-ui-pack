
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ng-ui-pack/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ng-ui-pack"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 652, hash: '84ee6b3b2c7a9b6f9640de1281e9f78efb5973a389b8e02fd46e8c1bda735667', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 957, hash: 'cb2c314d58c75853baf8082043124c06969286129a13f042d7b54e9113ccadf7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11830, hash: '97de079c9b9deabec86dbca7481730e5b0a31977c6a04d3a859fbe1662eea817', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FAD7QYSR.css': {size: 83, hash: 'N5XKRxRJzWc', text: () => import('./assets-chunks/styles-FAD7QYSR_css.mjs').then(m => m.default)}
  },
};
