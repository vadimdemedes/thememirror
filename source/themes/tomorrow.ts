import {tags as t} from '@lezer/highlight';
import createTheme from '../create-theme.js';

// Author: Chris Kempson
export const tomorrow = createTheme({
	variant: 'light',
	settings: {
		background: '#FFFFFF',
		foreground: '#4D4D4C',
		caret: '#AEAFAD',
		selection: '#D6D6D6',
		gutterBackground: '#FFFFFF',
		gutterForeground: '#4D4D4C80',
		lineHighlight: '#EFEFEF',
	},
	styles: [
		{
			tag: t.comment,
			color: '#8E908C',
		},
		{
			tag: [t.variableName, t.self, t.propertyName, t.attributeName, t.regexp],
			color: '#C82829',
		},
		{
			tag: [t.number, t.bool, t.null],
			color: '#F5871F',
		},
		{
			tag: [t.className, t.typeName, t.definition(t.typeName)],
			color: '#C99E00',
		},
		{
			tag: [t.string, t.special(t.brace)],
			color: '#718C00',
		},
		{
			tag: t.operator,
			color: '#3E999F',
		},
		{
			tag: [t.definition(t.propertyName), t.function(t.variableName)],
			color: '#4271AE',
		},
		{
			tag: t.keyword,
			color: '#8959A8',
		},
		{
			tag: t.derefOperator,
			color: '#4D4D4C',
		},
	],
});
