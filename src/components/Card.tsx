"use client";

import { useState } from "react";
import Rating from "@mui/material/Rating";
import InteractiveCard from './InteractiveCard';

type CardProps = {
  venueName: string;
  imgSrc: string;
  onRatingChange?: (venueName: string, value: number) => void;
};

export default function Card({ venueName, imgSrc, onRatingChange }: CardProps) {
  const [rating, setRating] = useState<number | null>(0);
  const ratingLabel = `${venueName} Rating`;

  return (
    <InteractiveCard>
      <img src={imgSrc} alt={venueName} className="h-44 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-slate-800">{venueName}</h2>
        {onRatingChange ? (
          <Rating
            id={ratingLabel}
            name={ratingLabel}
            data-testid={ratingLabel}
            value={rating}
            onChange={(_, newValue) => {
              const nextRating = newValue ?? 0;
              setRating(nextRating);
              onRatingChange(venueName, nextRating);
            }}
          />
        ) : null}
      </div>
    </InteractiveCard>
  );
}
