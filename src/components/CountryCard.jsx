import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { FavoritesContext } from "../context/FavoritesContext";

function CountryCard(props) {
  const { addFavorite } = useContext(FavoritesContext);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={props.country.flags.png}
        style={{ height: "180px", objectFit: "cover" }}
      />

      <Card.Body>
        <Card.Title>{props.country.name.common}</Card.Title>
        <Card.Text>Capitale: {props.country.capital}</Card.Text>
        <Card.Text>Regione: {props.country.region}</Card.Text>

        <Button onClick={() => addFavorite(props.country)}>
          Aggiungi ai preferiti
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CountryCard;