import FeaturedItem from "../components/FeaturedItem";
import Chart from "../components/Chart";
import WidgetSmall from "../components/WidgetSmall";
import { userData } from "../dummyData";
import "../styles/home.css";
import WidgetLarge from "../components/WidgetLarge";

export default function Home() {
  return (
    <div className="home">
      <FeaturedItem />
      <Chart data={userData} />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  )
}