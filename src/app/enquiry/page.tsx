import EnquiryForm from "@/app/components/EnquiryForm";
import { packages } from "@/app/data/packages";

type EnquiryPageProps = {
  searchParams?: {
    package?: string | string[];
  };
};

export default function EnquiryPage({ searchParams }: EnquiryPageProps) {
  const packageParam = searchParams?.package;
  const packageSlug = Array.isArray(packageParam) ? packageParam[0] : packageParam;

  let initialPackageName: string | undefined;

  if (typeof packageSlug === "string" && packageSlug.trim().length > 0) {
    const matched = packages.find((pkg) => pkg.slug === packageSlug);
    initialPackageName = matched?.title ?? packageSlug.replace(/-/g, " ");
  }

  return (
    <main className="bg-[#f7f7f7] py-16">
      <div className="mx-auto max-w-4xl px-4">
        <header className="space-y-4 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Plan Your Dream Holiday</h1>
          <p className="text-gray-600 md:text-lg">
            Tell us about your travel goals and our experts will craft a personalised itinerary, complete with handpicked
            stays, experiences, and transparent pricing.
          </p>
        </header>

        <div className="mt-10">
          <EnquiryForm initialPackageName={initialPackageName} />
        </div>
      </div>
    </main>
  );
}

