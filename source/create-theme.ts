import {EditorView} from '@codemirror/view';
import {Extension} from '@codemirror/state';
import {
	HighlightStyle,
	TagStyle,
	syntaxHighlighting,
} from '@codemirror/language';

interface Options {
	variant: Variant;
	settings: Settings;
	styles: TagStyle[];
}

type Variant = 'light' | 'dark';

interface Settings {
	background: string;
	foreground: string;
	caret: string;
	selectionBackground: string;
	selectionForeground?: string;
	lineHighlight: string;
	gutterBackground: string;
	gutterForeground: string;
}

const createTheme = ({variant, settings, styles}: Options): Extension => {
	const theme = EditorView.theme(
		{
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'&': {
				backgroundColor: settings.background,
				color: settings.foreground,
			},
			'.cm-content': {
				caretColor: settings.caret,
			},
			'.cm-cursor, .cm-dropCursor': {
				borderLeftColor: settings.caret,
			},
			'&.cm-focused .cm-selectionBackgroundm .cm-selectionBackground, .cm-content ::selection':
				{
					backgroundColor: settings.selectionBackground,
					color: settings.selectionForeground ?? null,
				},
			'.cm-activeLine': {
				backgroundColor: settings.lineHighlight,
			},
			'.cm-gutters': {
				backgroundColor: settings.gutterBackground,
				color: settings.gutterForeground,
			},
			'.cm-activeLineGutter': {
				backgroundColor: settings.lineHighlight,
			},
		},
		{
			dark: variant === 'dark',
		},
	);

	const highlightStyle = HighlightStyle.define(styles);
	const extension = [theme, syntaxHighlighting(highlightStyle)];

	return extension;
};

export default createTheme;
