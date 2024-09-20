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
import Image from "next/image";
import React from "react";
import countries from "@/data/countries";
const Form = () => {
  return (
    <div className="p-5  bg-white/80 opacity-90 backdrop-blur-sm rounded-md ">
      <form className="space-y-4">
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
            name="full-name"
            className="mt-1 block w-full px-3 py-1 border border-[#F9F8F8] rounded-md shadow-sm focus:outline-none focus:ring-[#3B6F80] bg-[#F9F8F8] md:bg-white"
            placeholder="Enter your full name"
          />
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
            name="email"
            className="mt-1 block w-full px-3 py-1 border border-[#F9F8F8] rounded-md shadow-sm focus:outline-none focus:ring-[#3B6F80] focus:border-[#3B6F80] bg-[#F9F8F8] md:bg-white"
            placeholder="Enter your email"
          />
        </div>

        {/* Phone Number with Indian Country Code */}
        <div className="w-full">
          <Label
            className="block text-sm font-medium text-gray-700"
            htmlFor="phone"
          >
            Phone Number
          </Label>
          <div className="flex items-center">
            <span className="inline-flex items-center px-3 py-1 border border-r-0 border-[#F9F8F8] rounded-l-md bg-gray-50 text-gray-500 text-sm">
              <Image
                width={14}
                height={14}
                src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                alt="India flag"
                className="h-4 w-6 mr-2"
              />
              +91
            </span>
            <Input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-full px-3 py-1 border border-[#F9F8F8] rounded-r-md shadow-sm focus:outline-none focus:ring-[#3B6F80] focus:border-[#3B6F80] bg-[#F9F8F8] md:bg-white"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Country Selector */}
          <div className="w-full">
            <Label
              className="block text-sm font-medium text-gray-700"
              htmlFor="country"
            >
              Country of Residence
            </Label>
            <Select>
              <SelectTrigger className="w-full bg-[#F9F8F8] md:bg-white mt-1">
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
            className="block text-sm font-medium text-gray-800"
            htmlFor="description"
          >
            Please describe your motivation to obtain residency in the US:
          </Label>
          <Textarea
            id="description"
            name="description"
            rows={4}
            className="mt-1 block w-full px-3 py-1 border border-[#F9F8F8] rounded-md shadow-sm focus:outline-none focus:ring-[#3B6F80] focus:border-[#3B6F80] bg-[#F9F8F8] md:bg-white h-10"
            placeholder="Enter your message"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="text-[#C5922C] bg-white  px-6 py-3 border border-[#C5922C] rounded-md font-[family-name:var(--font-manrope)] text-sm md:text-[1rem] "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
