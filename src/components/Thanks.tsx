import "./Thanks.css";

import { ReactElement } from "react";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

type Thanks = {
  data: {
    name: string;
    review: string;
    comment: string;
  };
};

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data }: Thanks) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de 10%
        de desconto para a sua próxima compra.
      </p>
      <p>Para concluir sua avaliação, clique no botão de enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação {data.name}:</h3>
      <p className="review-data-opinion">
        <span>Satisfação com o produto:</span>
        {emojiData[data.review as keyof typeof emojiData]} // Primeira pergunta
        a se fazer: você quer exibit o emojiData não é? Coloque o emojiData
        entre chaves. Porém, você quer exibir o valor que está em data.review, e
        pra substituir o valor que está em string em data.review, você usa 'as
        keyof typeof emojiData'. Você está modificando o valor de data.review
        (que antes era string) para emojiData. Internamente, o JavaScript
        entenderá que "unsatisfied" = unsatisfied.
      </p>
      <p className="review-data">
        <span>Comentário:</span> {data.comment}
      </p>
    </div>
  );
};
export default Thanks;
