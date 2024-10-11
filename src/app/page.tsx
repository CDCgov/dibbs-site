import Link from 'next/link';
import { getMarkdownContent } from "./utils/markdown";
import ReactMarkdown from 'react-markdown';

export default async function Home() {
  const markdownContent = await getMarkdownContent('homepage.md');

  return (
    <div>
        <h1>Home</h1>
        <ul>
          <li>
            <Link
              href={'/'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={'/our-products'}
            >
              Our products
            </Link>
          </li>
          <li>
            <Link
              href={'/product-detail'}
            >
              Product detail
            </Link>
          </li>
          <li>
            <Link
              href={'/resources'}
            >
              Resources
            </Link>
          </li>
        </ul>
        <div>
          <ReactMarkdown>
            {markdownContent}
          </ReactMarkdown>
        </div>
    </div>
  );
}
