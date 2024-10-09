import { Proxy } from '@domoinc/ryuu-proxy';
import fs from 'fs';
import { createRequire } from 'module';

const manifest = createRequire(import.meta.url)('./public/manifest.json');

let tempManifest;
const tempPath = `${process.cwd()}/src/manifest.tmp.json`;
try {
  tempManifest = fs.readFileSync(tempPath, 'utf8');
  tempManifest = JSON.parse(tempManifest);
  fs.unlinkSync(tempPath);
} catch (e) {
  // No overrides selected
}
const hasOverrides = tempManifest !== undefined;

const config = {
  manifest: hasOverrides ? tempManifest : manifest,
};

const proxy = new Proxy(config).express();

export default proxy;
