import Link from "next/link";
import "./uxlists.css";

function UxLists({ docs }) {
  console.log(docs);
  return (
    <div className="uxlist">
      <ul className="uxlist__ul">
        {docs &&
          docs.map((doc) => {
            return (
              <li>
                <Link className="uxlist__li" href={`/items/${doc.id}`}>
                  <div className="uxlist__res__one">
                    <h2 className="uxlist__h2">
                      #<span className="uxlist__h2__span">{doc.id}</span>
                    </h2>
                    <span className="uxlist__span__one">{doc.paymentDue}</span>
                  </div>
                  <div className="uxlist__res__two">
                    <div className="uxlists">
                      <h3 className="uxlist__h3">{doc.clientName}</h3>
                      <h2 className="uxlist__h2__one">
                        ${doc.total.toLocaleString("en", "us")}
                      </h2>
                    </div>
                    <div
                      className={
                        doc.status === "paid"
                          ? "uxlist__btn"
                          : doc.status === "pending"
                          ? "uxlist__btn_1"
                          : doc.status === "draft"
                          ? "uxlist__btn_2"
                          : "btn"
                      }
                    >
                      <span
                        className={
                          doc.status === "paid"
                            ? "uxlist__btn__span"
                            : doc.status === "pending"
                            ? "uxlist__btn__span_1"
                            : doc.status === "draft"
                            ? "uxlist__btn__span_2"
                            : "span"
                        }
                      ></span>
                      <span
                        className={
                          doc.status === "paid"
                            ? "uxlist__btn__span_s"
                            : doc.status === "pending"
                            ? "uxlist__btn__span_s_1"
                            : doc.status === "draft"
                            ? "uxlist__btn__span_s_2"
                            : "span"
                        }
                      >
                        {doc.status}
                      </span>
                    </div>
                  </div>
                  <img
                    className="uxlist__img"
                    src="./images/icon-arrow-right.svg"
                  />
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default UxLists;
