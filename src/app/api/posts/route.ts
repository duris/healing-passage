import PocketBase from "pocketbase";

const url = "https://passage.pockethost.io/";
const client = new PocketBase(url);

export async function GET() {
  const records = await client.collection("posts").getFullList({
    sort: "-created",
  });

  return Response.json({ message: records });
}
