import Head from 'next/head';
import SiteParser from '../components/SiteParser'
import content from '../content.json';

let pages = []

export default function Page({ page }) {

  if (page === undefined) { return (<>foobar</>) }
  else {
    return (
      <>
        <Head>
          <title>{page.title} | {content.title}</title>
        </Head>
        <h1>{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
      </>
    )
  }
}

export async function getStaticPaths() {
  const siteMap = await fetch("http://localhost:8000/api/site.json")
    .then(response => response.json())

  const sp = new SiteParser(siteMap)
  sp.parseSite()
  pages = sp.pages

  const paths = sp.pages.map(page => {
    const slug = page.path;
    return { params: { slug } };
  });
  return { paths, fallback: true };
}


export async function getStaticProps({ params }) {

  let page = undefined
  const currentPath = params.slug.join('/')
  // man these async js frameworks really like sync
  page = await fetch(`http://localhost:8000/api/${currentPath}.json`)
    .then(response => response.json())

  if (page === undefined) {
    page = { title: 'nope', path: '/nope', content: 'nope' }
  }
  return { props: { page } };
}
