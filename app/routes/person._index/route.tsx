import { ActionFunction, ActionFunctionArgs, redirect } from "@remix-run/node";
import PersonDto from "~/api/models/personDto";
import { createPerson } from "~/api/personApi";
import PersonForm from "~/components/PersonForm";

const AddPerson = () => (
  <PersonForm person={{} as PersonDto} />
);

const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const person = Object.fromEntries(formData) as unknown as PersonDto;

  await createPerson({ ...person, id: 0 });

  return redirect('/');
};

export { action };
export default AddPerson;
