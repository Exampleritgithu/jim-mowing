import React from "react";

const cardData = [
  {
    image: "garden-mainten.jpg",
    title: "LAWN MOWING",
    description:
      "Want the best looking garden in the street? Your local Jim's Gardening team can help, often with a same day service. Whether it’s regular garden care or a one-off tidy-up, the team at Jim's can help. Just call ",
    tel: true,
  },
  {
    image: "garden-care.jpg",
    title: "GARDENING SERVICES",
    description:
      "We provide professional mowing and maintenance services to keep your lawn green and healthy! Our team handles mowing, fertilising, aeration, coring, and turf laying. Affordable and trusted all across Australia.",
  },
  {
    image: "homebg.jpg",
    title: "HEDGE TRIMMING & PRUNING",
    description:
      "Jim's can handle all your garden hedge trimming and pruning—either one-time or ongoing. From shrubs to boundary hedges, we’ve got the tools and experience to maintain them safely and efficiently.",
  },
  {
    image: "cleaning.jpg",
    title: "CLEANING NOW",
    description:
      "Want the best looking garden in the street? Your local Jim's Gardening team can help, often with a same day service. Whether it’s regular garden care or a one-off tidy-up, the team at Jim's can help. Just call ",
    tel: true,
  },
  {
    image: "rubbish.jpg",
    title: "RUBBISH SERVICES",
    description:
      "We provide professional mowing and maintenance services to keep your lawn green and healthy! Our team handles mowing, fertilising, aeration, coring, and turf laying. Affordable and trusted all across Australia.",
  },
  {
    image: "garden-care.jpg",
    title: "HEDGE TRIMMING & PRUNING",
    description:
      "Jim's can handle all your garden hedge trimming and pruning—either one-time or ongoing. From shrubs to boundary hedges, we’ve got the tools and experience to maintain them safely and efficiently.",
  },
];

const Card = ({ image, title, description, tel }) => (
  <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-white">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="w-full bg-black/80 py-3 text-center hover:bg-blue-700 transition">
        <h2 className="text-white text-2xl">{title}</h2>
      </div>
    </div>
    <div className="p-4">
      <p className="text-gray-800 text-sm mb-4">
        {description}
        {tel && (
          <>
            <a href="tel:131546" className="text-blue-600 underline">
              131 546
            </a>{" "}
            [8am–8pm].
          </>
        )}
      </p>
      <div className="text-center">
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
          LEARN MORE
        </button>
      </div>
    </div>
  </div>
);

const Cards = () => {
  return (
    <div className="bg-white z-10 relative px-4 md:px-16 py-12">
      <h2 className="text-4xl font-semibold text-center">
        Jim’s Lawn Mowing & Gardening Maintenance
      </h2>
      <p className="mt-8 text-center text-gray-700 mx-auto">
        Australia’s Largest & Most Trusted Lawn Mowing & Garden Maintenance
        business – Jim’s Mowing. How Can We Help Around Your Home and Garden?
      </p>

      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
