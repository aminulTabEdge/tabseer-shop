import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 shadow-md p-10 rounded-xl">
            {/* form area */}
            <form className="w-full space-y-6">
                <div className="text-gray-800">
                    <h1 className="text-3xl font-semibold">Get in <span className="text-green-400">touch</span></h1>
                    <p className="text-sm mt-2 mb-8">Let’s align our constellations! Reach out and let the magic of collaboration illuminate our skies.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Input type="text" placeholder="Your name" className="w-full" />
                    <Input type="email" placeholder="Email address" className="w-full" />
                </div>
                <Textarea placeholder="Write message" className="min-h-[200px]" />
                <Button type="submit" className="w-full">Submit</Button>
            </form>
            {/*  image  */}
            <div className="h-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.02583821205!2d91.81983571134349!3d24.900058347354335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1723916219404!5m2!1sen!2sbd"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full rounded-md"
                ></iframe>
            </div>
        </section>
    );
};

const ContactPage = () => {
    return (
        <div className="container mx-auto py-10">
            <ContactForm />
        </div>
    );
};

export default ContactPage;
