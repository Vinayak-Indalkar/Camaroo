import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORTS = [8080, 3000, 5000, 5173, 8000, 8081];
const HOST = '0.0.0.0';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

function requestHandler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Range');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/standalone.html';
  }

  const filePath = path.join(__dirname, reqPath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  const tryReadFile = (file, resContentType, retries = 5) => {
    fs.readFile(file, (readErr, content) => {
      if (readErr) {
        if (retries > 0 && (readErr.code === 'EBUSY' || readErr.code === 'EPERM' || readErr.code === 'EAGAIN')) {
          setTimeout(() => tryReadFile(file, resContentType, retries - 1), 80);
          return;
        }
        console.log(`[500] ${req.method} ${req.url}: ${readErr.code}`);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`500 Server Error: ${readErr.code}`);
      } else {
        console.log(`[200] ${req.method} ${req.url}`);
        res.writeHead(200, { 'Content-Type': resContentType });
        res.end(content);
      }
    });
  };

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      const fallbackPath = path.join(__dirname, 'standalone.html');
      tryReadFile(fallbackPath, 'text/html; charset=utf-8');
      return;
    }

    tryReadFile(filePath, contentType);
  });
}

// Start listeners across all ports
PORTS.forEach(port => {
  try {
    const s = http.createServer(requestHandler);
    s.listen(port, HOST, () => {
      console.log(`[Devi Fisheries ERP] Active on http://localhost:${port} and http://127.0.0.1:${port}`);
    });
    s.on('error', (e) => {
      // Port in use or restricted, quietly ignore
    });
  } catch (e) {}
});
