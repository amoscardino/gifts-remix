import { Link } from "@remix-run/react";
import GiftDto from "../api/models/giftDto";
import GiftBadge from "./GiftBadge";

interface GiftListItemProps {
  gift: GiftDto;
}

const GiftListItem = ({ gift }: GiftListItemProps) => {
  const numberFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  return (
    <Link to={`/gift/${gift.id}?personId=${gift.person.id}`} className="list-group-item list-group-item-action">
      <div className="hstack justify-content-between align-items-center">
        <span>
          {gift.name}
          &nbsp;
          <GiftBadge status={gift.status} />
        </span>

        {gift.price && (
          <span className="text-body-secondary">
            {numberFormat.format(gift.price)}
          </span>
        )}
      </div>
    </Link>
  );
};

export default GiftListItem;
