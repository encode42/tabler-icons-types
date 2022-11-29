[Tabler Icons]: https://tabler-icons.io/
[NPM]: https://www.npmjs.com/package/@encode42/tabler-icons-types
[NPM Badge]: https://raw.githubusercontent.com/intergrav/devins-badges/v2/assets/cozy/available/npm_vector.svg
[Support]: https://encode42.dev/support
[Support Badge]: https://raw.githubusercontent.com/intergrav/devins-badges/v2/assets/cozy/social/discord-singular_vector.svg
[Documentation]: https://encode42.github.io/tabler-icons-types/docs
[Documentation Badge]: https://raw.githubusercontent.com/intergrav/devins-badges/v2/assets/cozy/documentation/generic_vector.svg

# Tabler Icons Types
### Simple library that provides React types for [Tabler Icons].

[![NPM Badge]][NPM] [![Documentation Badge]][Documentation] [![Support Badge]][Support]

### ⚙️ Features
- Typescript definition file containing all available Tabler Icons.
- Array of every Tabler Icon name/type.
- Truncated and normalized [tags.json](https://github.com/tabler/tabler-icons/blob/HEAD/tags.json).
- Targeted towards [Tabler's React icons](https://github.com/tabler/tabler-icons/tree/HEAD/icons-react).
- Package automatically updates when Tabler Icons updates.

### 🔧 Including
<details>
<summary>
Node.js
</summary>

NPM
```sh
npm i @encode42/tabler-icons-types
```

Yarn
```sh
yarn add @encode42/tabler-icons-types
```

---

Javascript
```js
const { TablerIconsType } = require("@encode42/tabler-icons-types");
```

Typescript
```js
import { TablerIconsType } from "@encode42/tabler-icons-types";
```
</details>

<details>
<summary>
Deno
</summary>

> It's recommended to use a versioned link, e.g. `@encode42/tabler-icons-types@1.103.2`

```js
import { TablerIconsType } from "https://cdn.jsdelivr.net/npm/@encode42/tabler-icons-types/dist/esm.js";
```
</details>

### 🔨 Building
Ensure [pnpm](https://pnpm.io/) and [Node.js](https://nodejs.org/en/) are installed.

1. Enter the directory containing the `tabler-icons-types` source code in your terminal.
2. Install the build dependencies via `pnpm install`.
3. Run `pnpm run build` to generate the Node.js and browser modules.  
<sub>This will automatically update `@tabler/icons` if an update is available.</sub>

Generated files:
- `./cjs/`: CommonJS bundle, used by Node.js.
- `./esm/`: ES module for browser script modules.
- `./lib/`: Built ECMAScript files.
