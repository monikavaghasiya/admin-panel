import React from 'react';
import "./widgetLg.css";

const WidgetLg = () => {
    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <thead className="widgetLgTr">
                <tr>
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                </thead>
                <tbody>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="img/admin-avatar.jpeg" alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Monika Vagasiya</span>
                    </td>
                    <td className="widgetLgDate">17 Dec 2021</td>
                    <td className="widgetLgAmount">30,000</td>
                    <td className="widgetLgStatus"><Button type="Approved"></Button></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="img/admin-avatar.jpeg" alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Monika Vagasiya</span>
                    </td>
                    <td className="widgetLgDate">17 Dec 2021</td>
                    <td className="widgetLgAmount">30,000</td>
                    <td className="widgetLgStatus"><Button type="Declined"></Button></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="img/admin-avatar.jpeg" alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Monika Vagasiya</span>
                    </td>
                    <td className="widgetLgDate">17 Dec 2021</td>
                    <td className="widgetLgAmount">30,000</td>
                    <td className="widgetLgStatus"><Button type="Pending"></Button></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="img/admin-avatar.jpeg" alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Monika Vagasiya</span>
                    </td>
                    <td className="widgetLgDate">17 Dec 2021</td>
                    <td className="widgetLgAmount">30,000</td>
                    <td className="widgetLgStatus"><Button type="Approved"></Button></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default WidgetLg;