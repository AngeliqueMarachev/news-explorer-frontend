import React from "react";
import "./NewsCard.css";
import { useLocation } from "react-router-dom";

export default function NewsCard({
  image,
  date,
  title,
  text,
  source,
  isSaved,
}) {
  const location = useLocation();

  return (
    <div className="news-card">
      <img className="news-card__image" src={image} alt={title} />

  
      
      <button className="news-card__save" />
      <div className="news-card__label">
        <p className="news-card__signin-text">Sign in to save articles</p>
      </div>
      <div className="news-card__main">
        <p className="news-card__date">{date}</p>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__text">{text}</p>
        <p className="news-card__source">{source}</p>
      </div>
    </div>
  );
}
  
// export default function NewsCard({ image, date, title, text, source, keyword }) {
//   const location = useLocation();

//   return (
//     <div className="news-card">
//       <img className="news-card__image " src={image} alt={title} />
//       {location.pathname === "/" ? (
//         <button className="news-card__button news-card__button_save" />
//       ) : (
//         <button className="news-card__button news-card__button_delete" />
//       )}

//       <div className="news-card__label news-card__label_sign-in">
//         <p className="news-card__signin-text">
//           {location.pathname === "/" ? (
//             "Sign in to save articles"
//           ) : (
//             "Remove from saved"
//           )}
//         </p>
//       </div>

//       {location.pathname === '/saved-news' && (
//         <div className="news-card__label news-card__label_keyword">
//           <p className="news-card__label-text">{keyword}</p>
//           </div>
//       )}

//       <div className="news-card__main">
//         <p className="news-card__date">{date}</p>
//         <h3 className="news-card__title">{title}</h3>
//         <p className="news-card__text">{text}</p>
//         <p className="news-card__source">{source}</p>
//       </div>
//     </div>
//   );
// }
