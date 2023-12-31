import { useParams } from "react-router-dom";
import { useAxiosFetch } from "../hooks/useFetch";
import { PlanetI, PlanetData } from "../interfaces/planets";
import StatusComponent from "../components/Status/StatusComponent";

export default function Planet() {
  const { planetId } = useParams();

  const [data, error, loading] = useAxiosFetch<PlanetData>(
    `http://localhost:8080/planets/planet/${planetId}`
  );

  const {
    planet: {
      name,
      rotation_period,
      orbital_period,
      diameter,
      climate,
      gravity,
      terrain,
      surface_water,
      population,
      residents,
      films,
      created,
      edited,
    } = {} as PlanetI,
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
        <h2>{name}</h2>
        <ul>
          <li>Rotation period: {rotation_period}</li>
          <li>Orbital period: {orbital_period}</li>
          <li>Diameter: {diameter}</li>
          <li>Climate: {climate}</li>
          <li>Gravity: {gravity}</li>
          <li>Terrain: {terrain}</li>
          <li>Surface water: {surface_water}</li>
          <li>Population: {population}</li>
          <li>Residents:</li>
          <ul>
            {residents?.map((resident, index) => (
              <li key={index}>{resident}</li>
            ))}
          </ul>
          <li>Films:</li>
          <ul>
            {films?.map((film, index) => (
              <li key={index}>{film}</li>
            ))}
          </ul>
          <li>Created: {created?.toString().slice(0, 10)}</li>
          <li>Edited: {edited?.toString().slice(0, 10)}</li>
        </ul>
      </div>
    </div>
  );
}
