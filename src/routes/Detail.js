import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useTitle = (initalTitle) => {
  const [title, setTitle] = useState(initalTitle);
  const makeTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(makeTitle, [title]);
  return setTitle;
};

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
  };
  useEffect(() => {
    getMovie();
  }, []);
  const titleUpdate = useTitle("Loading");
  setTimeout(() => titleUpdate("Home"), 5000);
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
}
export default Detail;
