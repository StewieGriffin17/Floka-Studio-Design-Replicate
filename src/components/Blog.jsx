import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const blogPosts = [
  {
    category: "WEB3",
    date: "NOV 07, 2025",
    title: "Seamless user interfaces, crafted with intent.",
    img: "../../public/blog1.webp",
    type: "text-top"
  },
  {
    category: "WEB3",
    date: "NOV 07, 2025",
    title: "Creative web platforms, designed for growth.",
    img: "../../public/blog2.webp",
    type: "text-bottom"
  },
  {
    category: "WEB3",
    date: "NOV 07, 2025",
    title: "Immersive virtual journeys, built with precision",
    img: "../../public/blog3.webp",
    type: "text-top"
  }
];

const Blog = () => {
  return (
    <section className="bg-[#f2f2f2] px-4 sm:px-6 md:px-8 pb-16 font-sans">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-10 sm:mb-16 px-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 block mb-3 sm:mb-4">
            INSIGHTS
          </span>
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-medium text-black tracking-tight">
            Company blog & updates
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-stretch gap-8 sm:gap-10 lg:gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex flex-col gap-4 sm:gap-6 w-full max-w-[437px] mx-auto lg:mx-0 lg:flex-1 lg:min-w-[min(100%,320px)] lg:max-w-[437px]">
              
              {post.type === "text-top" ? (
                <>
                  <TextBox category={post.category} date={post.date} title={post.title} isDark={true} />
                  <ImageCard src={post.img} />
                </>
              ) : (
                <>
                  <ImageCard src={post.img} />
                  <TextBox category={post.category} date={post.date} title={post.title} isDark={false} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TextBox = ({ category, date, title, isDark }) => (
  <div 
    className={`w-full min-h-[120px] sm:min-h-[138px] p-6 sm:p-8 rounded-[20px] sm:rounded-[24px] flex flex-col justify-center gap-2 sm:gap-3 ${
      isDark ? 'bg-[#121212] text-white' : 'bg-white text-black border border-gray-100'
    }`}
  >
    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[10px] font-bold tracking-widest">
      <span>{category}</span>
      <span className={isDark ? 'text-gray-500' : 'text-gray-400'}>{date}</span>
    </div>
    <p className="text-[clamp(1rem,3vw,1.25rem)] font-medium leading-tight tracking-tight">
      {title}
    </p>
  </div>
);

const ImageCard = ({ src }) => (
  <motion.div 
    className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] group cursor-pointer w-full aspect-square max-h-[min(100vw-2rem,430px)] max-w-[430px] mx-auto sm:mx-0"
    initial="initial"
    whileHover="hover"
  >
    <motion.img
      src={src}
      alt="Blog content"
      className="w-full h-full object-cover"
      variants={{
        initial: { scale: 1 },
        hover: { scale: 1.1 }
      }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
    />

    <motion.div 
      className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-black shadow-lg z-20"
      variants={{
        initial: { opacity: 0, scale: 0.5, y: 10 },
        hover: { opacity: 1, scale: 1, y: 0 }
      }}
      transition={{ duration: 0.3 }}
    >
      <Plus size={24} strokeWidth={2.5} />
    </motion.div>

    <motion.div 
      className="absolute inset-0 bg-black/10 pointer-events-none"
      variants={{
        initial: { opacity: 0 },
        hover: { opacity: 1 }
      }}
    />
  </motion.div>
);

export default Blog;
