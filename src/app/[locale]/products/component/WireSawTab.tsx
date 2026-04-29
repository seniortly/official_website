import { publicPath } from "@/lib/base-path";
import type { Locale } from "@/lib/site-content";
import { miningWireRows, profileWireRows, blockWireRows, concreteWireRows } from "./specData";

export function WireSawTab({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第11页-89.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "矿山开采绳锯" : "Mining Wire Saw"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "矿山开采绳锯" : "Mining Wire Saw"}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4">产品编号<br />Item No.</th>
                    <th className="p-4">规格<br />Spec.(mm)</th>
                    <th className="p-4">串珠数(个/米)<br />Bead/Meter</th>
                    <th className="p-4">固定方式<br />Fastening</th>
                    <th className="p-4">切割对象<br />Application</th>
                    <th className="p-4">寿命(m²/m)<br />Life</th>
                    <th className="p-4">速度(m²/h)<br />Cutting speed</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {miningWireRows.map((row) => (
                    <tr key={`mining-${row[0]}`} className="border-t border-white/5">
                      {row.map((cell, idx) => (
                        <td key={`${row[0]}-${idx}`} className="p-4 whitespace-pre-line">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-1" />
        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "异形加工绳锯" : "Profile Cutting Wire Saw"}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4">产品编号<br />Item No.</th>
                    <th className="p-4">规格<br />Spec.(mm)</th>
                    <th className="p-4">串珠数(个/米)<br />Bead/Meter</th>
                    <th className="p-4">固定方式<br />Fastening</th>
                    <th className="p-4">切割对象<br />Application</th>
                    <th className="p-4">寿命(m²/m)<br />Life</th>
                    <th className="p-4">速度(m²/h)<br />Cutting speed</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {profileWireRows.map((row) => (
                    <tr key={`profile-${row[0]}`} className="border-t border-white/5">
                      {row.map((cell, idx) => (
                        <td key={`${row[0]}-${idx}`} className="p-4 whitespace-pre-line">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-1" />
        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "荒料整形绳锯" : "Block Cutting Wire Saw"}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4">产品编号<br />Item No.</th>
                    <th className="p-4">规格<br />Spec.(mm)</th>
                    <th className="p-4">串珠数(个/米)<br />Bead/Meter</th>
                    <th className="p-4">固定方式<br />Fastening</th>
                    <th className="p-4">切割对象<br />Application</th>
                    <th className="p-4">寿命(m²/m)<br />Life</th>
                    <th className="p-4">速度(m²/h)<br />Cutting speed</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {blockWireRows.map((row) => (
                    <tr key={`block-${row[0]}`} className="border-t border-white/5">
                      {row.map((cell, idx) => (
                        <td key={`${row[0]}-${idx}`} className="p-4 whitespace-pre-line">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-1" />
        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "钢筋混凝土绳锯" : "Reinforced Concrete Wire Saw"}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4">产品编号<br />Item No.</th>
                    <th className="p-4">规格<br />Spec.(mm)</th>
                    <th className="p-4">串珠数(个/米)<br />Bead/Meter</th>
                    <th className="p-4">固定方式<br />Fastening</th>
                    <th className="p-4">切割对象<br />Application</th>
                    <th className="p-4">寿命(m²/m)<br />Life</th>
                    <th className="p-4">速度(m²/h)<br />Cutting speed</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {concreteWireRows.map((row) => (
                    <tr key={`concrete-${row[0]}`} className="border-t border-white/5">
                      {row.map((cell, idx) => (
                        <td key={`${row[0]}-${idx}`} className="p-4 whitespace-pre-line">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-slate-400">
        {locale === "zh" ? "想知道更多工具包，请联系我们" : "For more toolkits, please contact us"}
      </div>
    </div>
  );
}
