import classNames from "classnames";
import { GiftStatus } from "../api/models/giftStatus";

interface GiftBadgeProps {
    status: GiftStatus;
}

const GiftBadge = ({ status }: GiftBadgeProps) => {
    const badgeClasses = classNames('badge', {
        'text-bg-secondary': status === GiftStatus.Idea,
        'text-bg-info': status === GiftStatus.Purchased,
        'text-bg-primary': status === GiftStatus.Arrived,
        'text-bg-success': status === GiftStatus.Wrapped,
    });

    return (
        <span className={badgeClasses}>
            {status}
        </span>
    );
};

export default GiftBadge;
