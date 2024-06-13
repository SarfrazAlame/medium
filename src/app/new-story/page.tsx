"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreatePost } from "@/auth/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import axios from "axios";
import { UploadButton } from "@/utils/uploadthing";

const page = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof CreatePost>>({
    resolver: zodResolver(CreatePost),
    defaultValues: {
      title: "",
      story: "",
      imageUrl:undefined
    },
  });

  const { isValid, isSubmitting } = form.formState;

  const handleSubmit = async (values: z.infer<typeof CreatePost>) => {
    console.log(values);
    try {
      await axios.post("/api/post", values);
      toast.success("post created");
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-4 my-12 items-center"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex w-full justify-center">
                <FormControl>
                  <Input
                    placeholder="Title"
                    {...field}
                    className="w-full h-full md:w-1/3 lg:text-5xl text-3xl text-gray-500 placeholder:text-zinc-400 placeholder:font-serif"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="story"
            render={({ field }) => (
              <FormItem className="flex w-full justify-center">
                <FormControl>
                  <Input
                    placeholder="Tell your story..."
                    {...field}
                    className="w-full h-full md:w-1/3 text-xl text-gray-500 placeholder:text-zinc-400 placeholder:font-serif"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="story"
            render={({ field }) => (
              <FormItem className="flex w-full justify-center">
                <FormControl>
                  <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      console.log("Files: ", res);
                    }}
                    onUploadError={(error: Error) => {
                      toast.error('failed uploads')
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="absolute right-1/3 border top-6 bg-green-800 rounded-full text-gray-50 text-[15px]"
          >
            Publish
          </Button>

        </form>
      </Form>
    </>
  );
};

export default page;
