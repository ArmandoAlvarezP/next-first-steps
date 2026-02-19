import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title Pricing',
    description: 'SEO Description Pricing',
    keywords: ['Pricing Page', 'Armando', 'Información', '...'],
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}