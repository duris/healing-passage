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
      <div className=" min-h-screen flex flex-col justify-center items-center ">
        <h1 className=" text-4xl">Messages</h1>
        <div className="">
          <div className="max-w-40 overflow-hidden">
            {records ? JSON.stringify(records) : "Loading"}
          </div>
        </div>
        <button className="p-6 border border-s-orange-100 rounded-full m-10">
          <Link href="/create">Add New</Link>
        </button>
      </div>
    </main>
  );
}
