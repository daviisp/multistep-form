import "./ReviewForm.css";

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

type ReviewFormProps = {
  data: {
    review: string;
    comment: string;
  };
  updateFieldHandler: (key: string, value: string) => void;
};

const ReviewForm = ({ data, updateFieldHandler }: ReviewFormProps) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input
            type="radio"
            value="unsatisfied"
            name="review"
            checked={data.review === "unsatisfied"}
            onChange={(ev) => updateFieldHandler("review", ev.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value="neutral"
            name="review"
            checked={data.review === "neutral"}
            onChange={(ev) => updateFieldHandler("review", ev.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value="satisfied"
            name="review"
            checked={data.review === "satisfied"}
            onChange={(ev) => updateFieldHandler("review", ev.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value="very_satisfied"
            name="review"
            checked={data.review === "very_satisfied"}
            onChange={(ev) => updateFieldHandler("review", ev.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Conte como foi a sua experiência com o produto"
          required
          value={data.comment || ""}
          onChange={(ev) => updateFieldHandler("comment", ev.target.value)}
        ></textarea>
      </div>
    </div>
  );
};
export default ReviewForm;
