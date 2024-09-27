"use client";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import countries from "@/data/countries";
import { toast } from "react-hot-toast";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import SubmitButton from "./Button";
import ReCAPTCHA from "react-google-recaptcha";

// Define Zod schema for validation
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number should have at least 10 digits" }),
  country: z.string().min(1, { message: "Please select a country" }),
  description: z.string().optional(),
  recaptcha: z.string().min(1, { message: "Please complete the CAPTCHA" }), // Add recaptcha validation
});

// Infer the TypeScript type from the Zod schema
type FormData = z.infer<typeof formSchema>;

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);

      // Save the form data to Firestore
      await addDoc(collection(db, "leads"), {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        country: data.country,
        description: data.description,
        timestamp: new Date(),
      });

      // Send email via your API with the reCAPTCHA token
      const emailResponse = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, recaptcha: recaptchaToken }),
      });

      if (!emailResponse.ok) {
        throw new Error("Failed to send email");
      }

      reset();
      toast.success("Form submitted and email sent successfully!");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 10000);
    } catch (error) {
      console.error("Error submitting the form or sending email:", error);
      toast.error("Error submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 bg-white/80 opacity-90 backdrop-blur-sm rounded-md py-5">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
            className={`mt-1 block w-full bg-white px-3 py-1 border ${
              errors.fullName ? "border-red-500" : "border-[#F9F8F8]"
            } rounded-md shadow-sm`}
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
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
            className={`mt-1 block w-full bg-white px-3 py-1 border ${
              errors.email ? "border-red-500" : "border-[#F9F8F8]"
            } rounded-md shadow-sm`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="w-full">
          <Label
            className="block text-sm font-medium text-gray-700"
            htmlFor="phone"
          >
            Phone Number
          </Label>
          <PhoneInput
            defaultCountry="in"
            value={phone}
            forceDialCode={true}
            onChange={(phone) => {
              setPhone(phone);
              setValue("phone", phone);
            }}
            inputClassName={`w-full ${errors.phone ? "border-red-500" : ""}`}
          />
          
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
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
          {errors.country && (
            <p className="text-red-500 text-sm">{errors.country.message}</p>
          )}
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
            {...register("description")}
            rows={4}
            className={`mt-1 block w-full h-10 px-3 bg-white py-1 border ${
              errors.description ? "border-red-500" : "border-[#F9F8F8]"
            } rounded-md shadow-sm`}
            placeholder="Enter your message"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* reCAPTCHA */}
        <div className="w-full">
          <ReCAPTCHA
            sitekey="6LeedFAqAAAAAIO_20OeGBsv0X5_IqivMjfY-xd5" 
            onChange={(token) => {
              if (token) {
                setRecaptchaToken(token); 
                setValue("recaptcha", token); 
              }
            }}
          />
          {errors.recaptcha && (
            <p className="text-red-500 text-sm">{errors.recaptcha.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex gap-4 ">
          <SubmitButton>{loading ? "Submitting..." : "Submit Details"}</SubmitButton>
          {submitted && (
            <div className="p-2 text-green-700 bg-green-100 rounded-md text-sm">
              Form submitted successfully!
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
