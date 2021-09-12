import React, { useState, useEffect, Fragment, useRef } from 'react';

// TOAST UI Editor import
// import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

import { Editor } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';

import Prism from 'prismjs';
import 'prismjs/components/prism-clojure.js';
import 'prismjs/themes/prism.css';

import hljs from "highlight.js";
import "highlight.js/styles/github.css";


const Write = () => {
    const editorRef = useRef();

    const handleClick = () => {
        console.log(editorRef.current.getInstance().getMarkdown())
    };


    return (
        <Fragment>
            <Editor
                initialValue="hello react editor world!"
                previewStyle="vertical"
                height="800px"
                initialEditType="markdown"
                useCommandShortcut={true}
                hideModeSwitch={true}
                useDefaultHTMLSanitizer={true}
                ref={editorRef}
                plugins={[[codeSyntaxHighlight, { highlighter: Prism }], colorSyntax]}
            />
            <button onClick={handleClick}>make bold</button>
        </Fragment>
    )
}

export default Write;
