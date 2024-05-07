// import React from 'react'
import useDocumentTitle from '../components/useDocumentTitle'

export default function About() {
  useDocumentTitle('About Us')
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className="max-w-2xl mx-auto p-3  text-center">
          <h1 className='text-3xl font-semibold my-7'>About Siya's Blog</h1>
          <div className="text-md font-semibold text-gray-500 flex flex-col gap-6">
          <p>
              Welcome to Siya's Blog! This blog was created by Siya Nagpal
              as a personal project to share his thoughts and ideas with the
              world. Siya is a passionate developer who loves to write about
              technology, coding, and everything in between.
            </p>

            <p>
              On this blog, you will find weekly articles and tutorials on topics
              such as web development, software engineering, and programming
              languages. Siya is always learning and exploring new
              technologies, so be sure to check back often for new content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
        </div>
      </div>
    </div>
  )
}
