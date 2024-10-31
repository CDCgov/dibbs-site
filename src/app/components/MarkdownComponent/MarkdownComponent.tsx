import React from 'react';
import ReactMarkdown from 'react-markdown';
import { getMarkdownContent } from '../../utils/markdown';

export default async function MarkdownContent(fileName: string) {
  const markdownContent = await getMarkdownContent(fileName);

  return (
    <div data-file={fileName}>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
}
