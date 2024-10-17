import { Link } from "@remix-run/react";

const ChildPageLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <>
      <div className="mb-3">
        <Link to="/" className="btn btn-outline-secondary btn-sm">
          Back
        </Link>
      </div>

      {children}
    </>
  );
};

export default ChildPageLayout;

