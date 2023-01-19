import reactLogo from './assets/react.svg'
import * as FluentUIIcons from '@fluentui/react-icons'

import './assets/icons/Icons.scss'
import './App.scss'

import Page from './components/Page'
import AppRibbon from './AppRibbon'
import { Editor, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Highlight from '@tiptap/extension-highlight'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'

function App() {
    const editor: Editor = useEditor({
        extensions: [
          StarterKit,
          Link,
          Highlight.configure({
            multicolor: true,
          }),
          BulletList,
          OrderedList
        ],
        content: `
            <h1>Hello Techrangers!</h1>
            <p>This is a demonstration of Microsoft Word UI (macOS)
            design in HTML/CSS/JS.</p>
            
            <p>It is built in <a href="https://reactjs.org/">React</a> and uses
            <a href="https://prosemirror.net/">ProseMirror</a> for the rich text
            functionality.</p>

            <p>It is a partial implementation, and does not work as a fully
            functional word processor. It however implements a good set of basic
            features like <b>bold</b>, <i>italics</i>, <s>strikethrough</s>,
            <a href="https://example.com"> links</a>, <mark>highlights</mark>,
            unordered/ordered list, and headings (h1 through h4).</p>

            <h1>Features</h1>
            <p>The following features are implemented:</p>
            <ul>
                <li>Basic text formatting (<b>bold</b>, <i>italics</i> and <s>strikethrough</s>)</li>
                <li>Links like <a href="https://example.com">example</a></li>
                <li><makr>Highlighting</mark></li>
                <li>Headings (h1 through h4)</li>
                <li>Unordered lists
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                    </ul>
                </li>
                <li>Ordered lists
                    <ol>
                        <li>Step 1</li>
                        <li>Step 2</li>
                    </ol>
                </li>
            </ul>
            <h1>Implementation details</h1>
            <h2>User Interface</h2>
            <p>The UI is designed using handwritten CSS.</a> Interactive elements
            are implemented using React JS. Fonts used in this design is
            different than the one used by the Microsoft and user interface
            might look slight different due to this.</p>

            <h2>Rich Text Editor</h2>
            <p>The rich text editor is built using <a href="https://prosemirror.net/">ProseMirror</a>
            and is customized to match the UI of the Microsoft Word using CSS</p>
        `,
    })!

    return (
        <div className="window">
            <div className="title-bar" style={{color: "white"}}>
                <div className="group">
                    <div className="traffic-light">
                    </div>
                    <button title="Home">
                        <FluentUIIcons.Home20Regular/>
                    </button>
                    <button title="Save">
                        <FluentUIIcons.Save20Regular/>
                    </button>
                    <button title="Undo Typing">
                        <FluentUIIcons.ArrowUndo20Regular/>
                    </button>
                    <button title="Repeat Typing">
                        <FluentUIIcons.ArrowClockwise20Regular/>
                    </button>
                    <button title="Print">
                        <FluentUIIcons.Print20Regular/>
                    </button>
                    <button title="Save As">
                        <FluentUIIcons.SaveEdit20Regular/>
                    </button>
                    <button title="Customize Quick Access Toolbar">
                        <FluentUIIcons.MoreHorizontal20Regular/>
                    </button>
                </div>
                <p className="name">
                    Document1
                </p>
                <div className="group">
                    <button>
                        <FluentUIIcons.Search20Regular title="Search in Document"/>
                    </button>
                    <button title="Help improve Office?">
                        <FluentUIIcons.PersonFeedback20Regular/>
                    </button>
                </div>
            </div>
            <AppRibbon editor={editor}/>
            <div className="page-container">
                <Page editor={editor} />
            </div>
            <div className="status-bar">
            </div>
        </div>
    )
}

export default App
