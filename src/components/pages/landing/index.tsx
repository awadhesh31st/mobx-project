import React from "react";
import { observer } from "mobx-react";
import LayOutComponent from "../../common/layout/LayOut";
import homeStore from "./store";
import CardUi from "../../common/ui/card";
import AddCardComponent from "../../common/ui/card/addCard";

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
