import { publicPath } from "@/lib/base-path";
import type { Locale } from "@/lib/site-content";
import { metalFickertGrindingBlockRows, resinFickertGrindingBlockRows, metalFrankfurtGrindingBlockRows } from "./specData";

export function GrindingBlockTab({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第17页-158.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "磨块" : "Grinding Block"}
            </h3>
            <p className="text-sm text-slate-400">
              {locale === "zh"
                ? "主要用于对大理石、花岗岩进行定厚、粗磨、细磨、精磨和抛光"
                : "Mainly used for calibrating, rough grinding, fine grinding, finish grinding and polishing on marble and granite."}
            </p>
            <div>
              <h4 className="text-sm font-bold text-blue-300">
                {locale === "zh" ? "适用机器 Applicable Machine" : "Applicable Machine"}
              </h4>
              <p className="mt-1 text-sm text-slate-300">
                {locale === "zh" ? "自动连续磨机 Automatic Grinding Machine" : "Automatic Grinding Machine"}
              </p>
              <p className="text-sm text-slate-300">
                {locale === "zh" ? "单头磨机 Single Head Grinding Machine" : "Single Head Grinding Machine"}
              </p>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "磨块 Grinding Block" : "Grinding Block"}
              </span>
            </div>
            <div className="p-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <p className="text-sm text-slate-300">
                    {locale === "zh"
                      ? "主要用于对大理石、花岗岩进行定厚、粗磨、细磨、精磨和抛光"
                      : "Mainly used for calibrating, rough grinding, fine grinding, finish grinding and polishing on marble and granite."}
                  </p>
                  <div>
                    <h4 className="text-sm font-bold text-blue-300">
                      {locale === "zh" ? "适用机器 Applicable Machine" : "Applicable Machine"}
                    </h4>
                    <p className="mt-1 text-sm text-slate-300">
                      {locale === "zh" ? "自动连续磨机 Automatic Grinding Machine" : "Automatic Grinding Machine"}
                    </p>
                    <p className="text-sm text-slate-300">
                      {locale === "zh" ? "单头磨机 Single Head Grinding Machine" : "Single Head Grinding Machine"}
                    </p>
                  </div>
                </div>
                <div>
                  <img src={publicPath("/image/第17页-158.PNG")} alt="" className="w-full rounded object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第17页-159.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "金属布拉磨块" : "Metal Fickert Grinding Block"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "金属布拉磨块规格表" : "Metal Fickert Grinding Block Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={3}>刀头尺寸 Segment size</th>
                    <th className="p-4" rowSpan={2}>粒度<br />Grit</th>
                  </tr>
                  <tr>
                    <th className="p-4">长度 Length(mm)</th>
                    <th className="p-4">宽度 Width(mm)</th>
                    <th className="p-4">厚度 Height(mm)</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {metalFickertGrindingBlockRows.map((row) => (
                    <tr key={row[0]} className="border-t border-white/5">
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
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第17页-160.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "树脂布拉磨块" : "Resin Fickert Grinding Block"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "树脂布拉磨块规格表" : "Resin Fickert Grinding Block Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={3}>刀头尺寸 Segment size</th>
                    <th className="p-4" rowSpan={2}>粒度<br />Grit</th>
                  </tr>
                  <tr>
                    <th className="p-4">长度 Length(mm)</th>
                    <th className="p-4">宽度 Width(mm)</th>
                    <th className="p-4">厚度 Height(mm)</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {resinFickertGrindingBlockRows.map((row) => (
                    <tr key={row[0]} className="border-t border-white/5">
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
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第17页-165.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "法兰克福金属磨块" : "Metal Frankfurt Grinding Block"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "法兰克福金属磨块规格表" : "Metal Frankfurt Grinding Block Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={3}>刀头尺寸 Segment size</th>
                    <th className="p-4" rowSpan={2}>粒度<br />Grit</th>
                  </tr>
                  <tr>
                    <th className="p-4">长度 Length(mm)</th>
                    <th className="p-4">宽度 Width(mm)</th>
                    <th className="p-4">厚度 Height(mm)</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {metalFrankfurtGrindingBlockRows.map((row) => (
                    <tr key={row[0]} className="border-t border-white/5">
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
