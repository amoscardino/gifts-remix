import { ActionFunction, ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/react";
import { deletePerson } from "~/api/personApi";

const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const id = +(formData.get('id') || '0');

  await deletePerson(id);

  return redirect('/');
};

export { action };
