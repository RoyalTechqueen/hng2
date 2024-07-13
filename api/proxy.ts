// api/proxy.js (or proxy.ts)

import { createProxyMiddleware } from 'http-proxy-middleware';

export default function handler(req, res) {
  const proxy = createProxyMiddleware({
    target: 'https://timbu-get-all-products.reavdev.workers.dev/',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '', // remove /api from the path
    },
  });

  proxy(req, res, (result) => {
    if (result instanceof Error) {
      throw result;
    }
  });
}
