import PersonDto from "./models/personDto";

const baseUrl = process.env.API_URL + '/person';

const getPeople = async (): Promise<PersonDto[]> => {
  const response = await fetch(baseUrl);
  return response.json();
};

const getPerson = async (id: number): Promise<PersonDto> => {
  const response = await fetch(baseUrl + '/' + id);
  return response.json();
};

const createPerson = async (person: PersonDto) => {
  await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(person)
  });
};

const updatePerson = async (person: PersonDto) => {
  await fetch(baseUrl + '/' + person.id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(person)
  });
};

const deletePerson = async (id: number) => {
  await fetch(baseUrl + '/' + id, { method: 'DELETE' });
};

export { getPeople, getPerson, createPerson, updatePerson, deletePerson };
