const Card = () => {
  return (
    <div className="menu-item flex-0 bg-no-repeat px-[0.94rem] bg-center pb-[1.31rem] gap-2 content-end flex-col text-white justify-end flex h-[18.375rem] bg-[url('/images/Cardmenu1.png')] flex-shrink-0 max-w-[15.75rem] basis-[15.75rem] bg-cover rounded-[10px]">
      <h4 className="menu-money text-left text-2xl not-italic font-extrabold leading-[120%]">
        $199
      </h4>
      <p className="menu-desc text-sm not-italic text-left font-extrabold leading-[120%] tracking-[0.00875rem]">
        Ha Giang Loop tour: Itinerary in 4 Days 5 Nights
      </p>
      <div className="menu-info  flex gap-[0.31rem] items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="w-4 h-4 shrink-0"
        >
          <path
            opacity="0.4"
            d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8 1.33333C4.3181 1.33333 1.33334 4.3181 1.33334 8C1.33334 11.6819 4.3181 14.6667 8 14.6667Z"
            fill="white"
          />
          <path
            d="M10.4733 10.62C10.3867 10.62 10.3 10.6 10.22 10.5467L8.15334 9.31333C7.64 9.00667 7.26 8.33333 7.26 7.74V5.00667C7.26 4.73333 7.48667 4.50667 7.76 4.50667C8.03334 4.50667 8.26 4.73333 8.26 5.00667V7.74C8.26 7.98 8.46 8.33333 8.66667 8.45333L10.7333 9.68667C10.9733 9.82667 11.0467 10.1333 10.9067 10.3733C10.8067 10.5333 10.64 10.62 10.4733 10.62Z"
            fill="white"
          />
        </svg>
        <span className="text-xs not-italic font-extrabold leading-[120%] tracking-[0.00375rem]">
          Intermediate
        </span>
        <span className="text-ellipsis text-xs not-italic font-normal leading-[120%] tracking-[0.00375rem] timeTraverl">
          8 Days / 7 Night
        </span>
      </div>
    </div>
  );
};

export default Card;
