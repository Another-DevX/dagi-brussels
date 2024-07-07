import React from 'react';
import { marked } from 'marked';

interface MarkdownRendererProps {
    markdown: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown }) => {
    const getMarkdownText = () => {
        const rawMarkup = marked(markdown);
        return { __html: rawMarkup };
    };
    //@ts-ignore
    return <div className="markdown-body" dangerouslySetInnerHTML={getMarkdownText()} />;
};

export default MarkdownRenderer;
