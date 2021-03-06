import hljs from 'highlight.js'
import 'highlight.js/styles/darcula.css'
import '../static/css/styles.css'

hljs.configure({
    languages: ['javascript', 'ruby', 'python', 'rust', 'bash', 'c', 'cpp', 'dart', 'django', 'go', 'http', 'java', 'kotlin'],
});

export const QuillModules = {
    syntax: {
        highlight: text => hljs.highlightAuto(text).value,
    },
    toolbar: [
        [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        ['code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{'align': []}],
        ['link', 'image', 'video'],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'color': [] }, { 'background': [] }],
        ['formula'],
        // ['fullscreen']
    ]
};

export const QuillFormats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "align",
    "link",
    "image",
    "video",
    "script",
    "color",
    "background",
    "formula"
  ];

// export const QuillFormats = [
//     'header',
//     'font',
//     'size',
//     'bold',
//     'italic',
//     'underline',
//     'strike',
//     'blockquote',
//     'list',
//     'bullet',
//     'link',
//     'image',
//     'video',
//     'code-block'
// ];