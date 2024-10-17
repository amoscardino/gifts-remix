import GiftListItem from "./GiftListItem";
import PersonDto from "../api/models/personDto";
import GiftDto from "../api/models/giftDto";
import { Link } from "@remix-run/react";

interface PersonCardProps {
  person: PersonDto;
  gifts: GiftDto[];
}

const PersonCard = ({ person, gifts }: PersonCardProps) => {
  const numberFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  const totalAmount = gifts.reduce((total, gift) => total + (gift.price || 0), 0);

  return (
    <div className="card mb-2 border rounded shadow">
      <div className="card-header">
        {person.name}
      </div>

      {gifts.length === 0 && (
        <div className="card-body">
          <p className="card-text text-body-secondary text-center">
            No gifts yet...
          </p>
        </div>
      )}

      {gifts.length > 0 && (
        <div className="list-group list-group-flush">
          {gifts.map(gift => (
            <GiftListItem key={gift.id} gift={gift} />
          ))}

          <div className="list-group-item">
            <div className="hstack justify-content-between">
              <span>
                Total
              </span>

              <strong>
                {numberFormat.format(totalAmount)}
              </strong>
            </div>
          </div>
        </div>
      )}

      <div className="card-footer">
        <div className="hstack flex-row-reverse justify-content-between">
          <Link to={`/gift?personId=${person.id}`} className="btn btn-outline-primary btn-sm">
            Add Gift
          </Link>

          <Link to={`/person/${person.id}`} className="btn btn-outline-secondary btn-sm">
            Edit Person
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
