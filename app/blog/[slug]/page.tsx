export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post, ...metadata } = await import(`@/posts/${slug}.mdx`);

  return (
    <article>
      <Post />
    </article>
  );
}

export function generateStaticParams() {
  return [
    { slug: 'unstable-blog-mock' },
    { slug: 'design-mock' },
    { slug: 'ditching-rawloader-mock' },
    { slug: 'debugging-mdx-mock' },
    { slug: 'magic-mdx-mock' },
    { slug: 'optimised-performance-mock' },
    { slug: 'static-generation-mock' },
  ];
}

export const dynamicParams = false;
