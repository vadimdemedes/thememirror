import {tags as t} from '@lezer/highlight';
import createTheme from '../create-theme.js';

// Author: unknown
export const barf = createTheme({
	variant: 'dark',
	settings: {
		background: '#15191EFA',
		foreground: '#EEF2F7',
		caret: '#C4C4C4',
		selectionBackground: '#90B2D557',
		gutterBackground: '#15191EFA',
		gutterForeground: '#aaaaaa95',
		lineHighlight: '#57575712',
	},
	styles: [
		{
			tag: t.comment,
			color: '#6E6E6E',
		},
		{
			tag: [t.string, t.regexp, t.special(t.brace)],
			color: '#5C81B3',
		},
		{
			tag: t.number,
			color: '#C1E1B8',
		},
		{
			tag: t.bool,
			color: '#53667D',
		},
		{
			tag: [t.definitionKeyword, t.modifier, t.function(t.propertyName)],
			color: '#A3D295',
			fontWeight: 'bold',
		},
		{
			tag: [t.keyword, t.moduleKeyword, t.operatorKeyword, t.operator],
			color: '#697A8E',
			fontWeight: 'bold',
		},
		{
			tag: [t.variableName, t.attributeName],
			color: '#708E67',
		},
		{
			tag: [
				t.function(t.variableName),
				t.definition(t.propertyName),
				t.derefOperator,
			],
			color: '#fff',
		},
		{
			tag: t.tagName,
			color: '#A3D295',
		},
	],
});
