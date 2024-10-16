import fs from 'fs';
import path from 'path';
import { Proxy } from '@domoinc/ryuu-proxy';
import { createRequire } from 'module';

const manifest = createRequire(import.meta.url)('./public/manifest.json');

let tempManifest;
const tempPath = path.join(process.cwd(), '.tmp', 'manifest.json');
try {
  tempManifest = fs.readFileSync(tempPath, 'utf8');
  tempManifest = JSON.parse(tempManifest);
} catch (e) {
  // No overrides selected
}
const hasOverrides = tempManifest !== undefined;

const config = {
  manifest: hasOverrides ? tempManifest : manifest,
};

const proxy = new Proxy(config).express();

export default proxy;
