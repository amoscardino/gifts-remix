import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getGifts } from "~/api/giftApi.server";
import GiftDto from "~/api/models/giftDto";
import PersonDto from "~/api/models/personDto";
import { getPeople } from "~/api/personApi.server";
import GrandTotal from "~/components/GrandTotal";
import PersonCard from "~/components/PersonCard";

const meta: MetaFunction = () => {
  return [
    { title: "Gifts Remix" }
  ];
};

interface LoaderData {
  people: PersonDto[];
  gifts: GiftDto[];
}

const loader: LoaderFunction = async () => {
  const people = await getPeople();
  const gifts = await getGifts();

  return {
    people,
    gifts
  };
};

const Index = () => {
  const { people, gifts } = useLoaderData<LoaderData>();
  const totalAmount = gifts.reduce((total, gift) => total + (gift.price || 0), 0);

  return (
    <div className="vstack gap-3">
      <div className="hstack justify-content-end">
        <Link to="/person" className="btn btn-outline-primary btn-sm">
          Add Person
        </Link>
      </div>

      {people.map(person => {
        const personGifts = gifts.filter(gift => gift.person.id === person.id);

        return (
          <PersonCard key={person.id} person={person} gifts={personGifts} />
        );
      })}

      <GrandTotal amount={totalAmount} />
    </div>
  );
};

export { loader, meta };
export default Index;
