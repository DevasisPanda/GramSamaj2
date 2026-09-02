import { useState, useMemo } from 'react';
import {
  Building, ShieldCheck, FileCheck, Copy, Check, TrendingUp,
  Receipt, Search
} from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SubNavPills } from '@/components/shared/SubNavPills';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { AIRD, SERVICE_PRINCIPLE } from '@/lib/constants';
import { ABOUT_SUB_NAV } from '@/lib/subNavTree';
import {
  FINANCIAL_POSITION_SUMMARY,
  YEARLY_ACCOUNT_STATEMENTS
} from '@/data/accountsData';
import { formatINR, cn } from '@/lib/utils';

export default function Accounts() {
  const { copy, copied } = useCopyToClipboard();
  const [selectedYearId, setSelectedYearId] = useState<string>('26-27');
  const [searchQuery, setSearchQuery] = useState('');

  const activeStatement = useMemo(() => {
    return (
      YEARLY_ACCOUNT_STATEMENTS.find((y) => y.id === selectedYearId) ??
      YEARLY_ACCOUNT_STATEMENTS[YEARLY_ACCOUNT_STATEMENTS.length - 1]
    );
  }, [selectedYearId]);

  const filteredTransactions = useMemo(() => {
    if (!searchQuery.trim()) return activeStatement.transactions;
    const q = searchQuery.toLowerCase();
    return activeStatement.transactions.filter(
      (t) =>
        t.date.toLowerCase().includes(q) ||
        (t.receivedFrom && t.receivedFrom.toLowerCase().includes(q)) ||
        (t.purpose && t.purpose.toLowerCase().includes(q))
    );
  }, [activeStatement, searchQuery]);

  return (
    <>
      <PageHero
        title="Trust Accounts & Financial Disclosures"
        subtitle="Complete transparency in banking, audited multi-year ledgers, and financial management of AIRD."
        gradient="saffron"
      >
        <p className="text-sm font-medium text-saffron-700 italic bg-white/60 inline-block rounded-lg px-3 py-1.5">
          &ldquo;{SERVICE_PRINCIPLE}&rdquo;
        </p>
      </PageHero>
      <Breadcrumb
        items={[
          { label: 'About us', to: '/about' },
          { label: 'Account' },
        ]}
      />

      <section className="section-py">
        <div className="container-px max-w-5xl mx-auto space-y-10">
          <SubNavPills items={ABOUT_SUB_NAV} />

          {/* Section 1: Banking & Statutory Credentials */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Bank Account Details */}
            <Card className="border-0 bg-gradient-to-br from-forest-800 to-forest-950 text-white shadow-xl rounded-2xl overflow-hidden">
              <CardHeader className="border-b border-forest-700/60 pb-4">
                <CardTitle className="flex items-center gap-2 text-white text-lg sm:text-xl">
                  <Building className="h-5 w-5 text-saffron-400 shrink-0" /> Official Bank Account
                </CardTitle>
                <p className="text-xs text-white/70">For official contributions, audits, and institutional transfers</p>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="rounded-xl bg-forest-900/80 p-4 border border-forest-700/50 space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-1 border-b border-forest-800">
                    <span className="text-white/60">Account Holder:</span>
                    <span className="font-bold text-white text-right">{AIRD.bank.accountName}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-forest-800">
                    <span className="text-white/60">Bank Name:</span>
                    <span className="font-bold text-white text-right">{AIRD.bank.name}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-forest-800">
                    <span className="text-white/60">Account Number:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-saffron-300 text-sm sm:text-base">{AIRD.bank.accountNumberMasked}</span>
                      <button
                        onClick={() => copy(AIRD.bank.accountNumberMasked, 'Account Number')}
                        className="text-xs bg-forest-800 hover:bg-forest-700 p-1.5 rounded text-white transition-colors cursor-pointer"
                        title="Copy Account Number"
                      >
                        {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-white/60">IFSC Code:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-saffron-300">{AIRD.bank.ifsc}</span>
                      <button
                        onClick={() => copy(AIRD.bank.ifsc, 'IFSC Code')}
                        className="text-xs bg-forest-800 hover:bg-forest-700 p-1.5 rounded text-white transition-colors cursor-pointer"
                        title="Copy IFSC"
                      >
                        {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financial & Statutory Credentials */}
            <div className="space-y-6">
              <Card className="border-l-4 border-l-saffron-500 bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-forest-950 text-base sm:text-lg">
                    <ShieldCheck className="h-5 w-5 text-saffron-600" /> Statutory &amp; Tax Identifiers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between py-2 border-b border-stone-100">
                    <span className="text-ink/60 font-semibold">Permanent Account Number (PAN):</span>
                    <span className="font-mono font-bold text-forest-950">{AIRD.pan}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-stone-100">
                    <span className="text-ink/60 font-semibold">Trust Registration No:</span>
                    <span className="font-bold text-forest-950">{AIRD.registrationNo}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-stone-100">
                    <span className="text-ink/60 font-semibold">NITI Aayog NGO Darpan:</span>
                    <span className="font-bold text-forest-950">{AIRD.ngoDarpanId}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-ink/60 font-semibold">Tax Status:</span>
                    <span className="font-bold text-forest-950">{AIRD.taxStatus}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-forest-600 bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-forest-950 text-base sm:text-lg">
                    <FileCheck className="h-5 w-5 text-forest-600" /> Accounting Principles &amp; Audits
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs sm:text-sm text-ink/80 leading-relaxed space-y-2">
                  <p>
                    All financial transactions, grants, donations, and grassroots project disbursements of the
                    Appropriate Institute of Rural Development (AIRD) are audited annually by certified Chartered Accountants.
                  </p>
                  <p>
                    Financial statements and balance sheets are submitted to regulatory authorities and presented in the
                    annual meetings of the Board of Trustees in accordance with the Indian Trusts Act (PCTA 1882).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Section 2: Overall Multi-Year Financial Position Summary (State of Account) */}
          <div className="card-surface bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-forest-100 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-saffron-100 pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-forest-950 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-saffron-600" /> Multi-Year Financial Position (2019&ndash;2026)
                </h2>
                <p className="text-xs text-ink/60 mt-1">
                  Official audited summary of income, expenditures, cash reserves, and liabilities from inception.
                </p>
              </div>
              <span className="text-[11px] font-bold bg-forest-50 text-forest-800 border border-forest-200 px-3 py-1 rounded-full">
                8 Financial Years Audited
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-2xs">
              <table className="w-full min-w-[700px] text-xs sm:text-sm text-left border-collapse">
                <thead className="bg-forest-900 text-white uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="p-3 font-semibold">Period / Date</th>
                    <th className="p-3 font-semibold text-right">Received (₹)</th>
                    <th className="p-3 font-semibold text-right">Cash in Hand (₹)</th>
                    <th className="p-3 font-semibold text-right">Bank Deposit (₹)</th>
                    <th className="p-3 font-semibold text-right">Expenditure (₹)</th>
                    <th className="p-3 font-semibold text-right">Returnable (₹)</th>
                    <th className="p-3 font-semibold text-right">Returned (₹)</th>
                    <th className="p-3 font-semibold text-right">Liability (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {FINANCIAL_POSITION_SUMMARY.map((row, idx) => (
                    <tr
                      key={row.date + idx}
                      className={cn(
                        'transition-colors hover:bg-saffron-50/50',
                        idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/60'
                      )}
                    >
                      <td className="p-3 font-bold text-forest-950">
                        <div>{row.period}</div>
                        <div className="text-[10px] text-ink/50 font-normal">{row.date}</div>
                      </td>
                      <td className="p-3 font-mono font-bold text-forest-700 text-right">
                        {row.received > 0 ? formatINR(row.received) : '—'}
                      </td>
                      <td className="p-3 font-mono text-ink/80 text-right">
                        {row.cashInHand > 0 ? formatINR(row.cashInHand) : '0'}
                      </td>
                      <td className="p-3 font-mono text-ink/80 text-right">
                        {row.bankDeposit > 0 ? formatINR(row.bankDeposit) : '0'}
                      </td>
                      <td className="p-3 font-mono font-bold text-saffron-800 text-right">
                        {row.expenditure > 0 ? formatINR(row.expenditure) : '—'}
                      </td>
                      <td className="p-3 font-mono text-ink/70 text-right">
                        {row.returnableDonation > 0 ? formatINR(row.returnableDonation) : '—'}
                      </td>
                      <td className="p-3 font-mono text-ink/70 text-right">
                        {row.donationReturned > 0 ? formatINR(row.donationReturned) : '—'}
                      </td>
                      <td className="p-3 font-mono font-bold text-red-700 text-right">
                        {row.liability > 0 ? formatINR(row.liability) : '0'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: Detailed Year-by-Year Financial Statement Ledger */}
          <div className="card-surface bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-forest-100 space-y-6">
            <div className="border-b border-saffron-100 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-forest-950 flex items-center gap-2">
                <Receipt className="h-6 w-6 text-saffron-600" /> Year-Wise Detailed Financial Statements
              </h2>
              <p className="text-xs text-ink/60 mt-1">
                Select a financial year below to inspect the complete itemized transaction ledger, cash-in-hand, and bank records.
              </p>
            </div>

            {/* Year Selection Tabs */}
            <div className="flex flex-wrap gap-2">
              {YEARLY_ACCOUNT_STATEMENTS.map((year) => {
                const isSelected = selectedYearId === year.id;
                return (
                  <button
                    key={year.id}
                    onClick={() => {
                      setSelectedYearId(year.id);
                      setSearchQuery('');
                    }}
                    className={cn(
                      'px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer border select-none',
                      isSelected
                        ? 'bg-forest-800 text-white border-forest-900 shadow-sm ring-2 ring-forest-600/30'
                        : 'bg-stone-50 text-ink/70 border-stone-200 hover:bg-saffron-50 hover:text-saffron-900'
                    )}
                  >
                    {year.yearLabel}
                  </button>
                );
              })}
            </div>

            {/* Selected Year Financial Summary Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-forest-900 text-white p-4 sm:p-5 rounded-2xl shadow-sm">
              <div className="space-y-1">
                <div className="text-[11px] text-white/60 font-medium uppercase">Total FY Income</div>
                <div className="text-base sm:text-xl font-extrabold text-saffron-300 font-mono">
                  {formatINR(activeStatement.summary.totalIncome)}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[11px] text-white/60 font-medium uppercase">Total FY Expenditure</div>
                <div className="text-base sm:text-xl font-extrabold text-emerald-300 font-mono">
                  {formatINR(activeStatement.summary.totalExpenditure)}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[11px] text-white/60 font-medium uppercase">Closing Cash in Hand</div>
                <div className="text-base sm:text-xl font-bold text-white font-mono">
                  {formatINR(activeStatement.summary.closingCashInHand)}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[11px] text-white/60 font-medium uppercase">Closing Bank Balance</div>
                <div className="text-base sm:text-xl font-bold text-white font-mono">
                  {formatINR(activeStatement.summary.closingBankBalance)}
                </div>
              </div>
            </div>

            {/* Search Filter */}
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 pt-2">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/40" />
                <input
                  type="text"
                  placeholder="Search by date, donor, or purpose..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm border border-stone-200 rounded-xl bg-stone-50/80 focus:bg-white focus:ring-2 focus:ring-saffron-400 focus:outline-hidden transition-all"
                />
              </div>
              <span className="text-xs text-ink/50 self-end sm:self-center font-medium">
                Showing {filteredTransactions.length} of {activeStatement.transactions.length} entries for {activeStatement.yearLabel}
              </span>
            </div>

            {/* Transactions Ledger Table */}
            <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-2xs">
              <table className="w-full min-w-[750px] text-xs sm:text-sm text-left border-collapse">
                <thead className="bg-stone-100 text-forest-950 uppercase text-[11px] tracking-wider border-b border-stone-200">
                  <tr>
                    <th className="p-3 font-bold">Date</th>
                    <th className="p-3 font-bold">Received From / Contributor</th>
                    <th className="p-3 font-bold text-right">Income (₹)</th>
                    <th className="p-3 font-bold">Expenditure Purpose</th>
                    <th className="p-3 font-bold text-right">Expenditure (₹)</th>
                    <th className="p-3 font-bold text-right">Cash in Hand</th>
                    <th className="p-3 font-bold text-right">Bank Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {filteredTransactions.length > 0 ? (
                    filteredTransactions.map((tx, idx) => (
                      <tr
                        key={tx.date + idx}
                        className={cn(
                          'transition-colors hover:bg-saffron-50/40',
                          idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'
                        )}
                      >
                        <td className="p-3 font-semibold text-forest-950 whitespace-nowrap">{tx.date || '—'}</td>
                        <td className="p-3 text-ink/80">{tx.receivedFrom || '—'}</td>
                        <td className="p-3 font-mono font-bold text-forest-700 text-right whitespace-nowrap">
                          {tx.income && tx.income > 0 ? formatINR(tx.income) : '—'}
                        </td>
                        <td className="p-3 text-ink/85">{tx.purpose || '—'}</td>
                        <td className="p-3 font-mono font-bold text-saffron-800 text-right whitespace-nowrap">
                          {tx.expenditure && tx.expenditure > 0 ? formatINR(tx.expenditure) : '—'}
                        </td>
                        <td className="p-3 font-mono text-ink/70 text-right whitespace-nowrap">
                          {tx.cashInHand != null ? formatINR(tx.cashInHand) : '—'}
                        </td>
                        <td className="p-3 font-mono text-ink/70 text-right whitespace-nowrap">
                          {tx.bankBalance != null ? formatINR(tx.bankBalance) : '—'}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="p-6 text-center text-xs text-ink/50 italic">
                        No transactions found matching &ldquo;{searchQuery}&rdquo;.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}