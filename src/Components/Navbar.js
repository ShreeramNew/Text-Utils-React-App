import PropType from "prop-types";
export default function Nav(props) {
  return (
    <>
      <nav>
        <h1>
          {props.title},{props.data}
        </h1>
      </nav>
    </>
  );
}

Nav.propTypes = {
  title: PropType.string.isRequired,
};
Nav.defaultProps = {
  title: "Jai Shreeram Jai Hanuman",
};
