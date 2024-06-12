"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(1).max(20),
  story: z.string().max(250),
});

const page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      story: "",
    },
  });

  const { isValid, isSubmitting } = form.formState;

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-4 my-12 "
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
