import React from "react";
import Image from "next/image";

const Card = ({
  title = "Default Title",
  description = "Default Description",
  imageUrl = "/banner.png",
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {" "}
      {/* Flexbox container */}
      {[1, 2, 3, 4, 5, 6, 7.8, 9].map(
        (
          _,
          index // Loop untuk membuat beberapa kartu
        ) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <div className="w-full relative" style={{ height: "200px" }}>
              <Image src={imageUrl} alt={`Card image ${index}`} fill />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 mt-4">{title}</div>
              <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag1
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag2
              </span>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Card;
