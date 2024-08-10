const textSections = [
  "Fastest Way",
  "Over 4000 Jobs Scanned",
  "Across 1000+ MNCs",
  "Fastest Way",
  "Over 4000 Jobs Scanned",
  "Across 1000+ MNCs",
  "Across 1000+ MNCs",
  "Fastest Way",
  "Over 4000 Jobs Scanned",
  "Across 1000+ MNCs",
  "Fastest Way",
  "Over 4000 Jobs Scanned",
  "Across 1000+ MNCs",
  "Fastest Way",
  "Over 4000 Jobs Scanned",
  "Across 1000+ MNCs",
  "Across 1000+ MNCs",
  "Fastest Way",
  "Over 4000 Jobs Scanned",
  "Across 1000+ MNCs",
  "Fastest Way",
  "Over 4000 Jobs Scanned",
  "Across 1000+ MNCs",
  "Fastest Way",
  "Over 4000 Jobs Scanned",
  "Across 1000+ MNCs",
  "Across 1000+ MNCs",
  "Fastest Way",
  "Over 4000 Jobs Scanned",
  "Across 1000+ MNCs",
  "Fastest Way",
  "Over 4000 Jobs Scanned",
  "Across 1000+ MNCs",
  "Fastest Way",
  "Over 4000 Jobs Scanned",
  "Across 1000+ MNCs",
  "Across 1000+ MNCs",
  "Fastest Way",
  "Over 4000 Jobs Scanned",
  "Across 1000+ MNCs",
];

export default function SliderTextSection() {
  return (
    <div className="w-full h-[110px] overflow-hidden bg-[#FDFDFD] border-4 border-[#4D4D4D] relative">
      <div className="flex w-full h-full items-center whitespace-nowrap animate-marquee">
        {textSections.map((text, index) => (
          <div
            key={index}
            className="w-fit h-full px-[40px] flex justify-center items-center text-[#4D4D4D] poppins-semibold border-r-4 border-[#4D4D4D]"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
