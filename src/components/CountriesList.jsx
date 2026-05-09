import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CountryCard from "./CountryCard";

function CountriesList(props) {
  return (
    <Row>
      {props.countries.map((country) => (
        <Col md={4} className="mb-3" key={country.name.common}>
          <CountryCard country={country} />
        </Col>
      ))}
    </Row>
  );
}

export default CountriesList;