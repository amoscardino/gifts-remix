import { ActionFunction, ActionFunctionArgs, LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { redirect, useLoaderData } from "@remix-run/react";
import GiftDto from "~/api/models/giftDto";
import { getGift, updateGift } from "~/api/giftApi";
import GiftForm from "~/components/GiftForm";

const loader: LoaderFunction = async ({ params }: LoaderFunctionArgs) => {
  const id = +(params.id || '0');
  const gift = await getGift(id);

  return { gift };
};

const EditGift = () => {
  const { gift } = useLoaderData<{ gift: GiftDto }>();

  return (
    <GiftForm gift={gift} />
  );
};

const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const gift = Object.fromEntries(formData) as unknown as GiftDto;

  await updateGift(gift);

  return redirect('/');
};

export { loader, action };
export default EditGift;
