import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SearchBar(props) {
  const [search, setSearch] = useState("");

  const searchCountry = (e) => {
    e.preventDefault();

    fetch("https://restcountries.com/v3.1/name/" + search)
      .then((response) => response.json())
      .then((data) => {
        props.setCountries(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form onSubmit={searchCountry} className="d-flex gap-2 mb-4">
      <Form.Control
        type="text"
        placeholder="Cerca un paese..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Button type="submit">Cerca</Button>
    </Form>
  );
}

export default SearchBar;