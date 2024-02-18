import "./item.css";

export function Item() {
  return (
    <div className="item">
      <div className="item__content">
        <h2 className="item__h2">Invoices</h2>
        <span className="item__span">No invoices</span>
      </div>
      <div className="item__div">
        <button className="item__div__btn">
          Filter by status <img src="./images/icon-arrow-down.svg" />
        </button>
        <div className="hd">
          <ul className="hd__ul">
            <li className="hd__ul__li">
              <input className="hd__ul__input" type="checkbox" />
              <span className="hd__ul__span">Draft</span>
            </li>
            <li className="hd__ul__li">
              <input className="hd__ul__input" type="checkbox" />
              <span className="hd__ul__span">Pending</span>
            </li>
            <li className="hd__ul__li">
              <input className="hd__ul__input" type="checkbox" />
              <span className="hd__ul__span">Paid</span>
            </li>
          </ul>
        </div>
        <button className="item__div__btn__btn">
          <div className="img__div__help">
            <img className="im__con__btn" src="./images/icon-plus.svg" />
          </div>
          New Invoice
        </button>
      </div>
    </div>
  );
}
