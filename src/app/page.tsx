import MarkdownContent from "./components/MarkdownComponent";

export default async function Home() {

  return (
    <div className='grid-container'>
        <h1>Home</h1>
        <div>
        {MarkdownContent("homepage.md")}
        </div>
    </div>
  );
}
