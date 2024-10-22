import { Link } from "@remix-run/react";

interface ChildPageLayoutProps {
  children: React.ReactNode;
}

const ChildPageLayout = ({ children }: ChildPageLayoutProps) => (
  <>
    <div className="mb-3">
      <Link to="/" className="btn btn-outline-secondary btn-sm">
        Back
      </Link>
    </div>

    {children}
  </>
);

export default ChildPageLayout;

