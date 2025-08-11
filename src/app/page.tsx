import Image from "next/image";

export default function RJsPhotoBoothOnePager() {
  const year = new Date().getFullYear();

  const projections = [
    { m: "Sep 2025", b: 3, r: 4050, vc: 495, fc: 750, e: 2805, cf: -2195, cc: -2195, roi: -0.44 },
    { m: "Oct 2025", b: 4, r: 5400, vc: 660, fc: 750, e: 3990, cf: 3990, cc: 1795, roi: 0.36 },
    { m: "Nov 2025", b: 5, r: 6750, vc: 825, fc: 750, e: 5175, cf: 5175, cc: 6970, roi: 1.39 },
    { m: "Dec 2025", b: 6, r: 8100, vc: 990, fc: 750, e: 6360, cf: 6360, cc: 13330, roi: 2.67 },
    { m: "Jan 2026", b: 7, r: 9450, vc: 1155, fc: 750, e: 7545, cf: 7545, cc: 20875, roi: 4.18 },
    { m: "Feb 2026", b: 8, r: 10800, vc: 1320, fc: 750, e: 8730, cf: 8730, cc: 29605, roi: 5.92 },
    { m: "Mar 2026", b: 8, r: 10800, vc: 1320, fc: 750, e: 8730, cf: 8730, cc: 38335, roi: 7.67 },
    { m: "Apr 2026", b: 8, r: 10800, vc: 1320, fc: 750, e: 8730, cf: 8730, cc: 47065, roi: 9.41 },
    { m: "May 2026", b: 8, r: 10800, vc: 1320, fc: 750, e: 8730, cf: 8730, cc: 55795, roi: 11.16 },
    { m: "Jun 2026", b: 8, r: 10800, vc: 1320, fc: 750, e: 8730, cf: 8730, cc: 64525, roi: 12.91 },
    { m: "Jul 2026", b: 8, r: 10800, vc: 1320, fc: 750, e: 8730, cf: 8730, cc: 73255, roi: 14.65 },
    { m: "Aug 2026", b: 8, r: 10800, vc: 1320, fc: 750, e: 8730, cf: 8730, cc: 81985, roi: 16.4 }
  ];

  const revenue = projections.map(p => p.r);
  const ebitda = projections.map(p => p.e);
  const cumCF = projections.map(p => p.cc);
  const roi = projections.map(p => p.roi);
  const months = projections.map(p => p.m.split(" ")[0]);

  const materials = [
    ["Dye-sub printer (DNP DS620A, used)", "$800", "Event-grade; fast 4×6 prints"],
    ["Mirrorless/DSLR body + lens (used)", "$900", "Full-frame preferred; tether-capable"],
    ["iPad sharing kiosk + stand", "$300", "For gallery/email/text sharing"],
    ["Continuous lighting + stands/modifier", "$250", "Soft, flattering light"],
    ["Backdrops + stand (starter set)", "$350", "Neutral + one premium/texture"],
    ["Props (curated, durable)", "$150", "Tasteful for weddings"],
    ["Media stock (2× DNP kits ≈ 1,600 4×6)", "$260", "Buffer for initial events"],
    ["Van interior materials (wood, trim, hardware)", "$1,000", "Retro/Japandi MVP finish"],
    ["Branding/vinyl signage", "$250", "Logo + side text"],
    ["Insurance down payment + first month", "$350", "General liability and equipment coverage"],
    ["Domain/website + initial ads/photos", "$300", "Launch visuals + ads"],
    ["TOTAL", "$4,960", "Fits $5,000 cash budget"]
  ];

  const gtmTimeline = [
    { label: "Partnerships", icon: "handshake", desc: "30+ venues/planners; on-site demos; venue-specific templates" },
    { label: "Listings & Social", icon: "globe", desc: "The Knot, WeddingWire, Google; Instagram and TikTok; lead magnet" },
    { label: "Shows & Conventions", icon: "calendar", desc: "Bridal Bazaar; San Diego Convention Center calendar" },
    { label: "Sales Operations & Reviews", icon: "document", desc: "Quote → electronic contract → 30% retainer; user-generated content (UGC) and referrals" }
  ];

  const milestoneTimeline = [
    { label: "Days 0–7", icon: "checklist", desc: "Business Tax Certificate; permits; insurance; brand; core equipment" },
    { label: "Days 7–21", icon: "wrench", desc: "MVP interior; tests; content; website/listings; outreach" },
    { label: "Days 21–45", icon: "megaphone", desc: "Soft launch; reviews; iterate; preferred-vendor agreements" },
    { label: "Days 45–90", icon: "target", desc: "Bridal show; corporate outreach; 6–8 bookings per month" }
  ];

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1F1F1F] w-full overflow-x-hidden">
      <header className="px-4 sm:px-6 md:px-12 lg:px-20 pt-12 pb-6 max-w-screen-2xl mx-auto">
        <span className="inline-block text-[10px] tracking-[0.2em] uppercase border border-[#D9D4C6] text-[#5C6F64] rounded px-2 py-1">Business Plan</span>
        <h1 className="mt-4 font-serif text-4xl md:text-6xl">RJ’s Photo Booth</h1>
        <hr className="mt-6 border-[#D9D4C6]" />
      </header>

      <div className="px-4 sm:px-6 md:px-12 lg:px-20 pb-12 max-w-screen-2xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] items-start">
          <div className="space-y-14 min-w-0 break-words">
            <Section title="Executive Summary">
              <p className="text-[16px] leading-8">
                <p>
                  RJ's Photo Booth is a premium, retro-styled mobile photo booth housed in a custom-outfitted Ford
                  e-Transit van. We serve weddings, corporate events, brand activations, and private parties across San
                  Diego and Los Angeles counties, focusing on a design-first experience. Our service features cinematic
                  lighting, curated backdrops and props, instant high-quality prints, and a next-day digital gallery.
                </p>
                <p>
                  We will launch as an owner-operator business to maintain high profit margins and ensure exceptional
                  service quality. Growth will be driven by establishing strategic partnerships with venues and event
                  planners, alongside building a portfolio of corporate accounts. A planned second phase includes the
                  addition of a coffee and matcha service as a high-value upsell, contingent on the validation of
                  initial photo booth demand.
                </p>
                <p>
                  <strong>Why We Will Succeed:</strong> Our model leverages high perceived value through a distinctive
                  aesthetic that stands out in a crowded market. The mobile van format differentiates us from standard
                  tripod booths and justifies a premium price point. Compared to food and beverage ventures, our
                  business has minimal consumable costs, a more straightforward permitting path, and access to the
                  large, year-round events market of Southern California. Our target Average Order Value (AOV) is
                  approximately $1,350, with a contribution margin of roughly $1,185 per event.
                </p>
              </p>
            </Section>

            <Section title="Company Overview">
              <ul className="list-disc pl-5 space-y-2 text-[16px] leading-8">
                <li>
                  <strong>Legal Entity & Structure:</strong> Legal entity structure (EIN) to be determined. We will
                  secure a City of San Diego Business Tax License and a California Seller's Permit if required for the
                  sale of taxable merchandise or prints.
                </li>
                <li>
                  <strong>Mission Statement:</strong> To make photo memories feel like a film set—beautiful, fast, and
                  effortless for every guest.
                </li>
                <li>
                  <strong>Vision Statement:</strong> To become the go-to "retro van booth" for upscale weddings and
                  corporate events in Southern California, with a long-term goal of replicating the model (via a
                  second van or an indoor setup) in adjacent markets.
                </li>
              </ul>
            </Section>

            <Section title="Market, Customers & Moat">
              <ul className="list-disc pl-5 space-y-2 text-[16px] leading-8">
                <li>
                  <strong>Primary Customers:</strong> Wedding couples, professional wedding planners, and event
                  venues.
                </li>
                <li>
                  <strong>Secondary Customers:</strong> Corporate event teams, marketing agencies, festival
                  organizers, and hosts of private parties (e.g., milestone birthdays, anniversaries).
                </li>
                <li>
                  <strong>Customer Persona:</strong> Our focus is on upper-middle-class Gen Z and Millennial consumers
                  who prioritize aesthetics, customization, and shareable experiences.
                </li>
                <li>
                  <strong>Local Market Dynamics:</strong> San Diego offers strong wedding volume and a consistent
                  calendar of conventions and corporate events. Los Angeles provides sheer market density and
                  significant demand for weekday corporate functions. The unique, design-forward van serves as a key
                  differentiator, allowing for premium positioning.
                </li>
              </ul>
            </Section>

            {/* Services & Customer Experience */}
            <Section title="Services & Customer Experience">
              <ul className="list-disc pl-6 space-y-2 text-[16px] leading-8">
                <li>3 hours of continuous service</li>
                <li>Unlimited photo sessions for guests</li>
                <li>Instant, high-quality 2×6 or 4×6 prints</li>
                <li>Custom-designed print template to match event branding</li>
                <li>Online gallery delivered within 24 hours</li>
                <li>Professional on-site attendant</li>
                <li>Standard backdrop selection</li>
                <li>Delivery included within a 25-mile radius of our business address</li>
              </ul>

              <h3 className="font-semibold mt-6 mb-2">Available Upsells</h3>
              <ul className="list-disc pl-6 space-y-1 text-[15px] leading-7">
                <li>Additional hours of service</li>
                <li>Premium backdrops (e.g., shimmer wall, custom neon, boho macramé)</li>
                <li>“Glam” filter (a high-contrast, black &amp; white beauty filter)</li>
                <li>Guestbook station with album, pens, and adhesive</li>
                <li>Custom event branding (digital overlays, branded welcome screens)</li>
                <li>Extended travel beyond the base service radius</li>
                <li>Custom florals and styling for the van setup</li>
                <li>Weekday corporate retainer packages</li>
              </ul>

              <h3 className="font-semibold mt-6 mb-2">Operational Details</h3>
              <ul className="list-disc pl-6 space-y-2 text-[16px] leading-8">
                <li><strong>Throughput:</strong> Capable of serving 35–55 groups per hour with efficient queue management.</li>
                <li><strong>Power Requirements:</strong> Standard 15A outlet is preferred; a silent battery backup system is available for off-grid events.</li>
                <li><strong>Footprint:</strong> Requires one standard parking space for the van. Service is delivered from the open side. An alternate indoor setup is available.</li>
              </ul>
            </Section>

            <Section title="Differentiation & Competitive Advantage">
              <ul className="list-disc pl-5 space-y-2 text-[16px] leading-8">
                <li>
                  <strong>Design-First Aesthetic:</strong> The van's retro/Japandi wood interior, combined with
                  flattering continuous lighting and tastefully curated props, creates a wedding-friendly and highly
                  shareable social media moment.
                </li>
                <li>
                  <strong>Operational Polish:</strong> We guarantee fast setup and teardown times, carry redundant
                  equipment (printers, cameras) to prevent downtime, and adhere to strict Service Level Agreements
                  (SLAs). Our logistics are designed to be venue-friendly.
                </li>
                <li>
                  <strong>Partnership Engine:</strong> Our growth strategy is centered on achieving preferred-vendor
                  status with key venues and planners, and fostering strong relationships with corporate clients
                  through hotel event teams and marketing agencies.
                </li>
              </ul>
            </Section>

            <Section title="Offering & Pricing">
              <p className="text-[16px] leading-8">
                <strong>Base (3 hours):</strong> unlimited sessions, 2×6/4×6 prints, custom template, attendant, standard backdrop, 24-hour gallery, 25-mile delivery. <strong>Upsells:</strong> extra hour, premium backdrops (shimmer/neon/boho), black-and-white “glam” filter, guestbook station, custom branding, extended travel, optional florals/styling, weekday corporate retainers.
              </p>
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm border border-[#D9D4C6]">
                  <thead className="bg-[#FAF7F0]">
                    <tr>
                      <TH>Service</TH>
                      <TH>Price</TH>
                      <TH>What’s Included</TH>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Base Package (3 hours)", "$1,200", "Unlimited sessions, custom 2×6/4×6 prints, attendant, standard backdrop, online gallery"],
                      ["Extra Hour (per hour)", "$200", "Extend booth runtime"],
                      ["Premium Backdrop", "$200", "Shimmer wall / neon / boho macramé"],
                      ["Glam/Beauty Filter", "$200", "Black-and-white ‘glam’ look"],
                      ["Guestbook Station", "$125", "Album, pens, tape, table"],
                      ["Custom Event Branding", "$150–$350", "Overlay templates, brand marks"],
                      ["Travel (beyond 25 miles)", "$2–$3/mile", "Tiered by zone; quote provided"]
                    ].map((row, i) => (
                      <tr key={i} className="border-t border-[#D9D4C6]">
                        <td className="p-2">{row[0]}</td>
                        <td className="p-2">{row[1]}</td>
                        <td className="p-2">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[13px] leading-6 mt-2 text-[#5C6F64]">
                <strong>Note:</strong> This initial pricing structure is designed for market entry. We plan to set a
                higher anchor price (e.g., $1,300–$1,400 base) once a portfolio of positive reviews and strategic
                partnerships is established. Corporate events will be priced at a premium.
              </p>
            </Section>

            <Section title="Go-to-Market (First 90 Days)">
              <div className="md:hidden">
                <GoToMarketTimelineMobile items={gtmTimeline} />
              </div>
              <div className="hidden md:block">
                <GoToMarketTimeline items={gtmTimeline} />
              </div>
            </Section>

            <Section title="Operations">
              <ul className="list-disc pl-5 space-y-2 text-[16px] leading-8">
                <li>Team: owner-operator plus a trained attendant; on-call backup during peak season.</li>
                <li>Setup/Teardown: 45–60 minutes / 30–45 minutes; checklists; pre-event venue coordination.</li>
                <li>Power & Footprint: standard 15-amp outlet; silent battery backup; one parking space; rain plan and indoor alternative.</li>
                <li>Transport & Parking: Ford e-Transit logistics planning, load-in maps, reserved parking with the venue.</li>
                <li>Data & Privacy: consent signage; gallery opt-outs; gallery expiry; marketing use by consent only.</li>
                <li>Reliability: dual printers and cameras; spare media/cables/power; pre-event burn-ins.</li>
              </ul>
            </Section>

            <Section title="Financial Highlights">
              <ul className="list-disc pl-5 space-y-2 text-[16px] leading-8">
                <li><strong>Average Order Value (AOV):</strong> $1,350; <strong>variable cost per event:</strong> $165; <strong>fixed costs per month:</strong> $750; <strong>initial investment:</strong> $5,000 (van owned).</li>
                <li>Bookings ramp (Year 1): 3, 4, 5, 6, 7, then <strong>8 per month</strong> for months 6–12 (81 events).</li>
                <li>Year-1 revenue <strong>$109,350</strong>; <strong>Earnings Before Interest, Taxes, Depreciation, and Amortization (EBITDA):</strong> $86,985; steady-state EBITDA at eight bookings per month ≈ <strong>$8,730 per month</strong>.</li>
                <li>Break-even at approximately 2–3 bookings per month.</li>
              </ul>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                {["Average Order Value (AOV)", "Contribution per Event", "Bookings Target", "Year-1 EBITDA"].map((k, i) => (
                  <div key={k} className="border border-[#D9D4C6] rounded-sm p-3 text-center">
                    <div className="text-xs text-[#5C6F64] uppercase tracking-wide">{k}</div>
                    <div className="text-base mt-1">{["$1,350", "~$1,185", "6–8 per month", "$86,985"][i]}</div>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-5">
                <MiniChart title="Revenue vs EBITDA" x={months} series={[{ name: "Revenue", data: revenue }, { name: "EBITDA", data: ebitda }]} />
                <MiniChart title="Cumulative Cash Flow" x={months} series={[{ name: "Cumulative Cash Flow", data: cumCF }]} />
                <MiniChart title="Return on Investment (ROI) Over Time" x={months} series={[{ name: "ROI (x)", data: roi }]} valueFormat={v => `${v.toFixed(2)}x`} />
              </div>
            </Section>

            <Section title="12-Month Financial Projections (USD)">
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm border border-[#D9D4C6]">
                  <thead className="bg-[#FAF7F0]">
                    <tr>
                      {["Month", "Bookings", "Revenue", "Variable Costs", "Fixed Costs", "EBITDA", "Monthly Cash Flow", "Cumulative Cash Flow", "ROI (x)"].map(h => (
                        <th key={h} className="text-left p-2 border-b border-[#D9D4C6]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {projections.map(p => (
                      <tr key={p.m} className="border-t border-[#D9D4C6]">
                        <td className="p-2">{p.m}</td>
                        <td className="p-2">{p.b}</td>
                        <td className="p-2">${p.r.toLocaleString()}</td>
                        <td className="p-2">${p.vc.toLocaleString()}</td>
                        <td className="p-2">${p.fc.toLocaleString()}</td>
                        <td className="p-2">${p.e.toLocaleString()}</td>
                        <td className="p-2">{(p.cf >= 0 ? "$" : "-$") + Math.abs(p.cf).toLocaleString()}</td>
                        <td className="p-2">{(p.cc >= 0 ? "$" : "-$") + Math.abs(p.cc).toLocaleString()}</td>
                        <td className="p-2">{p.roi.toFixed(2)}x</td>
                      </tr>
                    ))}
                    <tr className="border-t border-[#D9D4C6] font-medium">
                      <td className="p-2">TOTAL</td>
                      <td className="p-2">81</td>
                      <td className="p-2">$109,350</td>
                      <td className="p-2">$13,365</td>
                      <td className="p-2">$9,000</td>
                      <td className="p-2">$86,985</td>
                      <td className="p-2" colSpan={3}></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>

            <Section title="Sensitivity Analysis (Steady-State)">
              <ul className="list-disc pl-5 space-y-2 text-[16px] leading-8">
                <li>Four bookings per month → EBITDA ≈ <strong>$3,990 per month</strong> (~$47,880 per year)</li>
                <li>Six bookings per month → EBITDA ≈ <strong>$6,360 per month</strong> (~$76,320 per year)</li>
                <li>Eight bookings per month → EBITDA ≈ <strong>$8,730 per month</strong> (~$104,760 per year)</li>
              </ul>
            </Section>

            <Section title="Startup Budget & Initial Investment">
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm border border-[#D9D4C6]">
                  <thead className="bg-[#FAF7F0]">
                    <tr>
                      <TH>Item</TH>
                      <TH>Estimated Cost (USD)</TH>
                      <TH>Notes</TH>
                    </tr>
                  </thead>
                  <tbody>
                    {materials.map((row, i) => (
                      <tr key={i} className="border-t border-[#D9D4C6]">
                        <td className="p-2">{row[0]}</td>
                        <td className="p-2">{row[1]}</td>
                        <td className="p-2">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            <Section title="Compliance & Insurance">
              <ul className="list-disc pl-5 space-y-2 text-[16px] leading-8">
                <li>City of San Diego Business Tax Certificate.</li>
                <li>California Seller’s Permit (if selling taxable merchandise or prints beyond the service component).</li>
                <li>Insurance: $1–$2M general liability; inland marine (equipment); commercial auto; workers’ compensation with staff.</li>
                <li>Public events under organizer permits; private venues require a Certificate of Insurance and house-rule compliance.</li>
                <li>Phase-two coffee/matcha requires County Mobile Food Facility plan check and commissary (deferred).</li>
              </ul>
            </Section>

            <Section title="Policies & Terms of Service">
              <ul className="list-disc pl-5 space-y-2 text-[16px] leading-8">
                <li><strong>Deposits & Payment:</strong> 30% non-refundable retainer; balance due seven days prior (corporate Net-15 with approved purchase order).</li>
                <li><strong>Rescheduling & Cancellation:</strong> One free reschedule with at least 30 days’ notice if the date is available; inside 30 days, tiered fees apply; retainer is non-refundable.</li>
                <li><strong>Overtime & Damages:</strong> Overtime billed in 30-minute blocks; client liable for guest-caused damages (repair cost plus downtime).</li>
                <li><strong>Service Level Agreement (SLA):</strong> If equipment failure not caused by the venue or client exceeds 15 minutes, time is pro-rated or a partial refund issued.</li>
              </ul>
            </Section>

            <Section title="Risk Assessment & Mitigation">
              <ul className="list-disc pl-5 space-y-2 text-[16px] leading-8">
                <li><strong>Seasonality/Weather:</strong> diversify into corporate and indoor events; rain plan; schedule Los Angeles/Orange County during San Diego shoulder seasons.</li>
                <li><strong>Price Competition:</strong> win on design and operations; premium add-ons; venue exclusives; reviews and user-generated content engine.</li>
                <li><strong>Operational Failures:</strong> redundant gear; pre-event burn-ins; checklists; on-call backup.</li>
              </ul>
            </Section>

            <Section title="Milestones & Timeline">
              <div className="md:hidden">
                <MilestonesTimelineMobile items={milestoneTimeline} />
              </div>
              <div className="hidden md:block">
                <MilestonesTimeline items={milestoneTimeline} />
              </div>
            </Section>

            <Section title="Key Performance Indicators (KPIs)">
              <ul className="list-disc pl-5 space-y-2 text-[16px] leading-8">
                <li><strong>Financial:</strong> Average Order Value (AOV), bookings per month, Customer Acquisition Cost (CAC), Return on Investment (ROI).</li>
                <li><strong>Sales & Marketing:</strong> source mix (partnerships vs. ads), inquiry-to-deposit conversion rate, referral rate.</li>
                <li><strong>Operational:</strong> on-time setup percentage, print failure rate, Net Promoter Score (NPS)/average review score.</li>
              </ul>
            </Section>
          </div>

          <aside className="lg:pl-10 border-t lg:border-t-0 lg:border-l border-[#D9D4C6] min-w-0">
            <div className="space-y-8">
              <Sidebar title="Contact">
                <div className="text-sm leading-7">
                  13143 Kellam Ct Unit 47<br />San Diego, CA 92130 (PO Box pending)<br />
                  info@rjsphotobooth.com<br />(818) 486-3845<br />
                  Service Area: San Diego & Los Angeles
                </div>
              </Sidebar>
              <Sidebar title="Quick Facts">
                <ul className="text-sm leading-7 space-y-1">
                  <li>Throughput: 35–55 groups per hour</li>
                  <li>Power: 15-amp outlet or battery</li>
                  <li>Footprint: one parking space</li>
                  <li>Owner-operator launch</li>
                </ul>
              </Sidebar>
              <Sidebar title="Numbers">
                <ul className="text-sm leading-7 space-y-1">
                  <li>Average Order Value (AOV): $1,350</li>
                  <li>Variable Cost per Event: $165</li>
                  <li>Fixed Costs per Month: $750</li>
                  <li>Initial Capital Expenditure: $5,000</li>
                </ul>
              </Sidebar>
              <Sidebar title="Capabilities">
                <ul className="text-sm leading-7 space-y-1">
                  <li>Instant prints and digital gallery</li>
                  <li>Custom templates and premium backdrops</li>
                  <li>Black-and-white “glam” filter and guestbook</li>
                </ul>
              </Sidebar>
              <Sidebar title="Downloads">
                <div className="flex flex-col gap-2">
                  <a className="text-sm underline" href="/assets/rjs-business-plan.pdf" download>Business Plan (PDF)</a>
                  <a className="text-sm underline" href="/assets/rate-sheet.pdf" download>Rate Sheet (PDF)</a>
                </div>
              </Sidebar>
            </div>
          </aside>
        </div>
      </div >

      <footer className="px-4 sm:px-6 md:px-12 lg:px-20 text-center text-xs text-[#5C6F64] py-10 border-t border-[#D9D4C6]">© {year} RJ’s Photo Booth · All rights reserved.</footer>
    </main >
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="font-serif text-3xl mb-3">{title}</h2>
      {children}
    </section>
  );
}

function Sidebar({ title, children }) {
  return (
    <section>
      <div className="text-[11px] inline-block border border-[#D9D4C6] rounded px-2 py-1 text-[#5C6F64] mb-2 uppercase tracking-wide">{title}</div>
      {children}
    </section>
  );
}

function TH({ children }) {
  return <th className="text-left p-2 border-b border-[#D9D4C6] font-medium">{children}</th>;
}

function Icon({ name, size = 18 }) {
  const s = size;
  const common = { fill: "none", stroke: "#1F1F1F", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "handshake":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden>
          <path {...common} d="M7 12l3 3 2-2m-7-2l3-3 3 3 3-3 3 3 3-3" />
        </svg>
      );
    case "globe":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden>
          <circle {...common} cx="12" cy="12" r="9" />
          <path {...common} d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
        </svg>
      );
    case "calendar":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden>
          <rect {...common} x="3" y="5" width="18" height="16" rx="2" />
          <path {...common} d="M8 3v4M16 3v4M3 10h18" />
        </svg>
      );
    case "document":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden>
          <path {...common} d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
          <path {...common} d="M14 3v5h5" />
        </svg>
      );
    case "checklist":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden>
          <path {...common} d="M9 7h10M9 12h10M9 17h10" />
          <path {...common} d="M5 7l1.5 1.5L8.5 6" />
        </svg>
      );
    case "wrench":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden>
          <path {...common} d="M14 7l3-3 3 3-3 3M2 22l8-8" />
          <circle {...common} cx="9" cy="15" r="2" />
        </svg>
      );
    case "megaphone":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden>
          <path {...common} d="M3 11v2l12 4V7L3 11z" />
          <path {...common} d="M15 9l5-2v10l-5-2" />
          <path {...common} d="M7 13l1 6" />
        </svg>
      );
    case "target":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden>
          <circle {...common} cx="12" cy="12" r="7" />
          <circle {...common} cx="12" cy="12" r="3" />
        </svg>
      );
    default:
      return null;
  }
}

function MiniChart({ title, x, series, valueFormat }) {
  const W = 320, H = 170, P = 28;
  const min = Math.min(...series.flatMap(s => s.data));
  const max = Math.max(...series.flatMap(s => s.data));
  const yMin = min > 0 ? 0 : Math.floor(min * 1.1);
  const yMax = Math.ceil(max * 1.1);
  const scaleX = i => P + (i * (W - 2 * P)) / (x.length - 1);
  const scaleY = v => H - P - ((v - yMin) * (H - 2 * P)) / (yMax - yMin);
  const toPath = arr => arr.map((v, i) => `${i === 0 ? "M" : "L"} ${scaleX(i)},${scaleY(v)}`).join(" ");

  return (
    <figure className="border border-[#D9D4C6] rounded-sm p-3 bg-white">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={title}>
        <title>{title}</title>
        <line x1={P} y1={H - P} x2={W - P} y2={H - P} stroke="#D9D4C6" />
        <line x1={P} y1={P} x2={P} y2={H - P} stroke="#D9D4C6" />
        {[0.25, 0.5, 0.75].map((t, i) => (
          <line key={i} x1={P} y1={P + (H - 2 * P) * t} x2={W - P} y2={P + (H - 2 * P) * t} stroke="#EFECE2" />
        ))}
        {series.map((s, idx) => (
          <path key={idx} d={toPath(s.data)} fill="none" stroke={idx === 0 ? "#1F1F1F" : "#5C6F64"} strokeWidth={2} />
        ))}
      </svg>
      <figcaption className="text-xs text-[#5C6F64] mt-1">{title}</figcaption>
    </figure>
  );
}

function GoToMarketTimeline({ items }) {
  return (
    <div className="overflow-x-auto overflow-y-visible py-6 md:py-8">
      <div className="min-w-[880px]">
        <div className="relative">
          <div className="absolute left-0 right-0 top-10 h-px bg-[#D9D4C6]" />
          <div className="grid grid-cols-4 gap-8">
            {items.map((it, i) => (
              <div key={i} className="text-center px-2">
                <div className="mx-auto w-10 h-10 rounded-full bg-white border border-[#D9D4C6] flex items-center justify-center">
                  <Icon name={it.icon} />
                </div>
                <div className="w-px h-4 bg-[#D9D4C6] mx-auto" />
                <div className="mt-2 text-sm font-medium">{it.label}</div>
                <div className="mt-1 text-xs text-[#5C6F64] leading-5">{it.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function GoToMarketTimelineMobile({ items }) {
  return (
    <div className="relative pl-6 pr-4">
      <div className="absolute left-3 top-0 bottom-0 w-px bg-[#D9D4C6]" />
      <ol className="space-y-6">
        {items.map((it, i) => (
          <li key={i} className="relative">
            <div className="absolute -left-[9px] top-1 w-5 h-5 rounded-full bg-white border border-[#D9D4C6] flex items-center justify-center">
              <Icon name={it.icon} size={14} />
            </div>
            <div className="text-sm font-medium">{it.label}</div>
            <div className="text-xs text-[#5C6F64] mt-1 leading-5">{it.desc}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function MilestonesTimeline({ items }) {
  return (
    <div className="overflow-x-auto overflow-y-visible">
      <div className="min-w-[880px]">
        <div className="relative py-12 md:py-16">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-2 bg-[#EFECE2] rounded" />
          <div className="grid grid-cols-4 gap-12 relative">
            {items.map((it, i) => {
              const above = i % 2 === 0;
              return (
                <div key={i} className="flex flex-col items-center">
                  {above && (
                    <div className="mb-4 text-center">
                      <div className="text-sm font-medium">{it.label}</div>
                      <div className="mt-1 text-xs text-[#5C6F64] max-w-[16rem]">{it.desc}</div>
                    </div>
                  )}
                  <div className="w-px h-6 bg-[#D9D4C6]" />
                  <div className="w-10 h-10 rounded-full bg-white border border-[#D9D4C6] flex items-center justify-center">
                    <Icon name={it.icon} />
                  </div>
                  <div className="w-px h-6 bg-[#D9D4C6]" />
                  {!above && (
                    <div className="mt-4 text-center">
                      <div className="text-sm font-medium">{it.label}</div>
                      <div className="mt-1 text-xs text-[#5C6F64] max-w-[16rem]">{it.desc}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function MilestonesTimelineMobile({ items }) {
  return (
    <div className="relative pl-6 pr-4">
      <div className="absolute left-3 top-0 bottom-0 w-px bg-[#D9D4C6]" />
      <ol className="space-y-8">
        {items.map((it, i) => (
          <li key={i} className="relative">
            <div className="absolute -left-[9px] top-1 w-5 h-5 rounded-full bg-white border border-[#D9D4C6] flex items-center justify-center">
              <Icon name={it.icon} size={14} />
            </div>
            <div className="text-sm font-medium">{it.label}</div>
            <div className="text-xs text-[#5C6F64] mt-1 leading-5">{it.desc}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}
