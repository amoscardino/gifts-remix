import { ActionFunction, ActionFunctionArgs, LoaderFunction, LoaderFunctionArgs, redirect } from "@remix-run/node";
import GiftDto from "~/api/models/giftDto";
import { createGift } from "~/api/giftApi";
import GiftForm from "~/components/GiftForm";
import { getPerson } from "~/api/personApi";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import PersonDto from "~/api/models/personDto";

const loader: LoaderFunction = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const personId = +(url.searchParams.get('personId') || '0');
  const person = await getPerson(personId);

  return { person };
};

const AddGift = () => {
  const { person } = useLoaderData<{ person: PersonDto }>();
  const gift = { person } as GiftDto;

  return (
    <GiftForm gift={gift} />
  );
}

const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const gift = {
    id: 0,
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

  await createGift(gift);

  return redirect('/');
};

export { loader, action };
export default AddGift;
