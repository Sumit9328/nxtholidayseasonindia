import { packages } from "@/app/data/packages";

export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

type PackageDetailsPageProps = {
  params: { slug: string } | Promise<{ slug: string }>;
};

export default async function PackageDetails({ params }: PackageDetailsPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams?.slug;
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    return (
      <div className="p-10">
        <h2 className="text-2xl font-semibold text-red-600">Package Not Found ❌</h2>
        <p className="mt-2 text-gray-700">Slug received: {slug || "Empty (Not coming)"}</p>
        <p className="mt-4 font-medium">Available packages:</p>
        <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-gray-600">
        {packages.map((p) => (
            <li key={p.slug}>{p.slug}</li>
        ))}
        </ul>
      </div>
    );
  }

  const detail = pkg.detail;
  const showMetaSections = Boolean(
    (detail.cancellationPolicy && detail.cancellationPolicy.length > 0) ||
      (detail.documentsRequired && detail.documentsRequired.length > 0) ||
      (detail.notes && detail.notes.length > 0)
  );

  return (
    <article className="px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <header className="space-y-4">
          {detail.badge && (
            <span className="inline-flex rounded-full bg-[#db1145]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#db1145]">
              {detail.badge}
            </span>
          )}
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">{pkg.title}</h1>
          <p className="text-base text-gray-600 md:text-lg">{pkg.desc}</p>
          {detail.about && <p className="text-gray-700 md:text-base">{detail.about}</p>}

          {(detail.meals || detail.maxGroupSize) && (
            <dl className="mt-6 grid gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-2">
              {detail.meals && (
                <div>
                  <dt className="text-sm font-semibold text-gray-500">Meals</dt>
                  <dd className="mt-1 text-base text-gray-800">{detail.meals}</dd>
                </div>
              )}
              {detail.maxGroupSize && (
                <div>
                  <dt className="text-sm font-semibold text-gray-500">Max. Group Size</dt>
                  <dd className="mt-1 text-base text-gray-800">{detail.maxGroupSize}</dd>
                </div>
              )}
            </dl>
          )}
        </header>

        {detail.highlights && detail.highlights.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Highlights</h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {detail.highlights.map((item) => (
                <li
                  key={`${pkg.slug}-highlight-${item}`}
                  className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm"
                >
                  <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-[#db1145]"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {detail.accommodations && detail.accommodations.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Accommodation Plan</h2>
            <div className="space-y-4">
              {detail.accommodations.map((stay, index) => (
                <div
                  key={`${pkg.slug}-stay-${index}`}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-wrap justify-between gap-2">
                    <h3 className="text-lg font-semibold text-gray-900">{stay.name}</h3>
                    <span className="text-sm font-medium text-[#db1145]">{stay.nights}</span>
                  </div>
                  <dl className="mt-3 grid gap-2 text-sm text-gray-700 md:grid-cols-3">
                    <div>
                      <dt className="font-medium text-gray-500">Location</dt>
                      <dd>{stay.location}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500">Room Type</dt>
                      <dd>{stay.roomType}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500">Meals Included</dt>
                      <dd>{stay.mealsIncluded}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </section>
        )}

        {(detail.inclusions || detail.excursions) && (
          <section className="space-y-6">
            {detail.inclusions && detail.inclusions.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Included in the Price</h2>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {detail.inclusions.map((item, index) => (
                    <li key={`${pkg.slug}-inclusion-${index}`} className="flex gap-3">
                      <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {detail.excursions && detail.excursions.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Excursions</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  {detail.excursions.map((item, index) => (
                    <li key={`${pkg.slug}-excursion-${index}`} className="flex gap-3">
                      <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-sky-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {detail.dayWisePlan && detail.dayWisePlan.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Day-wise Itinerary</h2>
            <ol className="space-y-4">
              {detail.dayWisePlan.map((day, index) => (
                <li
                  key={`${pkg.slug}-day-${index}`}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#db1145] text-base font-semibold text-white">
                      {index + 1}
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-900">{day.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-700">{day.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {detail.exclusions && detail.exclusions.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Exclusions</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {detail.exclusions.map((item, index) => (
                <li key={`${pkg.slug}-exclusion-${index}`} className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-gray-400"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {showMetaSections && (
          <section className="grid gap-6 md:grid-cols-3">
            {detail.cancellationPolicy && detail.cancellationPolicy.length > 0 && (
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Cancellation Policy</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  {detail.cancellationPolicy.map((rule, index) => (
                    <li key={`${pkg.slug}-cancel-${index}`}>{rule}</li>
                  ))}
                </ul>
              </div>
            )}
            {detail.documentsRequired && detail.documentsRequired.length > 0 && (
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Documents Required</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  {detail.documentsRequired.map((doc, index) => (
                    <li key={`${pkg.slug}-doc-${index}`}>{doc}</li>
                  ))}
                </ul>
              </div>
            )}
            {detail.notes && detail.notes.length > 0 && (
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Notes</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  {detail.notes.map((note, index) => (
                    <li key={`${pkg.slug}-note-${index}`}>{note}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}
    </div>
    </article>
  );
}
