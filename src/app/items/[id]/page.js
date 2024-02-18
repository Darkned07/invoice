import UxItem from "./UxItem";

export async function getDoc(id) {
  const req = await fetch(`http://localhost:4000/data/${id}/`);
  const data = await req.json();
  return data;
}

async function GetItemdoc({ params }) {
  const db = await getDoc(params.id);
  return (
    <div>
      <UxItem db={db} />
    </div>
  );
}

export default GetItemdoc;
