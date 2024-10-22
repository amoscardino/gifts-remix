import { ActionFunction, ActionFunctionArgs, LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { redirect, useLoaderData } from "@remix-run/react";
import PersonDto from "~/api/models/personDto";
import { getPerson, updatePerson } from "~/api/personApi.server";
import PersonForm from "~/components/PersonForm";

const loader: LoaderFunction = async ({ params }: LoaderFunctionArgs) => {
  const id = +(params.id || '0');
  const person = await getPerson(id);

  return { person };
};

const EditPerson = () => {
  const { person } = useLoaderData<{ person: PersonDto }>();

  return (
    <PersonForm person={person} />
  );
};

const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const person = {
    id: +(formData.get('id') || '0'),
    name: formData.get('name') as string
  } as PersonDto;

  await updatePerson(person);

  return redirect('/');
};

export { loader, action };
export default EditPerson;
