import React from "react";
import { observer } from "mobx-react";
import LayOutComponent from "./common/LayOut";
import CardUi from "./ui/card";
import homeStore from "../store/homeStore";
import AddCardComponent from "./ui/addCard";

const HomeComponent = observer(() => {
  return (
    <LayOutComponent>
      <div className="flex justify-start items-center flex-wrap gap-4">
        {homeStore?.cardList.map((item, key) => {
          return <CardUi {...item} key={key} />;
        })}
        <AddCardComponent />
      </div>
    </LayOutComponent>
  );
});

export default HomeComponent;
