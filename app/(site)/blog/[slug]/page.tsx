import React from "react";
import { getPostBySlug } from "@/sanity/sanity-utils";
import RenderBodyContent from "@/app/components/Blog/RenderBodyContent";
import { Blog } from "@/types/blog";

const SingleBlogPost = async ({ params }: { params: { slug: string } }) => {
  const post: Blog = await getPostBySlug(params.slug);

  return (
    <article className="my-10">
      <div className="mb-5">
        <h1 className="text-3xl py-2">{post.title}</h1>
        <p className="pb-1">
          <span className="font-medium">Published:</span>
          {new Date(post.publishedAt).toDateString()}
          <span className="font-medium pl-2">By </span>
          {post.author.name}
        </p>
        <p>{post.metadata}</p>
      </div>

      <article className="prose lg:prose-xl">
        <RenderBodyContent post={post}/>
      </article>
    </article>
  );
};

export default SingleBlogPost;