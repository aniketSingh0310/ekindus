"use client"
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import countries from "@/data/countries";

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

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // const onSubmit = async (data: FormData) => {
  //   try {
  //     setLoading(true);
  //     console.log("Submitted Form Data:", data);
  
  //     // Check for undefined values
  //     if (!data.fullName || !data.email || !data.phone || !data.country || !data.description) {
  //       throw new Error("All fields are required");
  //     }
  
  //     const docRef = await addDoc(collection(db, "leads"), {
  //       fullName: data.fullName,
  //       email: data.email,
  //       phone: data.phone,
  //       country: data.country,
  //       description: data.description,
  //       timestamp: new Date(),
  //     });
  
  //     console.log("Document written with ID: ", docRef.id);
  //     setLoading(false);
  //     setSuccess(true);
  //   } catch (error) {
  //     console.error("Error adding document: ", error);
  //     setLoading(false);
  //   }
  // };
  
  const onSubmit=()=>{
setLoading(true)
setSuccess(true)
  }
  

  return (
    <div className="p-5 bg-white/80 opacity-90 backdrop-blur-sm rounded-md ">
      {success ? (
        <p className="text-green-500">Form submitted successfully!</p>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700" htmlFor="full-name">
              Full Name
            </label>
            <Input
              type="text"
              id="full-name"
              {...register("fullName")}
              className={`mt-1 block w-full px-3 py-1 border ${errors.fullName ? 'border-red-500' : 'border-[#F9F8F8]'} rounded-md shadow-sm bg-white`}
              placeholder="Enter your full name"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>

          {/* Email */}
          <div className="w-full">
            <Label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email Address
            </Label>
            <Input
              type="email"
              id="email"
              {...register("email")}
              className={`mt-1 block w-full px-3 py-1 border ${errors.email ? 'border-red-500' : 'border-[#F9F8F8]'} rounded-md shadow-sm bg-white`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Phone Number */}
          <div className="w-full">
            <Label className="block text-sm font-medium text-gray-700" htmlFor="phone">
              Phone Number
            </Label>
            <Input
              type="tel"
              id="phone"
              {...register("phone")}
              className={`mt-1 block w-full px-3 py-1 border ${errors.phone ? 'border-red-500' : 'border-[#F9F8F8]'} rounded-md shadow-sm bg-white`}
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          {/* Country Selector */}
          <div className="w-full">
            <Label className="block text-sm font-medium text-gray-700" htmlFor="country">
              Country of Residence
            </Label>
            <Select onValueChange={(value) => setValue("country", value)}>
              <SelectTrigger className="w-full bg-[#F9F8F8] md:bg-white mt-1">
                <SelectValue placeholder="Choose a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Countries</SelectLabel>
                  {countries.map((country) => (
                    <SelectItem key={country.code} value={country.name}>
                      <span>({country.code})</span> {country.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
          </div>

          {/* Description */}
          <div>
            <Label className="block text-sm font-medium text-gray-800" htmlFor="description">
              Please describe your motivation to obtain residency in the US:
            </Label>
            <Textarea
              id="description"
              {...register("description")}
              rows={4}
              className={`mt-1 block w-full h-10 px-3 py-1 border ${errors.description ? 'border-red-500' : 'border-[#F9F8F8]'} rounded-md shadow-sm bg-white`}
              placeholder="Enter your message"
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`text-[#C5922C] bg-white px-6 py-3 border border-[#C5922C] rounded-md ${loading ? 'opacity-50' : ''}`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
