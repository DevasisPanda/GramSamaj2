import { useState, useMemo } from 'react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SubNavPills } from '@/components/shared/SubNavPills';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Home, Users, MapPin, Landmark, Search, Phone, Mail,
  Wheat, ShieldCheck, HeartHandshake,
  ArrowUpRight, Compass, Download
} from 'lucide-react';
import { MODEL_VILLAGE_SUB_NAV } from '@/lib/subNavTree';
import {
  STREET_WISE_HOUSES,
  HOUSE_POP_AND_LAND,
  PIT_MEMBERS,
  VILLAGE_LEADERSHIP,
} from '@/data/villageInformation';
import { VillageDirectory as InteractiveMapSection } from './sections/VillageDirectory';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function VillageDirectoryPage() {
  const [activeTab, setActiveTab] = useState('streets');
  const [streetQuery, setStreetQuery] = useState('');
  const [selectedStreetId, setSelectedStreetId] = useState<string>('all');
  const [popLandQuery, setPopLandQuery] = useState('');
  const [pitQuery, setPitQuery] = useState('');
  const [leadershipCategory, setLeadershipCategory] = useState<string>('all');

  // Filtered street-wise houses
  const filteredStreets = useMemo(() => {
    let list = STREET_WISE_HOUSES;
    if (selectedStreetId !== 'all') {
      list = list.filter((s) => s.streetId === selectedStreetId);
    }
    if (!streetQuery.trim()) return list;

    const q = streetQuery.toLowerCase().trim();
    return list.map((street) => {
      const matchedHouses = street.houses.filter(
        (h) =>
          h.name.toLowerCase().includes(q) ||
          h.houseNo.toLowerCase().includes(q) ||
          h.caste.toLowerCase().includes(q) ||
          h.occupation.toLowerCase().includes(q) ||
          h.relation.toLowerCase().includes(q)
      );
      return { ...street, houses: matchedHouses };
    }).filter((street) => street.houses.length > 0 || street.streetName.toLowerCase().includes(q));
  }, [streetQuery, selectedStreetId]);

  // Filtered pop & land
  const filteredPopLand = useMemo(() => {
    if (!popLandQuery.trim()) return HOUSE_POP_AND_LAND;
    const q = popLandQuery.toLowerCase().trim();
    return HOUSE_POP_AND_LAND.filter(
      (h) =>
        h.houseNo.toLowerCase().includes(q) ||
        String(h.plotAreaSqFt).includes(q) ||
        String(h.roomsCount).includes(q)
    );
  }, [popLandQuery]);

  // Filtered PIT members
  const filteredPit = useMemo(() => {
    if (!pitQuery.trim()) return PIT_MEMBERS;
    const q = pitQuery.toLowerCase().trim();
    return PIT_MEMBERS.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q) ||
        m.houseNo.toLowerCase().includes(q) ||
        m.mobile.includes(q)
    );
  }, [pitQuery]);

  // Filtered leadership
  const filteredLeadership = useMemo(() => {
    if (leadershipCategory === 'all') return VILLAGE_LEADERSHIP;
    return VILLAGE_LEADERSHIP.filter((l) => l.category === leadershipCategory);
  }, [leadershipCategory]);

  return (
    <>
      <PageHero
        title="Village Directory — Manpur Lala"
        subtitle="Baseline demographic census, street registers, Project Implementation Team (PIT), and institutional leadership for Gram Swaraj demonstration."
        gradient="forest"
      />
      <Breadcrumb items={[{ label: 'Model village', to: '/village-directory' }, { label: 'Village Directory' }]} />

      <div className="container-px max-w-6xl mx-auto pt-8">
        <SubNavPills items={MODEL_VILLAGE_SUB_NAV} />

        {/* Statistical Overview Bar */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="card-surface p-4 rounded-xl border border-saffron-100 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-saffron-100 text-saffron-800">
              <Home className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-ink/50">Surveyed Houses</p>
              <p className="text-xl font-black text-ink">120+ Households</p>
            </div>
          </div>

          <div className="card-surface p-4 rounded-xl border border-forest-100 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-forest-100 text-forest-800">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-ink/50">Model Gram</p>
              <p className="text-xl font-black text-ink">Manpur Lala</p>
            </div>
          </div>

          <div className="card-surface p-4 rounded-xl border border-amber-100 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-100 text-amber-800">
              <Wheat className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-ink/50">Adoption Date</p>
              <p className="text-xl font-black text-ink">15 Aug 2026</p>
            </div>
          </div>

          <div className="card-surface p-4 rounded-xl border border-blue-100 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-blue-100 text-blue-800">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-ink/50">Development Works</p>
              <Link to="/village-development-works" className="text-xs font-bold text-forest-700 hover:underline flex items-center gap-1 mt-1">
                View 5 Pillars <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Template Download & Field Entry Banner */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-forest-50/80 border border-forest-200 rounded-xl text-xs text-forest-950">
          <div className="flex items-center gap-2">
            <Download className="h-4 w-4 text-forest-700 shrink-0" />
            <span>
              <strong>Field Survey Register Template:</strong> Official blank workbook covering all 4 sheets (Street-wise, Demographics/Land, PIT, Team).
            </span>
          </div>
          <a
            href="/village-information-template.xlsx"
            download="Village_Information_Template_Manpur_Lala.xlsx"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-forest-700 hover:bg-forest-800 text-white font-bold text-xs shrink-0 shadow-xs transition-colors"
          >
            <Download className="h-3.5 w-3.5" /> Download Blank Excel Template
          </a>
        </div>

        {/* Tabs Container */}
        <div className="mt-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex overflow-x-auto pb-2 scrollbar-none">
              <TabsList className="bg-saffron-50/70 p-1 border border-saffron-200 rounded-xl h-auto gap-1">
                <TabsTrigger
                  value="streets"
                  className="data-[state=active]:bg-white data-[state=active]:text-saffron-900 data-[state=active]:shadow-sm rounded-lg px-3.5 py-2 text-xs font-bold transition-all"
                >
                  <Home className="h-3.5 w-3.5 mr-1.5" /> 1. Street-wise House Owners
                </TabsTrigger>
                <TabsTrigger
                  value="pop-land"
                  className="data-[state=active]:bg-white data-[state=active]:text-saffron-900 data-[state=active]:shadow-sm rounded-lg px-3.5 py-2 text-xs font-bold transition-all"
                >
                  <Users className="h-3.5 w-3.5 mr-1.5" /> 2. House-wise Pop & Land
                </TabsTrigger>
                <TabsTrigger
                  value="pit"
                  className="data-[state=active]:bg-white data-[state=active]:text-saffron-900 data-[state=active]:shadow-sm rounded-lg px-3.5 py-2 text-xs font-bold transition-all"
                >
                  <HeartHandshake className="h-3.5 w-3.5 mr-1.5" /> 3. PIT (Project Implementation Team)
                </TabsTrigger>
                <TabsTrigger
                  value="leadership"
                  className="data-[state=active]:bg-white data-[state=active]:text-saffron-900 data-[state=active]:shadow-sm rounded-lg px-3.5 py-2 text-xs font-bold transition-all"
                >
                  <Landmark className="h-3.5 w-3.5 mr-1.5" /> 4. Village Leadership & Institutions
                </TabsTrigger>
                <TabsTrigger
                  value="map"
                  className="data-[state=active]:bg-white data-[state=active]:text-saffron-900 data-[state=active]:shadow-sm rounded-lg px-3.5 py-2 text-xs font-bold transition-all"
                >
                  <Compass className="h-3.5 w-3.5 mr-1.5" /> 5. Interactive Village Map
                </TabsTrigger>
              </TabsList>
            </div>

            {/* TAB 1: Street-wise House Owners */}
            <TabsContent value="streets" className="mt-6 space-y-6">
              <Card className="border-saffron-100 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-saffron-50/70 via-white to-saffron-50/30 border-b border-saffron-100 pb-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-saffron-100 text-saffron-800 mb-1.5">
                        Sheet 1 • Village information.xlsx
                      </div>
                      <CardTitle className="text-xl font-black text-ink">
                        Street-wise House Owner Directory
                      </CardTitle>
                      <p className="text-xs text-ink/60 mt-1">
                        S.No • House No. • Name • S/D/W of • Caste • Age • Qualification • Occupation • Photo of Street
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {/* Street selector */}
                      <select
                        value={selectedStreetId}
                        onChange={(e) => setSelectedStreetId(e.target.value)}
                        className="text-xs border border-saffron-200 rounded-lg px-3 py-1.5 bg-white text-ink font-medium focus:outline-none focus:ring-2 focus:ring-saffron-400"
                      >
                        <option value="all">All Streets / Mohallas</option>
                        {STREET_WISE_HOUSES.map((s) => (
                          <option key={s.streetId} value={s.streetId}>
                            {s.streetName}
                          </option>
                        ))}
                      </select>

                      {/* Search */}
                      <div className="relative">
                        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-ink/40" />
                        <Input
                          value={streetQuery}
                          onChange={(e) => setStreetQuery(e.target.value)}
                          placeholder="Search house or name..."
                          className="pl-8 text-xs h-8 w-44 sm:w-56"
                        />
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-4 sm:p-6 space-y-8">
                  {filteredStreets.map((street) => (
                    <div key={street.streetId} className="border border-saffron-100 rounded-xl overflow-hidden bg-white shadow-xs">
                      {/* Street Banner */}
                      <div className="bg-saffron-50/80 p-3 sm:p-4 border-b border-saffron-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-saffron-600 text-white">
                            <MapPin className="h-4 w-4" />
                          </div>
                          <div>
                            <h3 className="font-bold text-sm sm:text-base text-ink">
                              {street.streetName}
                            </h3>
                            <p className="text-xs text-ink/60">{street.description}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-[11px] bg-white text-saffron-800 border-saffron-200">
                            {street.houses.length} Houses Surveyed
                          </Badge>
                          <Badge variant="secondary" className="text-[10px] bg-saffron-100 text-saffron-900">
                            Street Photo Logged
                          </Badge>
                        </div>
                      </div>

                      {/* Table */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="bg-slate-50/80 text-[11px] uppercase tracking-wider text-ink/60 border-b border-slate-200">
                              <th className="py-2.5 px-3 font-bold w-12 text-center">S.No</th>
                              <th className="py-2.5 px-3 font-bold w-20">House No.</th>
                              <th className="py-2.5 px-3 font-bold">House Owner Name</th>
                              <th className="py-2.5 px-3 font-bold">S/D/W of</th>
                              <th className="py-2.5 px-3 font-bold w-20">Caste</th>
                              <th className="py-2.5 px-3 font-bold w-16 text-center">Age</th>
                              <th className="py-2.5 px-3 font-bold">Qualification</th>
                              <th className="py-2.5 px-3 font-bold">Occupation</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 text-ink/80">
                            {street.houses.map((house) => (
                              <tr key={house.houseNo} className="hover:bg-saffron-50/40 transition-colors">
                                <td className="py-2.5 px-3 text-center font-semibold text-ink/50">{house.sNo}</td>
                                <td className="py-2.5 px-3 font-bold text-saffron-700">{house.houseNo}</td>
                                <td className="py-2.5 px-3 font-bold text-ink">{house.name}</td>
                                <td className="py-2.5 px-3 text-ink/70">{house.relation}</td>
                                <td className="py-2.5 px-3">
                                  <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-semibold text-slate-700">
                                    {house.caste}
                                  </span>
                                </td>
                                <td className="py-2.5 px-3 text-center">{house.age}</td>
                                <td className="py-2.5 px-3 text-ink/70">{house.qualification}</td>
                                <td className="py-2.5 px-3 font-medium text-slate-800">{house.occupation}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}

                  {filteredStreets.length === 0 && (
                    <div className="text-center py-12 text-ink/50 text-xs">
                      No households matched your search query.
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* TAB 2: House-wise Population & Land */}
            <TabsContent value="pop-land" className="mt-6 space-y-6">
              <Card className="border-forest-100 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-forest-50/70 via-white to-forest-50/30 border-b border-forest-100 pb-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-forest-100 text-forest-800 mb-1.5">
                        Sheet 2 • Village information.xlsx
                      </div>
                      <CardTitle className="text-xl font-black text-ink">
                        House-wise Population & Land Holdings
                      </CardTitle>
                      <p className="text-xs text-ink/60 mt-1">
                        Plot area • Rooms • Demographic age brackets • Land categories (Agri / Non-agri / Orchard / Pond) • Share cropping
                      </p>
                    </div>

                    <div className="relative">
                      <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-ink/40" />
                      <Input
                        value={popLandQuery}
                        onChange={(e) => setPopLandQuery(e.target.value)}
                        placeholder="Search house no..."
                        className="pl-8 text-xs h-8 w-44 sm:w-56"
                      />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-4 sm:p-6">
                  <div className="overflow-x-auto border border-slate-200 rounded-xl">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        {/* Top Grouped Header */}
                        <tr className="bg-forest-900 text-white text-[10px] uppercase font-bold tracking-wider text-center">
                          <th className="py-2 px-2 border-r border-forest-800 text-left" colSpan={3}>House Profile</th>
                          <th className="py-2 px-2 border-r border-forest-800" colSpan={6}>Number of Family Members</th>
                          <th className="py-2 px-2 border-r border-forest-800" colSpan={4}>Land Holding (Bigha / Count)</th>
                          <th className="py-2 px-2" colSpan={2}>Share Cropping</th>
                        </tr>
                        {/* Sub Column Headers */}
                        <tr className="bg-forest-50 text-[10px] font-bold uppercase text-forest-950 border-b border-forest-200">
                          <th className="py-2 px-2.5 border-r border-forest-100">House No.</th>
                          <th className="py-2 px-2 border-r border-forest-100 text-right">Plot (Sq.Ft)</th>
                          <th className="py-2 px-2 border-r border-forest-100 text-center">Rooms</th>
                          {/* Family */}
                          <th className="py-2 px-2 border-r border-forest-100 text-center">Migrant</th>
                          <th className="py-2 px-2 border-r border-forest-100 text-center">&gt;70 Yrs</th>
                          <th className="py-2 px-2 border-r border-forest-100 text-center">Men</th>
                          <th className="py-2 px-2 border-r border-forest-100 text-center">Women</th>
                          <th className="py-2 px-2 border-r border-forest-100 text-center">Students</th>
                          <th className="py-2 px-2 border-r border-forest-100 text-center">&lt;5 Yrs</th>
                          {/* Land */}
                          <th className="py-2 px-2 border-r border-forest-100 text-center">Agri</th>
                          <th className="py-2 px-2 border-r border-forest-100 text-center">Non-Agri</th>
                          <th className="py-2 px-2 border-r border-forest-100 text-center">Orchard</th>
                          <th className="py-2 px-2 border-r border-forest-100 text-center">Pond</th>
                          {/* Share cropping */}
                          <th className="py-2 px-2 border-r border-forest-100 text-center">Share In</th>
                          <th className="py-2 px-2 text-center">Share Out</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-ink/80">
                        {filteredPopLand.map((row) => (
                          <tr key={row.houseNo} className="hover:bg-forest-50/30 transition-colors">
                            <td className="py-2 px-2.5 font-bold text-forest-800 border-r border-slate-100">{row.houseNo}</td>
                            <td className="py-2 px-2 text-right border-r border-slate-100">{row.plotAreaSqFt}</td>
                            <td className="py-2 px-2 text-center border-r border-slate-100">{row.roomsCount}</td>
                            {/* Family */}
                            <td className="py-2 px-2 text-center border-r border-slate-100 font-medium">{row.family.migrant}</td>
                            <td className="py-2 px-2 text-center border-r border-slate-100 text-amber-700 font-semibold">{row.family.above70}</td>
                            <td className="py-2 px-2 text-center border-r border-slate-100">{row.family.adultMen}</td>
                            <td className="py-2 px-2 text-center border-r border-slate-100">{row.family.adultWomen}</td>
                            <td className="py-2 px-2 text-center border-r border-slate-100 text-blue-700 font-semibold">{row.family.students}</td>
                            <td className="py-2 px-2 text-center border-r border-slate-100">{row.family.childrenUnder5}</td>
                            {/* Land */}
                            <td className="py-2 px-2 text-center border-r border-slate-100 font-bold text-forest-900">{row.landHolding.agricultureBigha}</td>
                            <td className="py-2 px-2 text-center border-r border-slate-100">{row.landHolding.nonAgriculture}</td>
                            <td className="py-2 px-2 text-center border-r border-slate-100">{row.landHolding.orchardBigha}</td>
                            <td className="py-2 px-2 text-center border-r border-slate-100">{row.landHolding.pondCount}</td>
                            {/* Share cropping */}
                            <td className="py-2 px-2 text-center border-r border-slate-100 text-[11px] text-slate-600">{row.shareCropping.shareIn}</td>
                            <td className="py-2 px-2 text-center text-[11px] text-slate-600">{row.shareCropping.shareOut}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* TAB 3: Project Implementation Team (PIT) */}
            <TabsContent value="pit" className="mt-6 space-y-6">
              <Card className="border-saffron-100 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-amber-50/80 via-white to-amber-50/40 border-b border-amber-100 pb-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-800 mb-1.5">
                        Sheet 3 • Village information.xlsx
                      </div>
                      <CardTitle className="text-xl font-black text-ink">
                        Project Implementation Team (PIT) of KRANTI
                      </CardTitle>
                      <p className="text-xs text-ink/60 mt-1">
                        S. No. • House No. • Photo • Name • Mobile No. • WhatsApp No. • E-mail
                      </p>
                    </div>

                    <div className="relative">
                      <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-ink/40" />
                      <Input
                        value={pitQuery}
                        onChange={(e) => setPitQuery(e.target.value)}
                        placeholder="Search PIT members..."
                        className="pl-8 text-xs h-8 w-44 sm:w-56"
                      />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-4 sm:p-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredPit.map((member) => (
                      <div key={member.sNo} className="border border-amber-100 rounded-xl p-4 bg-white hover:shadow-md transition-all">
                        <div className="flex items-start gap-3">
                          <div className="h-12 w-12 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 font-bold text-sm shrink-0">
                            {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1">
                              <Badge variant="outline" className="text-[10px] bg-amber-50 text-amber-800 border-amber-200">
                                House {member.houseNo}
                              </Badge>
                              <span className="text-[10px] text-ink/40 font-mono">#{member.sNo}</span>
                            </div>
                            <h4 className="font-bold text-sm text-ink truncate mt-1">{member.name}</h4>
                            <p className="text-[11px] font-medium text-forest-700 line-clamp-1">{member.role}</p>
                          </div>
                        </div>

                        <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-ink/70">
                          <div className="flex items-center gap-2">
                            <Phone className="h-3.5 w-3.5 text-ink/40" />
                            <span>{member.mobile}</span>
                            <span className="text-[10px] text-green-600 font-medium ml-auto">WA: {member.whatsapp}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-3.5 w-3.5 text-ink/40" />
                            <span className="truncate text-ink/60">{member.email}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* TAB 4: Village Leadership & Institutions */}
            <TabsContent value="leadership" className="mt-6 space-y-6">
              <Card className="border-saffron-100 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-blue-50/80 via-white to-blue-50/30 border-b border-blue-100 pb-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-100 text-blue-800 mb-1.5">
                        Sheet 4 • Village information.xlsx
                      </div>
                      <CardTitle className="text-xl font-black text-ink">
                        Village Leadership & Institutions (Team)
                      </CardTitle>
                      <p className="text-xs text-ink/60 mt-1">
                        Panchayat Leadership • 7 Statutory Standing Committees • Village Institution of SHG
                      </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-1.5">
                      <Button
                        variant={leadershipCategory === 'all' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setLeadershipCategory('all')}
                        className="text-xs h-8 px-3 rounded-full"
                      >
                        All Officials
                      </Button>
                      <Button
                        variant={leadershipCategory === 'Panchayat Leadership' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setLeadershipCategory('Panchayat Leadership')}
                        className="text-xs h-8 px-3 rounded-full"
                      >
                        Panchayat Exec
                      </Button>
                      <Button
                        variant={leadershipCategory === 'Panchayat Committee' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setLeadershipCategory('Panchayat Committee')}
                        className="text-xs h-8 px-3 rounded-full"
                      >
                        7 Committees
                      </Button>
                      <Button
                        variant={leadershipCategory === 'Village SHG Institution' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setLeadershipCategory('Village SHG Institution')}
                        className="text-xs h-8 px-3 rounded-full"
                      >
                        SHG Team
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-4 sm:p-6">
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredLeadership.map((leader, i) => (
                      <div
                        key={i}
                        className={cn(
                          'p-4 rounded-xl border transition-all',
                          leader.category === 'Panchayat Leadership'
                            ? 'bg-blue-50/40 border-blue-200'
                            : leader.category === 'Panchayat Committee'
                            ? 'bg-saffron-50/40 border-saffron-200'
                            : 'bg-emerald-50/40 border-emerald-200'
                        )}
                      >
                        <div className="flex items-center justify-between gap-1 mb-2">
                          <Badge
                            variant="outline"
                            className={cn(
                              'text-[10px] font-semibold',
                              leader.category === 'Panchayat Leadership'
                                ? 'bg-blue-100 text-blue-900 border-blue-300'
                                : leader.category === 'Panchayat Committee'
                                ? 'bg-saffron-100 text-saffron-900 border-saffron-300'
                                : 'bg-emerald-100 text-emerald-900 border-emerald-300'
                            )}
                          >
                            {leader.category}
                          </Badge>
                          {leader.committeeNumber && (
                            <span className="text-[10px] font-mono text-ink/40">Head #{leader.committeeNumber}</span>
                          )}
                        </div>

                        <h4 className="font-bold text-sm text-ink">{leader.position}</h4>
                        <p className="text-xs font-semibold text-forest-800 mt-1">{leader.name}</p>
                        <p className="text-[11px] text-ink/60 mt-1 leading-snug">{leader.responsibilities}</p>

                        <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center gap-2 text-xs text-ink/60">
                          <Phone className="h-3.5 w-3.5" />
                          <span>{leader.mobile}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* TAB 5: Interactive Village Map */}
            <TabsContent value="map" className="mt-6">
              <InteractiveMapSection variant="compact" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
