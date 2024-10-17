import { GiftStatus } from "./giftStatus";
import PersonDto from "./personDto";

export default interface GiftDto {
  id: number;
  person: PersonDto;
  name: string;
  status: GiftStatus;
  price: number | null;
  url: string | null;
  notes: string | null;
}
