export default function Container({ children }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <div className="container">
          <div className="wrapper">{children}</div>
        </div>
      </form>
    </>
  );
}
