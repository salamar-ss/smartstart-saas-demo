import Container from "@/shared/components/Container/Container";

type LoaderProps = {
  text?: string;
};

function Loader({ text = "Loading..." }: LoaderProps) {
  return (
    <Container>
      <div className="loader">
        <span className="loader__spinner" />
        <p className="loader__text">{text}</p>
      </div>
    </Container>
    
  );
}

export default Loader;