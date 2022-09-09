import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className='p-8 w-full text-slate-500 scrollbar flex-1 grid place-content-center'>
      <div className='max-w-[80%] md:max-w-[70%] lg:max-w-[60%] m-auto text-center flex flex-col justify-between align-center'>
        <h1 className='text-3xl xl:text-4xl mb-8 font-bold'>
          Welcome to Fry Blog
        </h1>
        <p className='mb-4 xl:text-2xl'>
          I try to talk about a huge amont of different topics regarding web
          development. Going from beginner's topics to more advanced ones.
          <br />
          You'll find useful informations and links to different streamers or
          official websites. My goal is to guide you through the understanding
          of the topics, how to find answers and what tool or framework to use.
          I'll use concrete exemples, real projects, Github repos, other blogs,
          streamers to follow...
        </p>
        <div className='text-center mb-6 mt-6'>
          <button className='hover:bg-cyan-600 border rounded-md bg-cyan-500 text-white py-2 px-4'>
            <Link to='/posts'>POSTS</Link>
          </button>
        </div>

        <p className='mb-4 font-bold text-sm'>FOLLOW ME ON :</p>
        <div className='flex align-center justify-center text-4xl'>
          <p>
            <a
              href='https://github.com/Canfry'
              target='_blank'
              rel='noreferrer'
            >
              <BsGithub className='text-[#6e5494]' />
            </a>
          </p>
          <p>
            <a
              href='https://twitter.com/design_fry'
              target='_blank'
              rel='noreferrer'
            >
              <BsTwitter className='text-[#1da1f2] ml-4' />
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
