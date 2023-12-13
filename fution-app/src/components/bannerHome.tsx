import React from "react";

const Banner = () => {
  return (
    <div
      className="flex justify-center items-center text-white text-center "
      style={{
        backgroundImage: 'url("/banner.png")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "500px",
        width: "100%",
      }}
    >
      <div className="hover:text-black font-bold">
        {/* Add hover effect to each text element */}
        <h1 className="text-4xl font-bold">Fution</h1>
        <p className="text-2xl hover:text-black">Great People, Great Company</p>
      </div>
    </div>
  );
};

export default Banner;
