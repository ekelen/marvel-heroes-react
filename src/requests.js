var MD5 = require("md5.js");

export default function(characterId = "") {
  const getCharactersEndpoint = `/v1/public/characters${
    !!characterId ? "/" + characterId : ""
  }`;
  const date = `${Date.now()}`;
  const privateKey =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_API_PRIVATE
      : "someSecureKey";
  const hashString = `${date}${privateKey}${process.env.REACT_APP_API_PUBLIC}`;
  const hash = new MD5().update(hashString).digest("hex");
  const queryParams = `apikey=${process.env.REACT_APP_API_PUBLIC}&ts=${date}&hash=${hash}`;
  const url = `${process.env.REACT_APP_BASE_URL}${getCharactersEndpoint}?${queryParams}`;
  return fetch(url);
}
