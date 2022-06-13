import {tags as t} from '@lezer/highlight';
import createTheme from '../create-theme.js';

// Author: Joe Bergantine
export const birdsOfParadise = createTheme({
	variant: 'dark',
	settings: {
		background: '#3b2627',
		foreground: '#E6E1C4',
		caret: '#E6E1C4',
		selection: '#16120E',
		gutterBackground: '#3b2627',
		gutterForeground: '#E6E1C490',
		lineHighlight: '#1F1611',
	},
	styles: [
		{
			tag: t.comment,
			color: '#6B4E32',
		},
		{
			tag: [t.keyword, t.operator, t.derefOperator],
			color: '#EF5D32',
		},
		{
			tag: t.className,
			color: '#EFAC32',
			fontWeight: 'bold',
		},
		{
			tag: [
				t.typeName,
				t.propertyName,
				t.function(t.variableName),
				t.definition(t.variableName),
			],
			color: '#EFAC32',
		},
		{
			tag: t.definition(t.typeName),
			color: '#EFAC32',
			fontWeight: 'bold',
		},
		{
			tag: t.labelName,
			color: '#EFAC32',
			fontWeight: 'bold',
		},
		{
			tag: [t.number, t.bool],
			color: '#6C99BB',
		},
		{
			tag: [t.variableName, t.self],
			color: '#7DAF9C',
		},
		{
			tag: [t.string, t.special(t.brace), t.regexp],
			color: '#D9D762',
		},
		{
			tag: [t.angleBracket, t.tagName, t.attributeName],
			color: '#EFCB43',
		},
	],
});
