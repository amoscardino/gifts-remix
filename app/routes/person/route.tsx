import { Outlet } from "@remix-run/react";
import ChildPageLayout from "~/components/ChildPageLayout";

const Person = () => (
  <ChildPageLayout>
    <Outlet />
  </ChildPageLayout>
);

export default Person;
