import { publicPath } from "@/lib/base-path";
import type { Locale } from "@/lib/site-content";
import { bigBladeSegmentRows, multiBladeSegmentRows, multiBladeCombination, quarryBladeRows, marbleBladeRows } from "./specData";

export function BigBladeTab({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第9页-78.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <img src={publicPath("/image/第10页-87.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "花岗岩单片锯刀头规格表" : "Segment for Granite Big Single Blade Spec."}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "花岗岩单片锯刀头规格表" : "Segment for Granite Big Single Blade Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径(D)<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>基体厚度<br />Core thickness</th>
                    <th className="p-4" rowSpan={2}>锯齿长度(L)<br />Segment length</th>
                    <th className="p-4" rowSpan={2}>锯齿高度(W)<br />Segment height</th>
                    <th className="p-4" rowSpan={2}>齿数(S)<br />Segment quantity</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {bigBladeSegmentRows.map((row) => (
                    <tr key={`big-${row[0]}`} className="border-t border-white/5">
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
            <img src={publicPath("/image/第9页-77.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "花岗大小组合锯刀头规格表" : "Segment for Multi-Blades Spec."}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "花岗大小组合锯刀头规格表" : "Segment for Multi-Blades Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4" rowSpan={2}>基体厚度<br />Core thickness</th>
                    <th className="p-4" rowSpan={2}>锯齿长度(L)<br />Segment length</th>
                    <th className="p-4" rowSpan={2}>锯齿高度(W)<br />Segment height</th>
                    <th className="p-4" rowSpan={2}>组合方式<br />Combination</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {multiBladeSegmentRows.map((row, rowIdx) => (
                    <tr key={`multi-${row[0]}`} className="border-t border-white/5">
                      {row.map((cell, idx) => (
                        <td key={`${row[0]}-${idx}`} className="p-4 whitespace-pre-line">{cell}</td>
                      ))}
                      {rowIdx === 0 ? (
                        <td rowSpan={multiBladeSegmentRows.length} className="p-4 whitespace-pre-line align-top">
                          {multiBladeCombination}
                        </td>
                      ) : null}
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
            <img src={publicPath("/image/第10页-84.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "矿山锯刀头规格表" : "Segment for Quarry Blade Spec."}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "矿山锯刀头规格表" : "Segment for Quarry Blade Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4">产品编号<br />Item No.</th>
                    <th className="p-4">直径<br />Diameter</th>
                    <th className="p-4">基体厚度<br />Core thickness</th>
                    <th className="p-4">锯齿长度(L)<br />Segment length</th>
                    <th className="p-4">锯齿厚度(T)<br />Segment thickness</th>
                    <th className="p-4">锯齿高度(W)<br />Segment height</th>
                    <th className="p-4">齿数(S)<br />Segment quantity</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {quarryBladeRows.map((row) => (
                    <tr key={`quarry-${row[0]}`} className="border-t border-white/5">
                      {row.map((cell, idx) => (
                        <td key={`${row[0]}-${idx}`} className="p-4">{cell}</td>
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
            <img src={publicPath("/image/第10页-87.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "大理石单片锯刀头规格表" : "Segment for Marble Big Single Blade Spec."}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "大理石单片锯刀头规格表" : "Segment for Marble Big Single Blade Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径(D)<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>基体厚度<br />Core thickness</th>
                    <th className="p-4" rowSpan={2}>锯齿长度(L)<br />Segment length</th>
                    <th className="p-4" rowSpan={2}>锯齿高度(W)<br />Segment height</th>
                    <th className="p-4" rowSpan={2}>齿数(S)<br />Segment quantity</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {marbleBladeRows.map((row) => (
                    <tr key={`marble-${row[0]}`} className="border-t border-white/5">
                      {row.map((cell, idx) => (
                        <td key={`${row[0]}-${idx}`} className="p-4">{cell}</td>
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
