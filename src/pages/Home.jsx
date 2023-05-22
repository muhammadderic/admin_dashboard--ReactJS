import FeaturedItem from "../components/FeaturedItem";
import Chart from "../components/Chart";
import WidgetSmall from "../components/WidgetSmall";
import { userData } from "../dummyData";
import "../styles/home.css";

export default function Home() {
  return (
    <div>
      <FeaturedItem />
      <Chart data={userData} />
      <WidgetSmall />
    </div>
  )
}