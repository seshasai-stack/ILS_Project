import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart,
  ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import {
  Activity, ChevronDown, ChevronLeft, ChevronRight, IndianRupee,
  LockKeyhole, RefreshCw, Search, TrendingUp, Users,
} from "lucide-react";

const API_BASE_URL = "https://ils-backend-1.onrender.com";
const ACCESS_STORAGE_KEY = "ils-analytics-access-key";
const GOLD_COLORS = ["#d6b66c", "#a98b4c", "#796436", "#e3cc91", "#5d5138", "#b8a478"];

type Breakdown = { name: string; value: number };
type AnalyticsRow = {
  id: string;
  orderId: string;
  createdAt: string | null;
  verifiedAt: string | null;
  applicant: Record<string, string>;
  payment: Record<string, string | number>;
};
type AnalyticsResponse = {
  success: boolean;
  generatedAt: string;
  timezone: string;
  metrics: {
    totalApplications: number; totalRegistrations: number; totalPaid: number; totalRevenue: number;
    totalRefunded: number; averageRevenuePerRegistration: number;
    todayRegistrations: number; yesterdayRegistrations: number;
    currentMonthRegistrations: number; lastMonthRegistrations: number;
    conversionRate: number;
  };
  trends: Array<{ date: string; registrations: number; revenue: number }>;
  breakdowns: {
    paymentStatus: Breakdown[]; registrationType: Breakdown[];
    industry: Breakdown[]; country: Breakdown[]; city?: Breakdown[];
  };
  table: {
    rows: AnalyticsRow[];
    pagination: { page: number; pageSize: number; totalRecords: number; totalPages: number };
  };
};

export const Route = createFileRoute("/analytics")({
  head: () => ({ meta: [{ title: "Analytics — ILS 2026" }] }),
  component: AnalyticsPage,
});

const money = (value: number) => new Intl.NumberFormat("en-IN", {
  style: "currency", currency: "INR", maximumFractionDigits: 0,
}).format(value);
const compactMoney = (value: number) => new Intl.NumberFormat("en-IN", {
  notation: "compact", style: "currency", currency: "INR", maximumFractionDigits: 1,
}).format(value);
const displayDate = (value: string | null) => value
  ? new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" }).format(new Date(value))
  : "-";

function AnalyticsPage() {
  const [accessKey, setAccessKey] = useState("");
  const [draftKey, setDraftKey] = useState("");
  const [data, setData] = useState<AnalyticsResponse | null>(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = window.sessionStorage.getItem(ACCESS_STORAGE_KEY) ?? "";
    setAccessKey(saved);
    setDraftKey(saved);
  }, []);

  const load = useCallback(async () => {
    if (!accessKey) return;
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams({ page: String(page), pageSize: "15", search, status });
      const response = await fetch(`${API_BASE_URL}/api/analytics/overview?${params}`, {
        headers: { "X-Analytics-Key": accessKey },
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.success) throw new Error(result?.message || "Unable to load analytics");
      setData(result);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unable to load analytics");
      if (reason instanceof Error && reason.message.toLowerCase().includes("access key")) {
        window.sessionStorage.removeItem(ACCESS_STORAGE_KEY);
        setAccessKey("");
      }
    } finally {
      setLoading(false);
    }
  }, [accessKey, page, search, status]);

  useEffect(() => { void load(); }, [load]);

  if (!accessKey) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-5 py-24">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const key = draftKey.trim();
            if (!key) return;
            window.sessionStorage.setItem(ACCESS_STORAGE_KEY, key);
            setAccessKey(key);
          }}
          className="glass w-full max-w-md rounded-sm border border-gold/25 p-8 shadow-2xl"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-gold"><LockKeyhole size={20} /></div>
          <p className="eyebrow mt-7">Private dashboard</p>
          <h1 className="mt-3 font-serif text-3xl">Analytics access</h1>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">Enter the analytics access key configured on the backend.</p>
          <input type="password" value={draftKey} onChange={(event) => setDraftKey(event.target.value)} placeholder="Access key" autoFocus className="mt-7 min-h-12 w-full rounded-sm border border-border bg-transparent px-4 text-foreground outline-none focus:border-gold" />
          {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
          <button className="btn-gold mt-5 w-full" type="submit">Open dashboard</button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 pb-20 pt-28 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <header className="flex flex-col gap-5 border-b border-border/70 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">ILS 2026 · Live intelligence</p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl">Registration analytics</h1>
            <p className="mt-3 text-sm text-muted-foreground">Successful payments, applicant insights and revenue from Firestore.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">{data ? `Updated ${displayDate(data.generatedAt)}` : "Loading data"}</span>
            <button onClick={() => void load()} disabled={loading} className="flex h-11 w-11 items-center justify-center rounded-sm border border-border text-gold transition hover:border-gold disabled:opacity-50" aria-label="Refresh analytics"><RefreshCw size={17} className={loading ? "animate-spin" : ""} /></button>
          </div>
        </header>

        {error && <div className="mt-6 rounded-sm border border-destructive/40 bg-destructive/10 px-5 py-4 text-sm text-destructive">{error}</div>}
        {!data ? <DashboardSkeleton /> : <Dashboard data={data} page={page} setPage={setPage} search={search} setSearch={setSearch} status={status} setStatus={setStatus} />}
      </div>
    </main>
  );
}

