import "./SavedNewsHeader.css";
import Navigation from "../Navigation/Navigation";
import MobileMenu from "../MobileMenu/MobileMenu";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from 'react';

export default function SavedNewsHeader({
  articles,
  onLogout
}) {
  const currentUser = useContext(CurrentUserContext);
  // debugger;
  return (
    <header className="saved-header">
      <Navigation isLoggedIn={true} onLogout={onLogout} />
      <MobileMenu isLoggedIn={true} onLogout={onLogout} />
      
      <section className="saved-header__text">
        <h4 className="saved-header__title">Saved articles</h4>
        <h2 className="saved-header__description">
          {/* {currentUser.username}, you have {articles.length} saved articles */}
          {currentUser.name}, you have {0} saved articles
        </h2>
        <p className="saved-header__keywords">
          By keywords: {""}
          <strong>
            <span>
              {/* {articles[0].keyword}, {articles[1].keyword} and {articles.length - 2}others */}
            </span>
          </strong>
        </p>
      </section>
    </header>
  );
}
