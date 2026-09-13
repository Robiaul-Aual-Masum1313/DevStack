import bannerImg from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <div className="container mx-auto flex justify-between items-center py-25">
      <div className="flex-1 space-y-6">
        {/* <h2 className='text-[#0F172A] font-extrabold text-6xl'>Build Your Ideal<br /> <span style={{background: 'linear-gradent(to right,#f97316,#ec4899,#8b5cf6)', backgroundClip: 'text', color: 'transparent'}}>Development Stack</span></h2> */}
        <h2 className="text-[#0F172A] font-extrabold text-6xl">
          Build Your Ideal
          <br />
          <span
            style={{
              background:
                "var(--brand-gradent)",
              backgroundClip: "var( --brand-clip)",
              WebkitBackgroundClip: "text",
              color: 'var(--brand-color)',
              WebkitTextFillColor: "transparent",
            }}
          >
            Development Stack
          </span>
        </h2>
        <p className="font-medium text-[18px]">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="pt-11">
          <button style={{background: 'var(--brand-gradent)'}} className="text-[14px] font-semibold text-white  px-7 py-3.5 rounded-md">
            Explore Technologies
          </button>
          <button className="text-[14px] font-semibold ml-2.5  px-15 py-3.5 rounded-md border border-[#eee]">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
}

// bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-transparent bg-clip-text
// bg-linear-to-r from-[#F97316] to-[#EC4899]
