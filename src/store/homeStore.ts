import { makeAutoObservable } from "mobx";
import { CardUiProps } from "../components/ui/card";

const updateCardList = (
  cardList: CardUiProps[],
  newCard: string
): CardUiProps[] => [...cardList, { title: newCard }];

class HomeStore {
  homeTitle: string = "Welcome to home page";
  cardList: CardUiProps[] = [
    { title: "Dream big, achieve bigger" },
    { title: "Love conquers all, always" },
  ];
  newCard: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  addCard() {
    this.cardList = updateCardList(this.cardList, this.newCard);
  }
}

const homeStore = new HomeStore();
export default homeStore;
