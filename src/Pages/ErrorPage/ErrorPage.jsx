import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container mx-auto">
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-5xl">Oops!!</h2>
        <h3 className="text-4xl font-semibold">404</h3>
        <p className="text-3xl">Not Found</p>
        <p className="my-10">
          <NavLink to="/" className="btn btn-sm btn-secondary">Back to Home</NavLink>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
