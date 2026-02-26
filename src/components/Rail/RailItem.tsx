import { RailItemType } from "@/app/types/railItem";

type Props = {
  item: RailItemType;
};

const RailItem = ({ item }: Props) => {
  return (
    <div className="railItem">
      <div className="poster">
        {item.poster && <img src={item.poster} alt="" />}
      </div>
      <div className="title">{item.title}</div>
    </div>
  );
};

export default RailItem;
