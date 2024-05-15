"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { usePathname, useRouter } from "next/navigation";
import { CommentValidation } from "@/lib/validations/thread";
import Image from "next/image";
import { addCommentToThread } from "@/lib/actions/thread.actions";


interface Props {
    threadId:string,
    currentUserImg:string,
    currentUserId:string
}

export default function Comment({threadId,currentUserImg,currentUserId}:Props) {
    const router=useRouter();
    const pathname=usePathname();
    const form = useForm<z.infer<typeof CommentValidation>>({
        resolver: zodResolver(CommentValidation),
        defaultValues: {
          thread:"",
        },
    })
    async function onSubmit(values: z.infer<typeof CommentValidation>) {
        await addCommentToThread(
            threadId,
            values.thread,
            JSON.parse(currentUserId),
            pathname
        )
        form.reset();
    }
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="comment-form">
        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex w-full items-center gap-3">
              <FormLabel>
                <Image
                src={currentUserImg}
                alt="Profile Image"
                width={48}
                height={48}
                className="rounded-full object-cover"
                />
              </FormLabel>
              <FormControl className="border-none bg-transparent">
                <Input 
                type="text"
                placeholder="Comment..."
                className="no-focus text-light-1 outline-none"
                {...field} 
                />
              </FormControl>
              <FormMessage {...field}/>
            </FormItem>
          )}
        />
        <Button type="submit" className="comment-form_btn">
            Reply
        </Button>
        </form>
    </Form>
  )
}
