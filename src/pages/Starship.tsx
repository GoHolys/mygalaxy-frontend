import { useParams } from "react-router-dom";
import { useAxiosFetch } from "../hooks/useFetch";
import { StarshipData, StarshipI } from "../interfaces/starships";
import StatusComponent from "../components/Status/StatusComponent";

export default function Starship() {
  const { starshipId } = useParams();

  const [data, error, loading] = useAxiosFetch<StarshipData>(
    `http://localhost:8080/starships/starship/${starshipId}`
  );

  const {
    starship: {
      name,
      model,
      manufacturer,
      cost_in_credits,
      length,
      max_atmosphering_speed,
      crew,
      passengers,
      cargo_capacity,
      consumables,
      hyperdrive_rating,
      MGLT,
      starship_class,
      pilots,
      films,
      created,
      edited,
      url,
    } = {} as StarshipI,
  } = data || {};

  if (loading) {
    return <StatusComponent message="Loading..." />;
  }

  if (error) {
    return <StatusComponent message="Error" />;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <ul>
          <li>Name: {name}</li>
          <li>Model: {model}</li>
          <li>Manufacturer: {manufacturer}</li>
          <li>Cost in credits: {cost_in_credits}</li>
          <li>Length: {length}</li>
          <li>Max atmosphering speed: {max_atmosphering_speed}</li>
          <li>Crew: {crew}</li>
          <li>Passengers: {passengers}</li>
          <li>Cargo capacity: {cargo_capacity}</li>
          <li>Consumables: {consumables}</li>
          <li>Hyperdrive rating: {hyperdrive_rating}</li>
          <li>MGLT: {MGLT}</li>
          <li>Starship class: {starship_class}</li>
          <li>Films:</li>
          <ul>
            {films.map((film) => (
              <li>{film}</li>
            ))}
          </ul>
          <li>
            Pilots:
            {pilots.length ? pilots.map((pilot) => <li>{pilot}</li>) : " none"}
          </li>
          <li>Created: {created?.toString().slice(0, 10)}</li>
          <li>Edited: {edited?.toString().slice(0, 10)}</li>
          <li>URL: {url}</li>
        </ul>
      </div>
    </div>
  );
}
