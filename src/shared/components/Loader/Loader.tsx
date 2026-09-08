type LoaderProps = {
  text?: string;
};

function Loader({ text = "Loading..." }: LoaderProps) {
  return (
    <div className="loader">
      <span className="loader__spinner" />
      <p className="loader__text">{text}</p>
    </div>
  );
}

export default Loader;