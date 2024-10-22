import { ActionFunction, ActionFunctionArgs, LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { redirect, useLoaderData } from "@remix-run/react";
import GiftDto from "~/api/models/giftDto";
import { getGift, updateGift } from "~/api/giftApi.server";
import GiftForm from "~/components/GiftForm";
import PersonDto from "~/api/models/personDto";

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
  const gift = {
    id: +(formData.get('id') || '0'),
    person: {
      id: +(formData.get('person.id') || '0'),
      name: ''
    } as PersonDto,
    name: formData.get('name') as string,
    status: formData.get('status') as string,
    price: +(formData.get('price') || '0'),
    url: formData.get('url') as string,
    notes: formData.get('notes') as string,
  } as GiftDto;

  await updateGift(gift);

  return redirect('/');
};

export { loader, action };
export default EditGift;
