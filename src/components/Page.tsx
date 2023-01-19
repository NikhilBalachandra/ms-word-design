import 'prosemirror-view/style/prosemirror.css'
import './Page.css'

import { EditorContent, Editor } from '@tiptap/react'

function Page(props: {editor: Editor}) {
    return (
        <EditorContent editor={props.editor} />
    );
  };

export default Page
