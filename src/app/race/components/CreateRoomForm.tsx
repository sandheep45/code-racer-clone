"use client";
import Loader from "@/components/assets/svg/Loader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CreateRoomForm = () => {
  const form = useForm();
  const [isLoading, setIsLoading] = useState();

  const onSubmit = () => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Language</FormLabel>
              <FormControl></FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <Button type="submit" className="mt-2 w-full">
          {isLoading ? (
            <Loader className="h-4 w-4 animate-spin" />
          ) : (
            "Create a room"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default CreateRoomForm;
