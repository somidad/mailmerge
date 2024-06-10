/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import {
	Bold,
	Code,
	Italic,
	Subscript,
	Superscript,
	Underline
} from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import { Heading, Title } from '@ckeditor/ckeditor5-heading';
import { ImageBlock } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { ShowBlocks } from '@ckeditor/ckeditor5-show-blocks';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import {
	SpecialCharacters,
	SpecialCharactersEssentials
} from '@ckeditor/ckeditor5-special-characters';
import { Table } from '@ckeditor/ckeditor5-table';
import { Undo } from '@ckeditor/ckeditor5-undo';
import { Base64UploadAdapter } from '@ckeditor/ckeditor5-upload';

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends ClassicEditor {
	public static override builtinPlugins = [
		Base64UploadAdapter,
		BlockQuote,
		Bold,
		Code,
		CodeBlock,
		Essentials,
		FindAndReplace,
		Heading,
		ImageBlock,
		Indent,
		Italic,
		List,
		Paragraph,
		RemoveFormat,
		ShowBlocks,
		SourceEditing,
		SpecialCharacters,
		SpecialCharactersEssentials,
		Subscript,
		Superscript,
		Table,
		Title,
		Underline,
		Undo
	];

	public static override defaultConfig: EditorConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'findAndReplace',
				'|',
				'heading',
				'bold',
				'italic',
				'underline',
				'subscript',
				'superscript',
				'removeFormat',
				'|',
				'bulletedList',
				'numberedList',
				'outdent',
				'indent',
				'|',
				'insertTable',
				'code',
				'codeBlock',
				'blockQuote',
				'specialCharacters',
				'|',
				'showBlocks',
				'sourceEditing'
			]
		},
		language: 'en'
	};
}

export default Editor;
