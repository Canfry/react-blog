import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function BlogItem({ post }) {
  const { id, title, description, author, timestamp } = post;

  // console.log(id);

  return (
    <>
      <div className='max-w-[90%] md:max-w-[70%] lg:max-w-[60%] m-auto'>
        <ul className='shadow-lg shadow-slate-300 mb-8 p-8 rounded-md'>
          <h1 className='font-bold text-3xl mb-4 text-cyan-500'>
            <Link to={`/posts/${id}`}>{title}</Link>
          </h1>
          <h2 className='mb-4 text-slate-700'>
            {description.slice(0, description.length * 0.2)}...{' '}
            <span className='text-cyan-500 hover:text-cyan-600 font-bold'>
              <Link to={`/posts/${id}`}>Read More</Link>
            </span>
          </h2>
          <p className='mb-1 font-bold text-slate-500'>{author}</p>
          <p className='text-slate-400'>{timestamp}</p>
        </ul>
      </div>
    </>
  );
}
BlogItem.propTypes = {
  post: PropTypes.object.isRequired,
};
