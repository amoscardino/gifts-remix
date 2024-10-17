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
  const Gift = Object.fromEntries(formData) as unknown as GiftDto;

  await createGift({ ...Gift, id: 0 });

  return redirect('/');
};

export { loader, action };
export default AddGift;
