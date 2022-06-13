# ThemeMirror [![test](https://github.com/vadimdemedes/thememirror/actions/workflows/test.yml/badge.svg)](https://github.com/vadimdemedes/thememirror/actions/workflows/test.yml)

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

## Themes

### Amy

<img src="screenshots/amy.jpg" width="364">

_Author: William D. Neumann_

```js
import {amy} from 'thememirror';
```

### Ayu Light

<img src="screenshots/ayu-light.jpg" width="364">

_Author: Konstantin Pschera_

```js
import {ayuLight} from 'thememirror';
```

### Barf

<img src="screenshots/barf.jpg" width="364">

_Author: unknown_

```js
import {barf} from 'thememirror';
```

### Bespin

<img src="screenshots/bespin.jpg" width="364">

_Author: Michael Diolosa_

```js
import {bespin} from 'thememirror';
```

### Birds of Paradise

<img src="screenshots/birds-of-paradise.jpg" width="364">

_Author: Joe Bergantine_

```js
import {birdsOfParadise} from 'thememirror';
```

### Boys and Girls

<img src="screenshots/boys-and-girls.jpg" width="364">

_Author: unknown_

```js
import {boysAndGirls} from 'thememirror';
```

### Clouds

<img src="screenshots/clouds.jpg" width="364">

_Author: Fred LeBlanc_

```js
import {clouds} from 'thememirror';
```

### Cobalt

<img src="screenshots/cobalt.jpg" width="364">

_Author: Jacob Rus_

```js
import {cobalt} from 'thememirror';
```

### Cool Glow

<img src="screenshots/cool-glow.jpg" width="364">

_Author: unknown_

```js
import {coolGlow} from 'thememirror';
```

### Dracula

<img src="screenshots/dracula.jpg" width="364">

_Author: Zeno Rocha_

```js
import {dracula} from 'thememirror';
```

### Espresso

<img src="screenshots/espresso.jpg" width="364">

_Author: TextMate_

```js
import {espresso} from 'thememirror';
```

### Noctis Lilac

<img src="screenshots/noctis-lilac.jpg" width="364">

_Author: Liviu Schera_

```js
import {noctisLilac} from 'thememirror';
```

### Rosé Pine Dawn

<img src="screenshots/rose-pine-dawn.jpg" width="364">

_Author: Rosé Pine_

```js
import {rosePineDawn} from 'thememirror';
```

### Smoothy

<img src="screenshots/smoothy.jpg" width="364">

_Author: Kenneth Reitz_

```js
import {smoothy} from 'thememirror';
```

### Solarized Light

<img src="screenshots/solarized-light.jpg" width="364">

_Author: Ethan Schoonover_

```js
import {solarizedLight} from 'thememirror';
```

### Tomorrow

<img src="screenshots/tomorrow.jpg" width="364">

_Author: Chris Kempson_

```js
import {tomorrow} from 'thememirror';
```

## API

### createTheme(options)

Create your own theme.

#### options

##### variant

Type: `'light' | 'dark'`

Theme variant. Determines which styles CodeMirror will apply by default.

##### settings

###### background

Type: `string`

Editor background.

###### foreground

Type: `string`

Default text color.

###### caret

Type: `string`

Caret color.

###### selection

Type: `string`

Selection background.

###### lineHighlight

Type: `string`

Background of highlighted lines.

###### gutterBackground

Type: `string`

Gutter background.

###### gutterForeground

Type: `string`

Text color inside gutter.

##### styles

Type: `TagStyle[]`

Array of styles to customize syntax highlighting. See [`TagStyle`](https://codemirror.net/docs/ref/#language.TagStyle) for a list of available tags to style.

```js
import {createTheme} from 'thememirror';
import {EditorView} from '@codemirror/view';
import {EditorState} from '@codemirror/state';

const myTheme = createTheme({
	variant: 'dark',
	settings: {
		background: '#00254b',
		foreground: '#fff',
		caret: '#fff',
		selectionBackground: '#b36539bf',
		gutterBackground: '#00254b',
		gutterForeground: '#ffffff70',
		lineHighlight: '#00000059',
	},
	styles: [
		{
			tag: t.comment,
			color: '#0088ff',
		},
	],
});

const state = EditorState.create({
	doc: 'my source code',
	extensions: [myTheme],
});

const view = new EditorView({
	parent: document.querySelector('#editor'),
	state,
});
```
