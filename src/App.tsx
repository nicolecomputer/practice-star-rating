import * as React from "react"
import StarRating from './StarRating';

function formattedRating(rating: number): number {
  return Math.round(rating * 100)
}
export default function App() {
  const [rating, setRating] = React.useState<number>(0.5);
  const [numberOfStars, setNumberOfStars] = React.useState<number>(5);

  return (
    <div style={{
      display: 'flex',
      flex: 'column',
      flexWrap: "wrap",
      width: "100%",
      gap: 20,
      marginTop: 40
    }}>
      <div style={{
        width: "100%"
      }}>
        <h2>How many stars?</h2>
        <input type="range" min="5" max="1000" step="5" onChange={(event) => {
          const value = parseInt(event.currentTarget.value);
          setNumberOfStars(value)
        }} style={{
          width: "100%"
        }} />
        <p>Probaly like... {numberOfStars} stars</p>
        <p>My rating is {formattedRating(rating)}% or about {Math.round(rating * numberOfStars)} out of {numberOfStars}</p>
      </div>
      <StarRating
        maxStars={numberOfStars}
        currentlyFilled={Math.round(rating * numberOfStars)}
        onSetStars={(rating) => {
          setRating(rating / numberOfStars)
        }}
      />

    </div>
  );
}
