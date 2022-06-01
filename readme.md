# ThemeMirror

> Beautiful themes for [CodeMirror](https://codemirror.net/6/)

## Install

```
npm install thememirror
```

## Usage

```js
import {EditorView} from '@codemirror/view';
import {EditorState} from '@codemirror/state';
import {dracula} from 'thememirror';

const state = EditorState.create({
	doc: 'my source code',
	extensions: [dracula],
});

const view = new EditorView({
	parent: document.querySelector('#editor'),
	state,
});
```

## Available Themes

### Amy

<img src="screenshots/amy.jpg" width="364">

Author: William D. Neumann

```js
import {amy} from 'thememirror';
```

### Ayu Light

<img src="screenshots/ayu-light.jpg" width="364">

Author: Konstantin Pschera

```js
import {ayuLight} from 'thememirror';
```

### Barf

<img src="screenshots/barf.jpg" width="364">

Author: unknown

```js
import {barf} from 'thememirror';
```

### Bespin

<img src="screenshots/bespin.jpg" width="364">

Author: Michael Diolosa

```js
import {bespin} from 'thememirror';
```

### Birds of Paradise

<img src="screenshots/birds-of-paradise.jpg" width="364">

Author: Joe Bergantine

```js
import {birdsOfParadise} from 'thememirror';
```

### Boys and Girls

<img src="screenshots/boys-and-girls.jpg" width="364">

Author: unknown

```js
import {boysAndGirls} from 'thememirror';
```

### Clouds

<img src="screenshots/clouds.jpg" width="364">

Author: Fred LeBlanc

```js
import {clouds} from 'thememirror';
```

### Cobalt

<img src="screenshots/cobalt.jpg" width="364">

Author: Jacob Rus

```js
import {cobalt} from 'thememirror';
```

### Cool Glow

<img src="screenshots/cool-glow.jpg" width="364">

Author: unknown

```js
import {coolGlow} from 'thememirror';
```

### Dracula

<img src="screenshots/dracula.jpg" width="364">

Author: Zeno Rocha

```js
import {dracula} from 'thememirror';
```

### Espresso

<img src="screenshots/espresso.jpg" width="364">

Author: TextMate

```js
import {espresso} from 'thememirror';
```

### Noctis Lilac

<img src="screenshots/noctis-lilac.jpg" width="364">

Author: Liviu Schera

```js
import {noctisLilac} from 'thememirror';
```

### Rosé Pine Dawn

<img src="screenshots/rose-pine-dawn.jpg" width="364">

Author: Rosé Pine

```js
import {rosePineDawn} from 'thememirror';
```

### Smoothy

<img src="screenshots/smoothy.jpg" width="364">

Author: Kenneth Reitz

```js
import {smoothy} from 'thememirror';
```

### Solarized Light

<img src="screenshots/solarized-light.jpg" width="364">

Author: Ethan Schoonover

```js
import {solarizedLight} from 'thememirror';
```

### Tomorrow

<img src="screenshots/tomorrow.jpg" width="364">

Author: Chris Kempson

```js
import {tomorrow} from 'thememirror';
```
