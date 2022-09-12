function About() {
  return (
    <div className='flex-1 max-w-[80%] md:max-w-[70%] lg:max-w-[50%] m-auto flex flex-col align-center justify-around my-16 text-center '>
      <div>
        <h1 className='text-4xl text-cyan-700 mb-4'>
          About <span className='text-cyan-500'>FRYBLOG</span>
        </h1>
        <p className='text-slate-700 leading-8 font-bold text-md'>
          Hi, My name is Christophe Anfry, I'm 39 and I'm french. I live in
          Barcelona (spain). 2 years ago I started get interested in web
          development. I didn't know which language to learn, so I started with
          HTML and CSS. I was facinated by all the technologies and
          possibilities that this environement could procure. From there I think
          i've made all the possible mistakes that a beginner can make (learning
          different languages or technologies at the same time, not creating any
          projects, tutorials hell...). <br />
          This blog it's my project to become a frontend developer (or
          full-stack) if possible, who knows <span>&#128521;</span>? While I'm
          learning I share my experience with you and give you tricks I find
          along the way. It's quiet a beginner approach but when you start it's
          very easy to get stuck, lost and overwhelmed, so showing you what to
          do, what to focus on or what to learn, will give you work a structure
          and motivation to not give up. And if you want more advanced features
          I'll always redirect you to the corresponding articles, videos, people
          to follow or we discover it together.
        </p>
      </div>
    </div>
  );
}
export default About;
