import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title Contact',
    description: 'SEO Description Contact',
    keywords: ['Contact Page', 'Armando', 'Información', '...'],
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}