'use client';

import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function CustomBlocksRenderer({
  content,
}: {
  content: BlocksContent;
}) {

  return (
    <BlocksRenderer
    content={content}
      blocks={{
        list: ({ children }) => <ul className='list-[circle]'>{children}</ul>,
      }}
    />
  );
}
