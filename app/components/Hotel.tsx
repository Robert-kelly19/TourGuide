"use client";

import React from "react";

type Image = {
  thumbnail: string;
};

type Rate = {
  lowest: number;
};

type Property = {
  name: string;
  description: string;
  hotel_class: string;
  images: Image[];
  rate_per_night: Rate;
  amenities: string[];
};

type Props = {
  properties?: Property[] | { properties: Property[] };
};

export default function Hotel({ properties }: Props) {
  const hotelList = Array.isArray(properties)
    ? properties
    : properties?.properties;

  if (!Array.isArray(hotelList)) {
    return <p className="p-6">Loading hotels...</p>;
  }

  return (
    <div className="space-y-">
      <p className="text-2xl font-bold text-white">Hotels</p>
      {hotelList.map((hotel, index) => {
        const bgImage =
          hotel.images?.[0]?.thumbnail ||
          "https://source.unsplash.com/1600x900/?hotel";

        return (
          <section
            key={index}
            className="relative overflow-hidden rounded-3xl shadow-xl mb-30"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20" />

            <div className="relative p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">{hotel.name}</h2>

              <p className="max-w-3xl text-sm opacity-90">
                {hotel.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <span className="rounded-full bg-blue-500/70 px-4 py-1">
                  {hotel.hotel_class}
                </span>

                {hotel.rate_per_night?.lowest && (
                  <span className="rounded-full bg-blue-500/70 px-4 py-1">
                    From ${hotel.rate_per_night.lowest}/night
                  </span>
                )}
              </div>

              {hotel.amenities?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {hotel.amenities.slice(0, 6).map((a, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-blue-500/70 px-3 py-1 text-xs"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {hotel.images && hotel.images.length > 1 && (
              <div className="bg-black/50 backdrop-blur-md">
                <p className="text-white text-2xl p-2 font-bold">Hotel Gallery</p>
                <div className="flex justify-evenly gap-4 p-4 overflow-x-auto scrollbar-hide">
                  {hotel.images.slice(1, 4).map((img, i) => (
                    <img
                      key={i}
                      src={img.thumbnail}
                      alt={`Hotel ${i + 1}`}
                      className="h-50 w-68 object-cover"
                    />
                  ))}
                </div>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
