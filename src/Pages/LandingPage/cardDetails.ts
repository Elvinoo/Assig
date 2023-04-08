type ICardDetails = {
  id: number;
  title: string;
  iconLink: string;
  content: string;
};

const cardDetails: ICardDetails[] = [
  {
    id: 1,
    title: "Plan an incredible trip",
    iconLink: "https://cdn-icons-png.flaticon.com/512/1663/1663017.png",
    content: "Customize your trip",
  },
  {
    id: 2,
    title: "The Best Hotels",
    iconLink: "https://cdn-icons-png.flaticon.com/512/1475/1475996.png",
    content: "The top stays in your dreamland",
  },
  {
    id: 3,
    title: "Explore things to do",
    iconLink: "https://cdn-icons-png.flaticon.com/512/868/868355.png",
    content: "Explore the must activities",
  },
  {
    id: 4,
    title: "Ferry Bookings",
    iconLink: "https://cdn-icons-png.flaticon.com/512/2848/2848465.png",
    content: "'SWIM' between islands",
  },
];

export default cardDetails;
