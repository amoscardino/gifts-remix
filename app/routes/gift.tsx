import { Outlet } from "@remix-run/react";
import ChildPageLayout from "~/components/ChildPageLayout";

const Gift = () => (
  <ChildPageLayout>
    <Outlet />
  </ChildPageLayout>
);

export default Gift;