function Dashboard({ data, page, setPage, search, setSearch, status, setStatus }: {
  data: AnalyticsResponse; page: number; setPage: (value: number) => void;
  search: string; setSearch: (value: string) => void; status: string; setStatus: (value: string) => void;
}) {
  const metrics = data.metrics;
  const cards = [
    { label: "Total paid", value: money(metrics.totalPaid), note: `${money(metrics.totalRevenue)} net after refunds`, icon: IndianRupee },
    { label: "Paid registrations", value: metrics.totalRegistrations.toLocaleString("en-IN"), note: `${metrics.conversionRate.toFixed(1)}% conversion`, icon: Users },
    { label: "Registered today", value: metrics.todayRegistrations.toLocaleString("en-IN"), note: `${metrics.yesterdayRegistrations} yesterday`, icon: Activity },
    { label: "This month", value: metrics.currentMonthRegistrations.toLocaleString("en-IN"), note: `${metrics.lastMonthRegistrations} last month`, icon: TrendingUp },
  ];

  return <>
    <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map(({ label, value, note, icon: Icon }) => <article key={label} className="glass rounded-sm border border-border/70 p-5 sm:p-6">
        <div className="flex items-start justify-between"><p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</p><Icon size={18} className="text-gold" /></div>
        <p className="mt-5 font-serif text-3xl text-foreground">{value}</p><p className="mt-2 text-xs text-muted-foreground">{note}</p>
      </article>)}
    </section>

    <section className="mt-6 grid gap-6 xl:grid-cols-[1.65fr_1fr]">
      <ChartCard title="Registration momentum" subtitle="Paid registrations over the last 30 days">
        <ResponsiveContainer width="100%" height={310}><AreaChart data={data.trends} margin={{ left: -20, right: 10 }}><defs><linearGradient id="goldArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d6b66c" stopOpacity={0.42}/><stop offset="100%" stopColor="#d6b66c" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="#302d27" vertical={false}/><XAxis dataKey="date" tickFormatter={(v) => v.slice(5)} stroke="#777064" fontSize={11}/><YAxis allowDecimals={false} stroke="#777064" fontSize={11}/><Tooltip contentStyle={{ background: "#1b1a17", border: "1px solid #4a4337", color: "#f5f0e6" }}/><Area type="monotone" dataKey="registrations" stroke="#d6b66c" strokeWidth={2} fill="url(#goldArea)" /></AreaChart></ResponsiveContainer>
      </ChartCard>
      <ChartCard title="Payment status" subtitle={`${metrics.totalApplications} total applications`}>
        <ResponsiveContainer width="100%" height={250}><PieChart><Pie data={data.breakdowns.paymentStatus} dataKey="value" nameKey="name" innerRadius={62} outerRadius={92} paddingAngle={3}>{data.breakdowns.paymentStatus.map((entry, index) => <Cell key={entry.name} fill={GOLD_COLORS[index % GOLD_COLORS.length]} />)}</Pie><Tooltip contentStyle={{ background: "#1b1a17", border: "1px solid #4a4337" }}/></PieChart></ResponsiveContainer>
        <LegendList data={data.breakdowns.paymentStatus} />
      </ChartCard>
    </section>

    <section className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
      <BreakdownBar title="Registration mix" subtitle="Paid attendees by registration type" data={data.breakdowns.registrationType.slice(0, 8)} />
      <BreakdownBar title="Industry representation" subtitle="Top industries among paid attendees" data={data.breakdowns.industry.slice(0, 8)} />
      <BreakdownBar title="Registrations by city" subtitle="Top cities selected by paid attendees" data={(data.breakdowns.city ?? []).slice(0, 8)} />
    </section>

    <RecordsTable data={data} page={page} setPage={setPage} search={search} setSearch={setSearch} status={status} setStatus={setStatus} />
  </>;
}

