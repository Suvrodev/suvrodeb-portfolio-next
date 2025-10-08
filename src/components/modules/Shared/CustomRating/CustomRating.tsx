import React from "react";

interface CustomRatingProps {
  value: number;
  max?: number;
  size?: number;
}

const CustomRating: React.FC<CustomRatingProps> = ({
  value,
  max = 5,
  size = 22,
}) => {
  const stars = Array.from({ length: max }, (_, i) => i + 1);

  return (
    <div className="flex gap-1">
      {stars.map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={star <= value ? "#FBBF24" : "#E5E7EB"} // yellow-400 and gray-200
          width={size}
          height={size}
          className="transition-transform duration-300 hover:scale-110"
        >
          <path d="M12 .587l3.668 7.429 8.2 1.193-5.934 5.782 1.402 8.178L12 18.896l-7.336 3.863 1.402-8.178L.132 9.209l8.2-1.193z" />
        </svg>
      ))}
    </div>
  );
};

export default CustomRating;
