import PocketBase from "pocketbase";

const pb = new PocketBase("https://passage.pockethost.io");

export async function POST() {
  try {
    const data = {
      Title: "test",
      Message: "test",
    };

    const record = await pb.collection("posts").create(data);

    return Response.json({ message: record });
  } catch (error) {
    return Response.json({ message: error });
  }
}
