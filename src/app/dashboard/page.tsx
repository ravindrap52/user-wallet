import Table from "@/components/Table";
import { tableHeaders } from "@/consts";

async function getAccounts() {
  const response = await fetch(`${process.env.GET_ACCOUNTS_URL}`);
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const body = await response.json() as IList;
  return body;
}

export default async function Dashboard() {
  const accounts = await getAccounts();
  return (
    <>
      <Table headers={tableHeaders} accounts={accounts} />
    </>
  );
}
