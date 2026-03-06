import { useState } from "react";
import type { Enquiry } from "../backend";
import { useGetAllEnquiries, useGetSubmissionCount } from "../hooks/useQueries";

/* ── PIN Gate ── */
const ADMIN_PIN = "ennoble2025";

function PinGate({ onUnlock }: { onUnlock: () => void }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      onUnlock();
    } else {
      setError("Incorrect PIN");
      setPin("");
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm">
        {/* Brand mark */}
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-ennoble-subtext mb-1">
            site web ennoble
          </p>
          <h1 className="text-xl font-semibold text-ennoble-text">
            Admin Access
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-ennoble-border rounded-xl p-8 shadow-card space-y-4"
        >
          <div>
            <label
              htmlFor="pin"
              className="block text-xs font-medium text-ennoble-subtext mb-2 tracking-wide uppercase"
            >
              PIN
            </label>
            <input
              id="pin"
              type="password"
              autoComplete="current-password"
              data-ocid="admin.pin_input"
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
                setError(null);
              }}
              placeholder="Enter admin PIN"
              className="w-full px-4 py-3 text-sm border border-ennoble-border rounded-md bg-background text-ennoble-text placeholder:text-ennoble-subtext/40 focus:outline-none focus:border-ennoble-text/40 focus:ring-2 focus:ring-ennoble-text/10 transition-[border-color,box-shadow] duration-150"
            />
          </div>

          {error && (
            <p
              data-ocid="admin.error_state"
              className="text-sm text-red-600"
              role="alert"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            data-ocid="admin.submit_button"
            className="btn-primary w-full py-3 bg-ennoble-text text-white font-medium text-sm tracking-wide rounded-md hover:bg-ennoble-text/85"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}

/* ── Loading Skeleton ── */
function EnquirySkeleton() {
  return (
    <div
      data-ocid="admin.loading_state"
      className="space-y-3"
      aria-busy="true"
      aria-label="Loading enquiries"
    >
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-white border border-ennoble-border rounded-xl p-6 animate-pulse"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="h-4 w-32 bg-ennoble-border rounded" />
            <div className="h-4 w-6 bg-ennoble-border rounded" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-48 bg-ennoble-border rounded" />
            <div className="h-3 w-24 bg-ennoble-border rounded" />
            <div className="h-3 w-full bg-ennoble-border rounded" />
            <div className="h-3 w-3/4 bg-ennoble-border rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Enquiry Card ── */
function EnquiryCard({
  enquiry,
  index,
  ocid,
}: {
  enquiry: Enquiry;
  index: number;
  ocid: string;
}) {
  return (
    <div
      data-ocid={ocid}
      className="bg-white border border-ennoble-border rounded-xl p-6 shadow-card"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="font-semibold text-ennoble-text text-sm">
            {enquiry.fullName}
          </p>
          <p className="text-xs text-ennoble-subtext mt-0.5">{enquiry.email}</p>
        </div>
        <span className="text-xs font-mono text-ennoble-subtext/50 select-none">
          #{index}
        </span>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-ennoble-subtext/60 uppercase tracking-wide w-24 flex-shrink-0">
            City
          </span>
          <span className="text-ennoble-subtext">{enquiry.city}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-ennoble-subtext/60 uppercase tracking-wide w-24 flex-shrink-0">
            Website
          </span>
          <span className="text-ennoble-subtext">
            {enquiry.currentWebsite && enquiry.currentWebsite.trim() !== ""
              ? enquiry.currentWebsite
              : "None"}
          </span>
        </div>
        <div className="flex items-start gap-2 pt-2 border-t border-ennoble-border mt-3">
          <span className="text-xs font-medium text-ennoble-subtext/60 uppercase tracking-wide w-24 flex-shrink-0 pt-0.5">
            Enquiry
          </span>
          <p className="text-ennoble-subtext leading-relaxed">
            {enquiry.improvement}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Dashboard ── */
function Dashboard({ onLogout }: { onLogout: () => void }) {
  const enquiriesQuery = useGetAllEnquiries(true);
  const countQuery = useGetSubmissionCount(true);

  const isLoading = enquiriesQuery.isLoading || enquiriesQuery.isFetching;
  const fetchError = enquiriesQuery.isError
    ? "Failed to load enquiries. Please refresh the page."
    : null;

  const enquiries = enquiriesQuery.data ?? [];
  const count = countQuery.data ? Number(countQuery.data) : enquiries.length;

  // Reverse order: newest first (highest index first)
  const sortedEnquiries = [...enquiries].reverse();

  return (
    <div className="min-h-[calc(100vh-200px)] bg-background pb-16">
      {/* Dashboard header bar */}
      <div className="bg-white border-b border-ennoble-border mb-8">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-base font-semibold text-ennoble-text">
              Enquiry Dashboard
            </h2>
            {!isLoading && !fetchError && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-ennoble-grey border border-ennoble-border text-ennoble-subtext">
                {count} {count === 1 ? "enquiry" : "enquiries"}
              </span>
            )}
          </div>
          <button
            type="button"
            data-ocid="admin.logout_button"
            onClick={onLogout}
            className="text-xs text-ennoble-subtext hover:text-ennoble-text transition-colors duration-150 px-3 py-1.5 border border-ennoble-border rounded-md hover:border-ennoble-text/30"
          >
            Log out
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6">
        {isLoading ? (
          <EnquirySkeleton />
        ) : fetchError ? (
          <div
            data-ocid="admin.error_state"
            className="text-center py-16 text-sm text-red-600"
            role="alert"
          >
            {fetchError}
          </div>
        ) : sortedEnquiries.length === 0 ? (
          <div
            data-ocid="admin.empty_state"
            className="text-center py-20 border border-dashed border-ennoble-border rounded-xl"
          >
            <p className="text-sm font-medium text-ennoble-subtext">
              No enquiries yet
            </p>
            <p className="text-xs text-ennoble-subtext/60 mt-1">
              Submitted enquiries will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {sortedEnquiries.map((enq, idx) => {
              const displayIndex = sortedEnquiries.length - idx;
              const ocidIndex = idx + 1;
              return (
                <EnquiryCard
                  key={`${enq.email}-${idx}`}
                  enquiry={enq}
                  index={displayIndex}
                  ocid={`admin.item.${ocidIndex}`}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Admin Page ── */
export default function Admin() {
  const [unlocked, setUnlocked] = useState(false);

  return unlocked ? (
    <Dashboard onLogout={() => setUnlocked(false)} />
  ) : (
    <PinGate onUnlock={() => setUnlocked(true)} />
  );
}
