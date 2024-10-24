import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';

export async function getMarkdownContent(fileName: string) {
  const markdownFilePath = path.join(process.cwd(), 'src/content', fileName);
  const fileContents = fs.readFileSync(markdownFilePath, 'utf8');
  const { content } = matter(fileContents);

  return content;
}
