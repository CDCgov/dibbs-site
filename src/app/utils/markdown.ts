import * as fs from 'fs';
import * as path from 'path';
import * as matter from 'gray-matter';

export async function getMarkdownContent(fileName: string) {
  const markdownFilePath = path.join(process.cwd(), 'src/content', fileName);
  const fileContents = fs.readFileSync(markdownFilePath, 'utf8');
  const { content } = matter(fileContents, undefined);

  return content
}