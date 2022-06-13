import {tags as t} from '@lezer/highlight';
import createTheme from '../create-theme.js';

// Author: unknown
export const boysAndGirls = createTheme({
	variant: 'dark',
	settings: {
		background: '#000205',
		foreground: '#FFFFFF',
		caret: '#E60065',
		selection: '#E60C6559',
		gutterBackground: '#000205',
		gutterForeground: '#ffffff90',
		lineHighlight: '#4DD7FC1A',
	},
	styles: [
		{
			tag: t.comment,
			color: '#404040',
		},
		{
			tag: [t.string, t.special(t.brace), t.regexp],
			color: '#00D8FF',
		},
		{
			tag: t.number,
			color: '#E62286',
		},
		{
			tag: [t.variableName, t.attributeName, t.self],
			color: '#E62286',
			fontWeight: 'bold',
		},
		{
			tag: t.function(t.variableName),
			color: '#fff',
			fontWeight: 'bold',
		},
	],
});
