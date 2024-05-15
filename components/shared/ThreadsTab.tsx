import { fetchUserPosts } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import ThreadCard from "../cards/ThreadCard";

interface Props {
    currentUserId: string;
    accountId: string;
    accountType: string;
}

export default async function ThreadsTab({currentUserId, accountId, accountType}:Props) {
  let result=await fetchUserPosts(accountId);
  if(!result){
    redirect("/");
  }
  return (
    <section className="mt-9 flex flex-col gap-10">
      {result.threads.map((thread:any)=>(
        <ThreadCard 
        key={thread._id} 
        id={thread._id}
        currentUserId={currentUserId}
        parentId={thread.parentId}
        content={thread.text}
        author={accountType==="User"?
            {name:result.name, id:result.id, image:result.image}:
            {name:thread.author.name, id:thread.author.id, image:thread.author.image}
        }
        community={thread.community}
        comments={thread.children}
        createdAt={thread.createdAt}
        />
      ))}
    </section>
  )
}