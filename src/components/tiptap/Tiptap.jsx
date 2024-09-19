'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Strike from '@tiptap/extension-strike';
import Paragraph from '@tiptap/extension-paragraph';
import { BiBold, BiItalic, BiStrikethrough } from 'react-icons/bi';
import { RiParagraph } from "react-icons/ri";
import { useEffect, useState } from 'react';

const TiptapEditor = ({ value, onChange, reset }) => {

    const [isClient, setIsClient] = useState(false);

    // Ensure the component only renders on the client
    useEffect(() => {
        setIsClient(true);
    }, []);

    const editor = useEditor({
        extensions: [
            StarterKit,
            Bold,
            Italic,
            Strike,
            Paragraph,
        ],
        content: value,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            spellCheck: true,
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
            },
        },
    });
    // Reset editor content when reset prop changes
    useEffect(() => {
        if (reset && editor) {
            editor.commands.setContent(''); // Clear editor content
        }
    }, [reset, editor]);
    if (!editor || !isClient) {
        return null;
    }

    const MenuBar = ({ editor }) => {
        if (!editor) {
            return null;
        }

        return (
            <div className="mb-2 space-x-4 flex *:py-2" >
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'text-blue-500' : 'text-gray-500'}
                >
                    <BiBold size={24} />
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editor.can().chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'text-blue-500' : 'text-gray-500'}
                >
                    <BiItalic size={24} />
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editor.can().chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'text-blue-500' : 'text-gray-500'}
                >
                    <BiStrikethrough size={24} />
                </button>

                <button
                    onClick={() => editor.chain().focus().insertContent('<p><br /></p>').run()}
                    className="text-gray-500"
                >
                    <RiParagraph size={24} />
                </button>
            </div>
        );
    };

    return (
        <div>
            <MenuBar editor={editor} className="my-1 " />
            <EditorContent editor={editor} className="rounded-md text-sm border p-2 min-h-32 h-auto border-gray-300  dark:border-gray-600 focus:outline-none focus:ring-0
            active:outline-none" />
        </div>
    );
};

export default TiptapEditor;
