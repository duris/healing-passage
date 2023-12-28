import Image from "next/image";
import flower from "/public/flower.png";
import Messages from "../../public/components/Messages";
import PocketBase from "pocketbase";
import Link from "next/link";

type Posts = {
  records: Post[];
};

type Post = {
  Message: string;
  Title: string;
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  updated: string;
};

const url = "https://passage.pockethost.io/";
const client = new PocketBase(url);

export default async function Home() {
  const records = await client.collection("posts").getFullList({
    sort: "-created",
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#2b5657]">
      <Image src={flower} alt="flower" className="w-100" />
      <div className=" min-h-screen flex flex-col justify-center items-center">
        <h1 className=" text-4xl">Messages</h1>
        <div className=" p-10 m-10">
          <p>{records ? JSON.stringify(records) : "Loading"}</p>
        </div>
        <Link href="/create">Add New</Link>
      </div>
    </main>
  );
}
