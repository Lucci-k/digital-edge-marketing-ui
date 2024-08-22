'use client';

import Image from 'next/image';
import BlogForm from './BlogForm'; // Import the client component
import { use, useEffect, useState } from 'react';

interface BlogPost {
  title: string;
  desc: string;
  img: string;
  date: string;
  href: string;
}

export default function Blog() {
  const [blog, setBlog] = useState<BlogPost[]>([])

  useEffect(() => {
    fetchBlogData()
  }, [])

  async function fetchBlogData(): Promise<void> {
    const res = await fetch('/api/blog')
    const data = await res.json()
    console.log('data', data)
    setBlog(data.blog)
  }

  return (
    <main className="flex flex-grow flex-col items-center justify-between">
      <section className="py-32">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
            <h1 className="text-white text-3xl font-extrabold sm:text-4xl">Latest blog posts</h1>
            <p className="text-gray-400">Blogs that are loved by the community. Updated every hour.</p>
            <BlogForm /> {/* This is now a client component */}
          </div>
          <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {blog.map((item, key) => (
              <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                <a href={item.href}>
                  <div className="relative w-full h-60">
                    <Image src={item.img} alt={item.title} layout="fill" objectFit="cover" className="rounded-lg" />
                  </div>
                  <div className="mt-3 space-y-2">
                    <h3 className="text-lg text-white duration-150 group-hover:text-indigo-400 font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm duration-150 group-hover:text-white">{item.desc}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
