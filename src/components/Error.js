import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <>
      <h1>Oops!!</h1>
      <h2>Something Went Wrong!</h2>
      <p style={{ fontWeight: "bold" }}>
        {err.status}:{err.statusText}
      </p>
    </>
  );
};

export default Error;
