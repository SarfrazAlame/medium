'use client'
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { FaComment } from "react-icons/fa";
import { PostWithAll } from "@/auth/types";
import { Form, FormField, FormItem } from "./ui/form";
import { useForm } from "react-hook-form";
import { CreateResponse } from "@/auth/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResponsePost } from "@/auth/action";
import toast from "react-hot-toast";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BsThreeDots } from "react-icons/bs";
import { PiHandsClappingThin } from "react-icons/pi";
import { Response } from "@prisma/client";

type User =
  | {
      id: string;
      name: string | null | undefined;
      email: string | null | undefined;
      image: string | null | undefined;
    }
  | undefined;

const Comment = ({
  post,
  user,
  response,
}: {
  post: PostWithAll;
  user: User;
  response: Response;
}) => {
  const form = useForm<z.infer<typeof CreateResponse>>({
    resolver: zodResolver(CreateResponse),
    defaultValues: {
      body: "",
    },
  });

  const { isValid, isSubmitting } = form.formState;

  const onSubmt = async (values: z.infer<typeof CreateResponse>) => {
    try {
      await ResponsePost(post?.id, values);
      toast.success("Response sent");
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div className="flex items-center gap-1">
            <FaComment className="text-slate-500 cursor-pointer text-sm" />
            <p className="text-gray-600 text-sm">{post?.response?.length}</p>
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Responses ({post?.response?.length})</SheetTitle>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmt)}>
                <FormField
                  control={form.control}
                  name="body"
                  render={({ field }) => (
                    <FormItem>
                      <SheetDescription className=" h-56 shadow-lg relative ">
                        <div className="flex gap-3 p-4">
                          <div>
                            <Image
                              src={user?.image!}
                              alt=""
                              width={30}
                              height={30}
                              className="rounded-full"
                            />
                          </div>
                          <p className="text-gray-800">{user?.name}</p>
                        </div>
                        <div>
                          <Input
                            placeholder="What are your thoughts"
                            className="placeholder:text-gray-400 placeholder:font-light box-border"
                            {...field}
                          />
                        </div>

                        <div className="absolute right-0 bottom-0 p-4 flex items-center gap-5">
                          <p className="text-black cursor-pointer">Cancel</p>
                          <Button
                            type="submit"
                            disabled={!isValid || isSubmitting}
                            className="border px-3 py-2 rounded-full bg-green-600 text-gray-50"
                          >
                            Response
                          </Button>
                        </div>
                      </SheetDescription>
                      <SheetDescription>
                        <div className="my-8">
                          {/* @ts-ignore */}
                          {response.map((res: any) => (
                            <div className="flex flex-col  -gap-2">
                              <div className="flex border-t my-4 justify-between">
                                <div className="flex h-fit pt-4 gap-2 ">
                                  <div>
                                    <Image
                                      src={res.user.image}
                                      alt=""
                                      width={35}
                                      height={35}
                                      className="rounded-full"
                                    />
                                  </div>
                                  <div>
                                    <p>{res.user.name}</p>
                                  </div>
                                </div>
                                <div className="mt-3">
                                  <BsThreeDots />
                                </div>
                              </div>
                              <div>
                                <p className="text-gray-950">{res.body}</p>
                              </div>
                              <div className="mt-3 flex justify-between">
                                <PiHandsClappingThin className="cursor-pointer text-xl text-black" />
                                {/* <p>{res.claps.length}</p> */}
                                <button className="text-black">Reply</button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </SheetDescription>
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Comment;
