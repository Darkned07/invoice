import { Item } from "@/components/item/Item";
import UxLists from "@/components/uxlists/UxLists";

async function getData(url) {
  const req = await fetch(url);
  const data = req.json();
  return data;
}

export default async function Home() {
  const docs = await getData("http://localhost:5000/data");
  return (
    <main className="max-container ">
      <Item />
      {!docs && (
        <div className="empty">
          <img className="empty__img" src="./images/illustration-empty.svg" />
          <h2 className="empty__h2">There is nothing here</h2>
          <p className="empty__p">
            Create an invoice by clicking the New Invoice button and get started
          </p>
        </div>
      )}
      {docs && <UxLists docs={docs} />}
    </main>
  );
}
