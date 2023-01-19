import * as Icons from './assets/icons/index'

import './AppRibbon.scss'

import Ribbon from './components/Ribbon'
import { Editor } from '@tiptap/react';

export default function AppRibbon(props: { editor: Editor }) {
    if (!props.editor) {
        return null
    }

    return (
        <Ribbon>
            <div className="tab-list">
                <button className="selected">Home</button>
                <button>Insert</button>
                <button>Draw</button>
                <button>Design</button>
                <button>Layout</button>
                <button>View</button>
            </div>
            <div className="tab">
                <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
                    <div className="rows">
                        <div className="cols">
                            <div className="button-group">
                                <button title="Paste">
                                    <Icons.Paste style={{ width: "34px", height: "34px" }} />
                                </button>
                                <button>
                                    ∨
                                </button>
                            </div>
                            <p>Paste</p>
                        </div>
                        <div className="cols">
                            <button title="Cut">
                                <Icons.Cut />
                            </button>
                            <button title="Copy">
                                <Icons.Copy />
                            </button>
                            <button title="Format Painter">
                                <Icons.FormatPainter />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="rows">
                        <div className="section">
                            <div className="rows">
                                <select>
                                    <option>Arial</option>
                                    <option>Veranda</option>
                                    <option>Monospace</option>
                                </select>
                                <select name="font-size">
                                    <option value="12">12</option>
                                    <option value="14">14</option>
                                    <option value="16">16</option>
                                    <option value="18">18</option>
                                </select>
                                <button>
                                    <Icons.GrowFont />
                                </button>
                                <button>
                                    <Icons.ShrinkFont />
                                </button>
                            </div>
                        </div>
                        <div className="section">
                            <button>
                                <Icons.TextCase />
                            </button>
                        </div>
                        <div className="section">
                            <button>
                                <Icons.ClearFormatting />
                            </button>
                        </div>
                    </div>
                    <div className="rows">
                        <div className="section">
                            <div className="rows">
                                <button
                                    onClick={() => props.editor.chain().focus().toggleBold().run()}
                                    className={props.editor.isActive('bold') ? 'is-active' : ''}
                                >
                                    <Icons.Bold />
                                </button>
                                <button
                                    onClick={() => props.editor.chain().focus().toggleItalic().run()}
                                    className={props.editor.isActive('italic') ? 'is-active' : ''}
                                >
                                    <Icons.Italic />
                                </button>
                                <div className="button-group">
                                    <button>
                                        <Icons.Underline />
                                    </button>
                                    <button>
                                        ∨
                                    </button>
                                </div>
                                <button
                                    onClick={() => props.editor.chain().focus().toggleStrike().run()}
                                    className={props.editor.isActive('strike') ? 'is-active' : ''}
                                >
                                    <Icons.Strikethrough />
                                </button>
                                <button>
                                    <Icons.Subscript />
                                </button>
                                <button>
                                    <Icons.Superscript />
                                </button>
                            </div>
                        </div>
                        <div className="section">
                            <div className="rows">
                                <div className="button-group">
                                    <button
                                        onClick={() => props.editor.commands.toggleHighlight()}
                                    >
                                        <Icons.Highlight/>
                                    </button>
                                    <button>
                                        ∨
                                    </button>
                                </div>
                                <div className="button-group">
                                    <button>
                                        <Icons.FontColor />
                                    </button>
                                    <button>
                                        ∨
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="rows">
                        <div className="section">
                            <div className="rows">
                                <button
                                    onClick={() => props.editor.chain().focus().toggleBulletList().run()}
                                >
                                    <Icons.BulletedList/>
                                </button>
                                <button
                                    onClick={() => props.editor.chain().focus().toggleOrderedList().run()}
                                >
                                    <Icons.NumberedList />
                                </button>
                            </div>
                        </div>
                        <div className="section">
                            <div className="rows">
                                <button>
                                    <Icons.Indent />
                                </button>
                                <button>
                                    <Icons.Outdent />
                                </button>
                            </div>
                        </div>
                        <div className="section">
                            <button>
                                <Icons.Paragraph />
                            </button>
                        </div>
                    </div>
                    <div className="rows">
                        <div className="section">
                            <div className="rows">
                                <button>
                                    <Icons.JustifyLeft />
                                </button>
                                <button>
                                    <Icons.JustifyCenter />
                                </button>
                                <button>
                                    <Icons.JustifyRight />
                                </button>
                                <button>
                                    <Icons.JustifyFull />
                                </button>
                            </div>
                        </div>
                        <div className="section">
                            <button>
                                <Icons.LineSpacing />∨
                            </button>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="rows">
                        <div className="style-selector">
                            <button name="Normal"
                                onClick={() => props.editor.chain().focus().setParagraph().run()}
                            >
                                <p>AaBbCcDdEe</p>
                            </button>
                            <button name="Heading 1"
                                onClick={() => props.editor.chain().focus().toggleHeading({ level: 1 }).run()}
                            >
                                <h1>AaBbCcDdEe</h1>
                            </button>
                            <button name="Heading 2"
                                onClick={() => props.editor.chain().focus().toggleHeading({ level: 2 }).run()}
                            >
                                <h2>AaBbCcDdEe</h2>
                            </button>
                            <button name="Heading 3"
                                onClick={() => props.editor.chain().focus().toggleHeading({ level: 3 }).run()}
                            >
                                <h3>AaBbCcDdEe</h3>
                            </button>
                            <button name="Heading 4"
                                onClick={() => props.editor.chain().focus().toggleHeading({ level: 4 }).run()}
                            >
                                <h4>AaBbCcDdEe</h4>
                            </button>
                            <button name="Strong"
                                onClick={() => props.editor.chain().focus().toggleBold().run()}
                            >
                                <b>AaBbCcDdEe</b>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Ribbon>
    )
}
