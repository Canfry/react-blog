import BlogItem from '../components/BlogItem';
import { BsSearch } from 'react-icons/bs';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { posts } from '../data';
import { useState } from 'react';

export default function BlogList() {
  const [search, setSearch] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className={search === '' ? '' : 'h-full'}>
        <div className='max-w-[80%] md:max-w-[70%] lg:max-w-[50%] m-auto flex align-center justify-center my-16'>
          <form
            onSubmit={onSubmit}
            className='w-full flex align-center justify-center'
          >
            <input
              type='text'
              className='shadow-sm shadow-cyan-600 basis-2/3 py-3 px-5'
              placeholder='Search...'
              onChange={handleChange}
              name='search'
              value={search}
            />
            <button
              type='submit'
              className='bg-slate-200 p-4 shadow-sm shadow-cyan-600'
            >
              <BsSearch />
            </button>
          </form>
        </div>
        <div className='flex-1'>
          {posts
            .filter((post) => {
              if (search === '') {
                return <BlogItem key={post.id} post={post} />;
              } else if (
                post.description.includes(search) ||
                post.title.includes(search)
              ) {
                return post;
              }
              return false;
            })
            .map((post) => (
              <BlogItem key={post.id} post={post} />
            ))}
        </div>
        <div className='py-8 px-6 md:px-20 lg:px-52'>
          <button
            className='text-4xl text-cyan-500 animate-bounce w-6 h-6'
            title='Go on Top'
          >
            <a href='#goTop'>
              <BsFillArrowUpCircleFill />
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
