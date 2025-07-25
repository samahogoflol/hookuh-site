import { useState } from "react";
import { Rating } from "react-simple-star-rating";

export function MyComponent() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleReset = () => {

    setRating(0);
  };

  return (
    <div className="App">
      <Rating onClick={handleRating} initialValue={rating} />

      <button onClick={handleReset}>reset</button>
    </div>
  );
}
