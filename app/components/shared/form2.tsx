"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import countries from "@/data/countries";


import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
// import countryList from "react-select-country-list";

// Define Zod schema for validation
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number should have at least 10 digits" }),
  country: z.string().min(1, { message: "Please select a country" }),
  description: z.string().optional(),
});

// Infer the TypeScript type from the Zod schema
type FormData = z.infer<typeof formSchema>;

const Form2 = () => {
  const [loading, setLoading] = useState(false);

  // const [selectedCountry, setSelectedCountry] = useState({
  //   label: "India",
  //   value: "IN",
  //   flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
  //   code: "+91",
  // });

  // const countriesWithIcon = countryList()
  //   .getData()
  //   .map((country: any) => ({
  //     label: country.label,
  //     value: country.value,
  //     flag: `https://flagcdn.com/16x12/${country.value.toLowerCase()}.png`, // Using flagcdn.com for country flags
  //     code: `+${country.dial_code}`, // Assuming you have a dial code mapping
  //   }));

  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);

      //  await addDoc(collection(db, "leads"), {
      //   fullName: data.fullName,
      //   email: data.email,
      //   phone: data.phone,
      //   country: data.country,
      //   description: data.description,
      //   timestamp: new Date(),
      // });

      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Reset the form fields
        reset();
        toast.success("Form submitted successfully!");
      } else {
        toast.error("Error submitting the form. Please try again.");
      }


      // Show success toast
      toast.success("Form submitted successfully!");

      setLoading(false);
    } catch (error) {
      console.error("Error adding document: ", error);

      // Show error toast
      toast.error("Error submitting the form. Please try again.");

      setLoading(false);
    }
  };

  // const handleCountryChange = (selected: any) => {
  //   setSelectedCountry(selected);
  // };

  return (
    <div className="p-5 md:p-[3rem] bg-white">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row gap-4">
          {/* Full Name */}
          <div className="w-full">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="full-name"
            >
              Full Name
            </label>
            <Input
              type="text"
              id="full-name"
              {...register("fullName")}
              className={`mt-1 block w-full px-3 py-2 border ${errors.fullName ? 'border-red-500' : 'border-[#F9F8F8]'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              placeholder="Enter your full name"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>

          {/* Email */}
          <div className="w-full">
            <Label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email Address
            </Label>
            <Input
              type="email"
              id="email"
              {...register("email")}
              className={`mt-1 block w-full px-3 py-2 border ${errors.fullName ? 'border-red-500' : 'border-[#F9F8F8]'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
        </div>

        <div className="flex flex-row gap-4">
          {/* Phone Number with Indian Country Code */}
          <div className="w-full">
            <Label
              className="block text-sm font-medium text-gray-700"
              htmlFor="phone"
            >
              Phone Number
            </Label>
            <div className="flex items-center">
              {/* <span className="inline-flex items-center px-3 py-2 border border-r-0 ${errors.fullName ? 'border-red-500' : 'border-[#F9F8F8]'} rounded-l-md bg-gray-50 text-gray-500 text-sm">
                <Image
                  width={14}
                  height={14}
                  src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                  alt="India flag"
                  className="h-4 w-6 mr-2"
                />
                +91
              </span> */}
              <Input
                type="tel"
                id="phone"
                {...register("phone")}
                className={`mt-1 block w-full px-3 py-2 border ${errors.fullName ? 'border-red-500' : 'border-[#F9F8F8]'} rounded-r-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                placeholder="Enter your phone number"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          {/* Country Selector */}
          <div className="w-full">
            <Label
              className="block text-sm font-medium text-gray-700"
              htmlFor="country"
            >
              Country of Residence
            </Label>
            <Select onValueChange={(value) => setValue("country", value)}>
              <SelectTrigger className="w-full ${errors.fullName ? 'border-red-500' : 'border-[#F9F8F8]'}">
                <SelectValue placeholder="Choose a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Countries</SelectLabel>
                  {countries.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      <span>({country.code})</span> {country.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Description */}
        <div>
          <Label
            className="block text-sm font-medium text-gray-700"
            htmlFor="description"
          >
            Please describe your motivation to obtain residency in the US:
          </Label>
          <Textarea
            id="description"
            {...register("description")}
            rows={4}
            className="mt-1 block w-full px-3 py-2 border ${errors.fullName ? 'border-red-500' : 'border-[#F9F8F8]'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-10"
            placeholder="Enter your message"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className={`text-[#C5922C]  px-6 py-3 border border-[#C5922C] rounded-md font-[family-name:var(--font-manrope)] text-sm md:text-[1rem]  ${loading ? 'opacity-50' : ''}`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
