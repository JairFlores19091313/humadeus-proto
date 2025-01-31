import express from 'express';
import { createPageRenderer } from 'vite-plugin-ssr';

const isProduction = process.env.NODE_ENV === 'production';
const root = process.cwd();
const app = express();

let viteDevServer;
if (!isProduction) {
  const vite = await import('vite');
  viteDevServer = await vite.createServer({
    root,
    server: { middlewareMode: true },
  });
  app.use(viteDevServer.middlewares);
}

const renderPage = createPageRenderer({ viteDevServer, isProduction, root });

app.get('*', async (req, res) => {
  const pageContextInit = { urlOriginal: req.originalUrl };
  const pageContext = await renderPage(pageContextInit);
  
  if (pageContext.httpResponse) {
    const { statusCode, body } = pageContext.httpResponse;
    res.status(statusCode).send(body);
  } else {
    res.status(404).send('Página no encontrada');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});