import { observer } from "mobx-react";

export interface CardUiProps {
  title: string;
}


const CardUi: React.FC<CardUiProps> = observer(({ title }) => {
  return (
    <div className="relative overflow-hidden w-52 h-52 rounded-3xl">
      <img
        src={`https://picsum.photos/seed/picsum/200`}
        className="relative z-0 block h-[150%] min-w-full object-cover"
        alt={title}
      />
      <div className="absolute left-0 right-0 top-0 bottom-0 z-[1] text-white bg-gradient-to-b from-zinc-400 to-slate-900 opacity-60">
        <div className="absolute bottom-5 px-8 text-left">
          <h3 className="font-bold leading-5">{title}</h3>
        </div>
      </div>
    </div>
  );
});

export default CardUi;
