import BLOG_IMAGE_1 from "../assets/Blog1.png";

interface BlogCardProps {
  imageSrc: string;
  readTime: string;
  title: string;
  buttonText: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, readTime, title, buttonText }) => {
  return (
    <div className="min-w-[338px] h-full flex flex-col border-[3.66px] border-black rounded-lg md:h-[388px]">
      <img src={imageSrc} alt="" className="w-full h-[180px] object-cover" />
      <div className="w-full h-full flex flex-col gap-[25px] flex-grow p-[22px] ">
        <div className="flex h-[30px] gap-[15px] items-center justify-start">
          <div className="poppins-medium h-full flex justify-center items-center text-[12px] leading-4 text-[#fff] bg-black px-2 rounded">
            {readTime}
          </div>
          <div className="poppins-medium text-[12px] leading-4 text-[#111111]">
            {readTime}
          </div>
        </div>
        <div className="poppins-semibold text-[18px] leading-[21px]">{title}</div>
        <div className="w-full h-10 flex justify-center items-center border border-[#111111] rounded-lg poppins-regular text-[15px] leading-[18px]">
          {buttonText}
        </div>
      </div>
    </div>
  );
}

export default function BlogsSection() {
  return (
    <div className="w-full xl:h-[718px] flex flex-col gap-8 py-[40px] md:py-[70px]">
      <div className="flex flex-col justify-center px-6 gap-2">
        <h3 className="poppins-bold text-[32px] text-center text-[#201C2D] leading-[48px]">
          Blogs
        </h3>
        <p className="poppins-regular text-[18px] text-center text-[#403B4E] leading-[28px] ">
          Our platform offers more than 25+ categories of job opportunities.
        </p>
      </div>

      <div className="px-6 xl:px-[112px] w-full h-full overflow-x-scroll scrollbar-hide s flex justify-start md:justify-center gap-6">
        <BlogCard
          imageSrc={BLOG_IMAGE_1}
          readTime="5 min read"
          title="A beginner’s guide to blockchain for engineers."
          buttonText="Read More"
        />
        <BlogCard
          imageSrc={BLOG_IMAGE_1}
          readTime="5 min read"
          title="A beginner’s guide to blockchain for engineers."
          buttonText="Read More"
        />
        <BlogCard
          imageSrc={BLOG_IMAGE_1}
          readTime="5 min read"
          title="A beginner’s guide to blockchain for engineers."
          buttonText="Read More"
        />
      </div>

      <div className="w-full flex justify-center h-[40px]">A--B</div>
    </div>
  );
}
