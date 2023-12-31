import { useParams } from "react-router-dom";
import { useAxiosFetch } from "../hooks/useFetch";
import { PersonData, PersonI } from "../interfaces/people";
import StatusComponent from "../components/Status/StatusComponent";

export default function Person() {
  const { personId } = useParams();

  const [data, error, loading] = useAxiosFetch<PersonData>(
    `http://localhost:8080/people/person/${personId}`
  );

  const {
    person: {
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year,
      gender,
      homeworld,
      vehicles,
      starships,
      films,
      created,
      edited,
    } = {} as PersonI,
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
          <li>Height: {height}</li>
          <li>Mass: {mass}</li>
          <li>Hair color: {hair_color}</li>
          <li>Skin color: {skin_color}</li>
          <li>Eye color: {eye_color}</li>
          <li>Birth year: {birth_year}</li>
          <li>Gender: {gender}</li>
          <li>Homeworld: {homeworld}</li>
          <li>Films:</li>
          <ul>
            {films.map((film, index) => (
              <li key={index}>{film}</li>
            ))}
          </ul>
          <ul>
            Vehicles:
            {vehicles.length
              ? vehicles.map((vehicle, index) => <li key={index}>{vehicle}</li>)
              : " none"}
          </ul>

          <ul>
            Starships:
            {starships.length
              ? starships.map((vehicle, index) => (
                  <li key={index}>{vehicle}</li>
                ))
              : " none"}
          </ul>
          <ul>
            {starships.map((starship, index) => (
              <li key={index}>{starship}</li>
            ))}
          </ul>
          <li>Created: {created?.toString().slice(0, 10)}</li>
          <li>Edited: {edited?.toString().slice(0, 10)}</li>
        </ul>
      </div>
    </div>
  );
}
