import { ActionFunction, ActionFunctionArgs, redirect } from "@remix-run/node";
import PersonDto from "~/api/models/personDto";
import { createPerson } from "~/api/personApi";
import PersonForm from "~/components/PersonForm";

const AddPerson = () => (
  <PersonForm person={{} as PersonDto} />
);

const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const person = {
    id: 0,
    name: formData.get('name') as string
  } as PersonDto;

  await createPerson(person);

  return redirect('/');
};

export { action };
export default AddPerson;
