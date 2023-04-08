import cardDetails from "./cardDetails";
import { Link } from "react-router-dom";
export default function Cards() {
  return (
    <div className="cards flex justify-around rounded-md  w-3/4 mt-25 mx-auto">
      {cardDetails.map((card) => {
        return (
          <div
            className="card  bg-white rounded-md shadow-md p-6 w-1/5 bg-gray"
            key={card.id}
          >
            <div className="up flex justify-evenly h-1/2">
              <h3 className="text-xl font-bold mb-4 w-7/10 h-1/2">
                {card.title}
              </h3>
              <img className="h-10 w-10" src={card.iconLink} alt="icon" />
            </div>
            <h3 className="font-serif text-lg text-gray-800 mb-4">
              {card.content}
            </h3>
            <div className="button flex justify-center">
              <Link to="/bookFerry">
                <button className="text-teal-200 hover:text-white bg-teal-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
