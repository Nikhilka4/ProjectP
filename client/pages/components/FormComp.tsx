"use client";

type Props = {};

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: "Full Name must be at least 2 characters.",
    })
    .refine((value) => /^[A-Za-z\s]+$/.test(value), {
      message: "Full Name can only contain alphabets and spaces.",
    }),
  emailAddress: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().length(10, {
    message: "Phone number must be 10 digits.",
  }),
});

const FormComp = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      phone: "",
    },
  });

  const handleSubmit = () => {
    alert(`Form submitted! ${JSON.stringify(form.getValues(), null, 2)}`);
  };

  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="bg-[#fff5ea] bg-opacity-20 backdrop-filter backdrop-blur-xl border border-gray-300 rounded-lg p-6 shadow-lg mt-16 mx-auto max-w-[800px] flex flex-col justify-center gap-4"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="john doe" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="johndoe@gmail.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="1234567890" type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button
            type="submit"
            className="max-w-[200px] shadow-2xl rounded-xl bg-white text-black hover:bg-black hover:text-white"
          >
            Book Appointment
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormComp;
