import { ActionFunction, ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/react";
import { deleteGift } from "~/api/giftApi";

const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const id = +(formData.get('id') || '0');

  await deleteGift(id);

  return redirect('/');
};

export { action };
