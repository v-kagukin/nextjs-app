import { RailItemType } from "@/app/types/railItem";
import RailItem from "./RailItem";

import "@/components/Rail/rail.css";

type Props = {
  id: number;
  title: string;
  items: RailItemType[];
};

const Rail = ({ title, items }: Props) => {
  if (!items?.length) return;

  return (
    <div className="rail">
      <div className="railTitle">{title}</div>
      <div className="railItems">
        {items.map((item) => (
          <RailItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Rail;
