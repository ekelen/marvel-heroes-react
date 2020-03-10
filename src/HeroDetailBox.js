import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import "./HeroDetailBox.css";
import request from "./requests.js";

export default function HeroDetailBox() {
  const { selectedHeroId: heroId } = useRouteMatch()["params"];
  const [thumbnail, setThumbnail] = useState("");
  const [hasError, setError] = useState(false);
  const [hero, setData] = useState({
    attributionText: "",
    comics: [],
    description: "",
    events: [],
    name: "",
    series: [],
    stories: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHero = heroId =>
      request(heroId)
        .then(results => results.json())
        .then(heroJson => {
          setLoading(false);
          setError(heroJson.code !== 200);
          if (hasError) return;
          const {
            attributionText,
            data: { results }
          } = heroJson;
          const [
            {
              comics: { items: comics },
              description,
              events: { items: events },
              name,
              series: { items: series },
              stories: { items: stories },
              thumbnail: { path, extension }
            }
          ] = results;
          setData({
            attributionText,
            comics,
            description,
            events,
            name,
            series,
            stories
          });
          setThumbnail(`${path}.${extension}`);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    if (loading) getHero(heroId);
  });

  const renderLists = (listTitle, items) =>
    !items || !items.length ? (
      ""
    ) : (
      <div className="column">
        <div className="box listTile">
          <p className="subtitle listTitle has-text-light">{listTitle}</p>
          <ul className="content">
            {items.map((item, i) => (
              <li key={i}>
                <a href={item.resourceURI}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );

  return loading ? (
    <p className="has-text-grey-lighter">Loading...</p>
  ) : hasError ? (
    <p>Error fetching hero...</p>
  ) : (
    <div className="tile is-ancestor box heroInfo">
      <div className="tile is-parent is-12 box heroInfoHead">
        <div className="tile is-8 is-child">
          <h1 className="title heroName basis-100">{hero.name}</h1>
          <p className="content basis-100 has-text-grey-lighter is-family-monospace">
            {hero.description ||
              "No description provided! But they're probably pretty cool. ✌️"}
          </p>
        </div>
        <div className="tile is-4 heroImage">
          <figure className="image">
            <img src={thumbnail} alt={"Image of " + hero.name} />
          </figure>
        </div>
      </div>

      {/* Lists */}
      <div className="tile is-12 appearanceTitle section">
        <h2>Appearances</h2>
      </div>
      <div className="columns">
        {renderLists("comics", hero.comics)}
        {renderLists("series", hero.series)}
        {renderLists("stories", hero.stories)}
        {renderLists("events", hero.events)}
      </div>
      <footer className="tile is-12">
        <a className="attributionText" href="http://marvel.com">
          {hero.attributionText}
        </a>
      </footer>
    </div>
  );
}
