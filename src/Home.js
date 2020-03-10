import React, { useState, useEffect } from "react";
import "./Home.css";
import "./Spinner.css";
import HeroDetailBox from "./HeroDetailBox.js";
import request from "./requests.js";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

export function Home() {
  const [heroes, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    const getHeroes = () =>
      request()
        .then(results => results.json())
        // .then(async json => {await new Promise(r => setTimeout(r, 3000)); return json})
        .then(heroesJson => {
          setLoading(false);
          setError(heroesJson.code !== 200);
          if (hasError) return;
          const {
            data: { results }
          } = heroesJson;
          setData([...results]);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    if (isLoading) getHeroes();
  });

  let match = useRouteMatch();

  const heroList = !heroes.length
    ? (<div className="spinnerContainer"><div class="lds-ripple"><div></div><div></div></div><p className="is-family-monospace has-text-grey-lighter basis-100 has-text-centered">Searching Earth-616 and beyond...</p></div>)
    : heroes.map((hero, i) => (
        <div className="tile is-parent is-2" key={i}>
          <div className={"has-text-grey-lighter hero tile is-child box"}>
            <p className="subtitle">{hero.name}</p>
            <img
              src={hero.thumbnail.path + "." + hero.thumbnail.extension}
              alt={"Thumbnail image for " + hero.name}
            />
            <Link to={`${match.url}/${hero.id}`} className="has-text-weight-bold">More →</Link>
          </div>
        </div>
      ));

  return (
    <Switch>
      <Route path={`${match.path}/:selectedHeroId`}>
        <HeroDetailBox />
      </Route>
      <Route path={`${match.path}`}>
        <div className="container has-text-light">
          {hasError ? (
            <div className="box">
              <pre>There was an error loading the page.</pre>
            </div>
          ) : (
            <div className="tile is-ancestor">{heroList}</div>
          )}
        </div>
      </Route>
    </Switch>
  );
}

export default Home;
