
'use client';

import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Editor, EditorProps } from "@toast-ui/react-editor"
import { useEffect, useRef } from 'react';
import { Button } from '@nextui-org/react';


function MarkDownEditor() {
    const ref = useRef<any>(null)

    const handleClick = () => {
        console.log(ref.current.getInstance().getMarkdown())
    }

    return (<>
        <Button onClick={handleClick} size='sm'>
            Post
        </Button>

        <Editor
            ref={ref}
            initialValue="so. what's up ?"
            previewStyle="vertical"
            height="600px"
            initialEditType="markdown"
            useCommandShortcut={true}
            theme="dark"
        />
    </>
    )
}

export default MarkDownEditor