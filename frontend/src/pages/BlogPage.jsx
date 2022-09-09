import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('http://localhost:5500/api/posts');
      const data = await res.json();

      console.log(data);
      setPosts(data);
      setIsLoading(false);
    };
    getPosts();
  }, []);

  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  if (isloading) {
    return <Spinner />;
  }

  return (
    <div className='flex-1 mb-8'>
      {post && (
        <>
          <div className='max-w-[80%] md:max-w-[70%] lg:max-w-[60%] m-auto px-8 py-10 shadow-lg shadow-slate-300 rounded-md'>
            <button className='rounded-md border border-cyan-500 mb-8 py-2 px-4 hover:bg-cyan-500 hover:text-white'>
              <Link to='/posts'>
                <p>&larr; Back to Posts</p>
              </Link>
            </button>
            <h1 className='font-bold text-2xl md:text-3xl mb-4 text-cyan-500'>
              {post.title}
            </h1>
            <h2 className='mb-4 text-slate-700 text-1xl md:text-1xl'>
              {post.description}
            </h2>
            <p className='mb-1 font-bold text-slate-500'>{post.author}</p>
            <p className='text-slate-400'>{post.timestamp}</p>
          </div>
        </>
      )}
    </div>
  );
}
