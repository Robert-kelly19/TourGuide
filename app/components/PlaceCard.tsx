// type Props = {
//   place: any;
// };

// export function PlaceCard({ place }: Props) {
//   const image =
//     place.preview?.source ||
//     `https://source.unsplash.com/600x400/?travel,${place.name}`;

//   return (
//     <div className="group rounded-2xl overflow-hidden shadow hover:shadow-xl transition bg-white">
//       {/* IMAGE */}
//       <div className="relative h-40 overflow-hidden">
//         <img
//           src={image}
//           alt={place.name}
//           className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
//         />

//         <span className="absolute top-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
//           {place.kinds.split(",")[0].replace("_", " ")}
//         </span>
//       </div>

//       {/* CONTENT */}
//       <div className="p-4">
//         <h3 className="font-semibold text-lg truncate">
//           {place.name || "Unknown place"}
//         </h3>

//         <p className="text-sm text-gray-500 mt-1 line-clamp-2">
//           Explore this amazing place while visiting the area.
//         </p>

//         <button className="mt-4 text-sm font-medium text-blue-600 hover:underline">
//           View details →
//         </button>
//       </div>
//     </div>
//   );
// }
