import { useState, useEffect } from "react";
import BaseButton from "../components/BaseButton";
import axios from "axios";
import { DOMAIN } from "./constants";

const Trello = ({ list }) => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const axiosGetCards = async () => {
      try {
        const response = await axios.get(DOMAIN + `/${list}/get-cards`);
        if (response && response.data) setCardList(response.data);
      } catch (error) {
        console.log("error getting cards", error);
      }
    };

    console.log("useEffect fired!");
    axiosGetCards();
  }, []);

  const axiosGetAttachments = async (id) => {
    try {
      const { data } = await axios.get(
        `https://api.trello.com/1/cards/${id}/attachments`
      );
      return data;
    } catch (error) {
      console.log("error getting attachments", error);
    }
  };

  const manageLink = async (card) => {
    let cardName = card.name.toLowerCase();
    let URL = card.desc;

    if (cardName === "resume") {
      const attachments = await axiosGetAttachments(card.id);
      if (!attachments[0]) return;
      const firstAttachmentName = attachments[0].fileName;
      const firstAttachmentId = attachments[0].id;
      window.open(
        `https://api.trello.com/1/cards/${card.id}/attachments/${firstAttachmentId}/download/${firstAttachmentName}`
      );
    }

    if (!URL) return;

    URL = URL.toLowerCase();
    if (URL.includes("https://")) URL = URL.replace("https://", "");
    if (URL.includes("http://")) URL = URL.replace("http://", "");
    window.open(`https://${URL}`);
  };

  return (
    <>
      {cardList &&
        cardList.map((card, idx) => (
          <BaseButton onClick={() => manageLink(card)} key={idx}>
            {card.name}
          </BaseButton>
        ))}
    </>
  );
};

export default Trello;
