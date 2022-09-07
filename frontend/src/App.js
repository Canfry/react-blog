import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import BlogList from './pages/BlogList';
import BlogPage from './pages/BlogPage';
import SignIn from './pages/Sign-in';
import SignUp from './pages/Sign-up';
import Home from './pages/Home';
import { posts } from './data';

function App() {
  return (
    <div
      className='w-full flex flex-col align-center justify-start h-screen'
      id='goTop'
    >
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route exact path='/posts' element={<BlogList />} />
          <Route path='/posts/:id' element={<BlogPage posts={posts} />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
