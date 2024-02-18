import Link from "next/link";
import "./uxitem.css";

function UxItem({ db }) {
  return (
    <div className="uxitem">
      <Link className="uxitem__back" href="/">
        <img className="" src="./images/icon-check.svg" />
        Go Back
      </Link>
      <div className="ux__item__content">
        <div className="ux__item__con">
          <h2 className="ux__item__h2">Status</h2>
          <div
            className={
              db.status === "paid"
                ? "uxlist__btn"
                : db.status === "pending"
                ? "uxlist__btn_1"
                : db.status === "draft"
                ? "uxlist__btn_2"
                : "btn"
            }
          >
            <span
              className={
                db.status === "paid"
                  ? "uxlist__btn__span"
                  : db.status === "pending"
                  ? "uxlist__btn__span_1"
                  : db.status === "draft"
                  ? "uxlist__btn__span_2"
                  : "span"
              }
            ></span>
            <span
              className={
                db.status === "paid"
                  ? "uxlist__btn__span_s"
                  : db.status === "pending"
                  ? "uxlist__btn__span_s_1"
                  : db.status === "draft"
                  ? "uxlist__btn__span_s_2"
                  : "span"
              }
            >
              {db.status}
            </span>
          </div>
        </div>
        <div className="ux__item__divs">
          <button className="ux__btn__edit">Edit</button>
          <button className="ux__btn__delete">Delete</button>
          <button className="ux__btn__mark">Mark as Paid</button>
        </div>
      </div>
      <div className="uxs">
        <div className="uxs__con">
          <div className="uxs__con__1">
            <h2 className="uxs__con__h2">
              # <span className="uxs__h2__span">{db.id}</span>
            </h2>
            <span className="uxs__con__span">{db.description}</span>
          </div>
          <div className="uxs__con__2">
            <span className="uxs__con__li">{db.senderAddress.street}</span>
            <span className="uxs__con__li">{db.senderAddress.city}</span>
            <span className="uxs__con__li">{db.senderAddress.postCode}</span>
            <span className="uxs__con__li">{db.senderAddress.country}</span>
          </div>
        </div>
        <div className="uxs__contents">
          <div className="uxs__cons">
            <div className="uxs__one">
              <div className="uxs__li">
                <span className="uxs__span">Invoice Date</span>
                <h2 className="uxs__li__h2">{db.createdAt}</h2>
              </div>
              <div className="uxs__li">
                <span className="uxs__span">Payment Duo</span>
                <h2 className="uxs__li__h2">{db.paymentDue}</h2>
              </div>
            </div>
            <div className="uxs__two">
              <div className="uxs__li">
                <span className="uxs__span">Bill To</span>
                <h2 className="uxs__li__h2">{db.clientName}</h2>
              </div>
              <div className="uxs__ulist">
                <span className="uxs__ulist__li">
                  {db.clientAddress.street}
                </span>
                <span className="uxs__ulist__li">{db.clientAddress.city}</span>
                <span className="uxs__ulist__li">
                  {db.clientAddress.postCode}
                </span>
                <span className="uxs__ulist__li">
                  {db.clientAddress.country}
                </span>
              </div>
            </div>
          </div>
          <div className="uxs__cl__em">
            <span className="uxs__cl_em__span">Sent to</span>
            <h2 className="uxs__cl__em__h2">{db.clientEmail}</h2>
          </div>
        </div>
      </div>
      <div className="uv__uxs">
        <div className="uv__list__names">
          <h2 className="uv__list__name">Item Name</h2>
          {db.items.map((d) => {
            return <span className="uv__list__sp__name">{d.name}</span>;
          })}
        </div>
        <div className="uv__list__names">
          <h2 className="uv__list__name">QTY.</h2>
          {db.items.map((d) => {
            return <span className="uv__list__sp__name">{d.quantity}</span>;
          })}
        </div>
        <div className="uv__list__names">
          <h2 className="uv__list__name">Price</h2>
          {db.items.map((d) => {
            return <span className="uv__list__sp__name">{d.price}</span>;
          })}
        </div>
        <div className="uv__list__names">
          <h2 className="uv__list__name">Price</h2>
          {db.items.map((d) => {
            return <span className="uv__list__sp__name">{d.total}</span>;
          })}
        </div>
      </div>
      <div className="uv__footer">
        <h2 className="uv__footer__h2">Amount Due</h2>
        <h2 className="uv__footer__total">${db.total}</h2>
      </div>
      <div className="ux__item__hd">
        <button className="ux__btn__edit">Edit</button>
        <button className="ux__btn__delete">Delete</button>
        <button className="ux__btn__mark">Mark as Paid</button>
      </div>
    </div>
  );
}

export default UxItem;
