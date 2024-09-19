import React from 'react';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';


// Import shadcn components

// Define Zod schema for form validation
const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: "Full Name must be at least 2 characters" }),
  contactNumber: z
    .string()
    .min(10, { message: "Contact number must be at least 10 digits" })
    .regex(/^\d+$/, { message: "Contact number must be numeric" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  country: z.string().min(2, { message: "Country is required" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  // Use React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  // Handle form submission
  const onSubmit = (data: ContactFormData) => {
    console.log("Form Data:", data);
    // Handle form submission (e.g., API call)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Full Name Field */}
      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          {...register('fullName')}
          className="mt-1 block w-full"
          placeholder="Enter your full name"
        />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
      </div>

      {/* Contact Number Field */}
      <div>
        <Label htmlFor="contactNumber">Contact Number</Label>
        <Input
          id="contactNumber"
          {...register('contactNumber')}
          className="mt-1 block w-full"
          placeholder="Enter your contact number"
        />
        {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber.message}</p>}
      </div>

      {/* Email Field */}
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          {...register('email')}
          className="mt-1 block w-full"
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Country Field */}
      <div>
        <Label htmlFor="country">Country</Label>
        <Input
          id="country"
          {...register('country')}
          className="mt-1 block w-full"
          placeholder="Enter your country"
        />
        {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
      </div>

      {/* Description Field */}
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          {...register('description')}
          className="mt-1 block w-full"
          placeholder="Enter a description"
        />
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full bg-blue-500 text-white py-2 mt-4">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
