import { useEffect, useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import homeStore from "../../store/homeStore";
import { quotes } from "../../lib";
import { observer } from "mobx-react";

const AddCardComponent = observer(() => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (count > 0 && count < quotes.length) {
      homeStore.newCard = quotes[count];
      homeStore.addCard();
    } else {
      setCount(0);
    }
  }, [count]);

  const handleOnClick = () => {
    setCount((old) => old + 1);
  };

  return (
    <div
      className="relative overflow-hidden w-52 h-52 rounded-3xl cursor-pointer"
      onClick={handleOnClick}
    >
      <img
        src={`https://picsum.photos/200`}
        className="relative z-0 block h-[150%] min-w-full object-cover"
        alt="add"
      />
      <div className="absolute left-0 right-0 top-0 bottom-0 z-[1] text-white bg-gradient-to-b from-zinc-400 to-slate-900 opacity-60">
        <div className="h-52 flex justify-center items-center">
          <FaPlusSquare className="text-5xl opacity-80" />
        </div>
      </div>
    </div>
  );
});

export default AddCardComponent;
