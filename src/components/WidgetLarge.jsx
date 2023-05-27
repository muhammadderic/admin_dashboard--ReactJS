export default function WidgetLarge() {
  const Button = ({ type }) => {
    return <button className={"widgetLargeButtonAll widgetLargeButton" + type}>{type}</button>
  }
  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest Transactions</h3>
      <table className="widgetLargeTable">
        <thead>
          <tr className="widgetLargeTr">
            <th className="widgetLargeTh">Customer</th>
            <th className="widgetLargeTh">Date</th>
            <th className="widgetLargeTh">Amount</th>
            <th className="widgetLargeTh">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="widgetLargeTr">
            <th className="widgetLargeTh widgetLargeImgName">
              <img src="http://placekitten.com/50/50" alt="" className="widgetLargeImg" />
              <span className="widgetLargeName">User 6</span>
            </th>
            <th className="widgetLargeDate">3 February 2023</th>
            <th className="widgetLargeAmount">Rp.50.000.000</th>
            <th className="widgetLargeButton">
              <Button type="Approved" />
            </th>
          </tr>
          <tr className="widgetLargeTr">
            <th className="widgetLargeTh widgetLargeImgName">
              <img src="http://placekitten.com/56/56" alt="" className="widgetLargeImg" />
              <span className="widgetLargeName">User 7</span>
            </th>
            <th className="widgetLargeDate">13 March 2023</th>
            <th className="widgetLargeAmount">Rp.35.000.000</th>
            <th className="widgetLargeButton">
              <Button type="Approved" />
            </th>
          </tr>
          <tr className="widgetLargeTr">
            <th className="widgetLargeTh widgetLargeImgName">
              <img src="http://placekitten.com/57/57" alt="" className="widgetLargeImg" />
              <span className="widgetLargeName">User 8</span>
            </th>
            <th className="widgetLargeDate">23 May 2023</th>
            <th className="widgetLargeAmount">Rp.73.000.000</th>
            <th className="widgetLargeButton">
              <Button type="Approved" />
            </th>
          </tr>
          <tr className="widgetLargeTr">
            <th className="widgetLargeTh widgetLargeImgName">
              <img src="http://placekitten.com/58/58" alt="" className="widgetLargeImg" />
              <span className="widgetLargeName">User 9</span>
            </th>
            <th className="widgetLargeDate">3 June 2023</th>
            <th className="widgetLargeAmount">Rp.60.000.000</th>
            <th className="widgetLargeButton">
              <Button type="Approved" />
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}