function ChartCard({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return <article className="glass rounded-sm border border-border/70 p-5 sm:p-6"><p className="font-serif text-xl">{title}</p><p className="mt-1 text-xs text-muted-foreground">{subtitle}</p><div className="mt-6">{children}</div></article>;
}

function LegendList({ data }: { data: Breakdown[] }) {
  return <div className="grid grid-cols-2 gap-3">{data.map((item, index) => <div key={item.name} className="flex items-center justify-between gap-2 text-xs"><span className="flex min-w-0 items-center gap-2 text-muted-foreground"><i className="h-2 w-2 shrink-0 rounded-full" style={{ background: GOLD_COLORS[index % GOLD_COLORS.length] }} /><span className="truncate">{item.name}</span></span><strong>{item.value}</strong></div>)}</div>;
}

function BreakdownBar({ title, subtitle, data }: { title: string; subtitle: string; data: Breakdown[] }) {
  return <ChartCard title={title} subtitle={subtitle}><ResponsiveContainer width="100%" height={280}><BarChart data={data} layout="vertical" margin={{ left: 15 }}><CartesianGrid stroke="#302d27" horizontal={false}/><XAxis type="number" allowDecimals={false} stroke="#777064" fontSize={11}/><YAxis type="category" dataKey="name" width={120} stroke="#777064" fontSize={10} tick={{ fill: "#a8a096" }}/><Tooltip contentStyle={{ background: "#1b1a17", border: "1px solid #4a4337" }}/><Bar dataKey="value" fill="#c9a75e" radius={[0, 4, 4, 0]} /></BarChart></ResponsiveContainer></ChartCard>;
}

function RecordsTable({ data, page, setPage, search, setSearch, status, setStatus }: {
  data: AnalyticsResponse; page: number; setPage: (value: number) => void;
  search: string; setSearch: (value: string) => void; status: string; setStatus: (value: string) => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const statuses = useMemo(() => ["ALL", ...data.breakdowns.paymentStatus.map((item) => item.name)], [data]);
  return <section className="glass mt-6 rounded-sm border border-border/70">
    <div className="flex flex-col gap-4 border-b border-border/70 p-5 sm:p-6 lg:flex-row lg:items-end lg:justify-between">
      <div><p className="font-serif text-2xl">Registration records</p><p className="mt-1 text-xs text-muted-foreground">{data.table.pagination.totalRecords} matching records · select a row for full details</p></div>
      <div className="flex flex-col gap-3 sm:flex-row"><label className="relative"><Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"/><input value={search} onChange={(e) => { setPage(1); setSearch(e.target.value); }} placeholder="Search name, email, order…" className="h-11 w-full rounded-sm border border-border bg-transparent pl-9 pr-3 text-sm outline-none focus:border-gold sm:w-72" /></label><select value={status} onChange={(e) => { setPage(1); setStatus(e.target.value); }} className="h-11 rounded-sm border border-border bg-background px-3 text-sm outline-none focus:border-gold">{statuses.map((item) => <option key={item}>{item}</option>)}</select></div>
    </div>
    <div className="overflow-x-auto"><table className="w-full min-w-[1050px] border-collapse text-left"><thead><tr className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{["Registrant", "Organisation", "Type", "Payment", "Amount", "Registered", ""].map((heading) => <th key={heading} className="border-b border-border/70 px-5 py-4 font-normal">{heading}</th>)}</tr></thead><tbody>{data.table.rows.map((row) => <RecordRows key={row.id} row={row} expanded={expanded === row.id} onToggle={() => setExpanded(expanded === row.id ? null : row.id)} />)}</tbody></table></div>
    <div className="flex flex-col gap-3 border-t border-border/70 px-5 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>Page {data.table.pagination.page} of {data.table.pagination.totalPages}</span><div className="flex gap-2"><button disabled={page <= 1} onClick={() => setPage(page - 1)} className="flex h-9 items-center gap-1 rounded-sm border border-border px-3 disabled:opacity-35"><ChevronLeft size={14}/> Previous</button><button disabled={page >= data.table.pagination.totalPages} onClick={() => setPage(page + 1)} className="flex h-9 items-center gap-1 rounded-sm border border-border px-3 disabled:opacity-35">Next <ChevronRight size={14}/></button></div></div>
  </section>;
}

function RecordRows({ row, expanded, onToggle }: { row: AnalyticsRow; expanded: boolean; onToggle: () => void }) {
  const details = [...Object.entries(row.applicant), ...Object.entries(row.payment).map(([key, value]) => [`payment.${key}`, String(value)] as const)];
  return <><tr onClick={onToggle} className="cursor-pointer border-b border-border/50 text-sm transition hover:bg-gold/[0.035]"><td className="px-5 py-4"><p className="font-medium">{row.applicant.name}</p><p className="mt-1 text-xs text-muted-foreground">{row.applicant.email}</p></td><td className="px-5 py-4 text-muted-foreground">{row.applicant.organization}</td><td className="px-5 py-4 text-muted-foreground">{row.applicant.registrationType}</td><td className="px-5 py-4"><StatusBadge value={String(row.payment.status)} /></td><td className="px-5 py-4 font-medium">{money(Number(row.payment.netRevenue))}</td><td className="px-5 py-4 text-xs text-muted-foreground">{displayDate(row.verifiedAt ?? row.createdAt)}</td><td className="px-5 py-4"><ChevronDown size={16} className={`transition ${expanded ? "rotate-180 text-gold" : "text-muted-foreground"}`} /></td></tr>{expanded && <tr className="border-b border-border/70 bg-secondary/10"><td colSpan={7} className="px-5 py-6"><div className="mb-5"><p className="text-[10px] uppercase tracking-[0.2em] text-gold">Order reference</p><p className="mt-2 break-all text-sm">{row.orderId}</p></div><div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{details.map(([key, value]) => <div key={key}><p className="text-[9px] uppercase tracking-[0.17em] text-muted-foreground">{key.replace(/([A-Z])/g, " $1").replace("payment.", "Payment · ")}</p><p className="mt-1.5 break-words text-sm">{value || "-"}</p></div>)}</div></td></tr>}</>;
}

function StatusBadge({ value }: { value: string }) {
  const paid = ["SUCCESS", "PARTIALLY_REFUNDED", "REFUNDED"].includes(value);
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] ${paid ? "border-gold/35 bg-gold/10 text-gold" : "border-border text-muted-foreground"}`}>{value}</span>;
}

function DashboardSkeleton() {
  return <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{Array.from({ length: 4 }).map((_, index) => <div key={index} className="h-36 animate-pulse rounded-sm border border-border/60 bg-secondary/20" />)}</div>;
}
