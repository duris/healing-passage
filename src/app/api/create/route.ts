import PocketBase from "pocketbase";

const pb = new PocketBase("https://passage.pockethost.io");

export async function POST() {
  try {
    const data = {
      Title: "test",
      Message: "test",
    };

    const record = await fetch(
      "https://passage.pockethost.io/api/collections/posts/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    return Response.json({ message: record });
  } catch (error) {
    return Response.json({ Error: error });
  }
}
