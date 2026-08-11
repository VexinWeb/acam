import React from "react";
import ContactForm from "../components/ContactForm";
import Link from "next/link";

export const metadata = {
	title: "Contact | Acam",
};

const ContactPage = () => {
	return (
		// <div className="mb-24 mx-auto w-full lg:w-3/5 xl:w-2/5">
		<div className="my-24 flex justify-center">
			<div className="max-w-md mx-7 md:mx-auto">
				<Link
					target="_blank"
					href="/pdf/2026-2027-adhesion-inscription.pdf"
					className="opacity-75 z-10 bg-yellow-300 py-8 px-6 drop-shadow-2xl items-center"
					download
				>
					Bulletin d&apos;adhésion et d&apos;inscription
				</Link>
				<ContactForm />
			</div>
		</div>
	);
};

export default ContactPage;
