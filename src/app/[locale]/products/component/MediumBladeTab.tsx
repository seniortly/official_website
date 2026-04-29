import { publicPath } from "@/lib/base-path";
import type { Locale } from "@/lib/site-content";
import { arrowSpecRows, orderedSpecRows, deepUSpecRows, specRows } from "./specData";

export function MediumBladeTab({ locale }: { locale: Locale }) {
  return (
    <>
      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="space-y-5 lg:col-span-1">
          <div className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <div className="relative">
              <img src={publicPath("/image/第5页-38.PNG")} alt="" className="aspect-square w-full rounded object-cover" />
              <div className="absolute -left-2 -top-2 h-16 w-16 overflow-hidden rounded-full">
                <img src={publicPath("/image/第5页-40.PNG")} alt="" className="h-full w-full object-cover" />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">
              {locale === "zh" ? "V型有序排列花岗锯片规格表" : "Arix Granite Blade with V Segment Spec."}
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              {locale === "zh" ? "适合切割：花岗石、人造石英石、天然石英石" : "Great for granite, quartz and quartzite"}
            </p>
          </div>
        </aside>

        <div className="space-y-6 lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">Arix Granite Blade Spec.</span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径(D)<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>孔径(H)<br />Bore</th>
                    <th className="p-4" rowSpan={2}>锯齿长度(L)<br />Segment length</th>
                    <th className="p-4" rowSpan={2}>锯齿厚度(T)<br />Segment thickness</th>
                    <th className="p-4" rowSpan={2}>锯齿高度(W)<br />Segment height</th>
                    <th className="p-4" rowSpan={2}>齿数(S)<br />Segment quantity</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {specRows.map((row) => (
                    <tr key={row[0]} className="border-t border-white/5">
                      {row.map((cell) => (
                        <td key={cell} className="p-4">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-blue-500/60 bg-[rgba(10,22,56,0.66)] px-4 py-3">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
                {locale === "zh" ? "核心优势" : "Key Advantages"}
              </span>
              <span>- {locale === "zh" ? "台锯" : "Table Saw"}</span>
              <span>- {locale === "zh" ? "框架锯" : "Frame Saw"}</span>
              <span>- {locale === "zh" ? "高频焊" : "High-Frequency Welded"}</span>
              <span>- {locale === "zh" ? "湿切" : "Wet Cutting"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第5页-39.PNG")} alt="" className="aspect-square w-full rounded object-cover" />
            <h3 className="mt-4 text-lg font-bold text-white">
              {locale === "zh" ? "箭头型有序排列花岗锯片规格表" : "Arix Granite Blade with Arrow Segment Spec."}
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              {locale === "zh" ? "适合切割：花岗石、人造石英石" : "Great for granite and quartz"}
            </p>
          </div>
        </aside>

        <div className="space-y-6 lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">Arix Granite Blade with Arrow Segment Spec.</span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径(D)<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>孔径(H)<br />Bore</th>
                    <th className="p-4" rowSpan={2}>锯齿长度(L)<br />Segment length</th>
                    <th className="p-4" rowSpan={2}>锯齿厚度(T)<br />Segment thickness</th>
                    <th className="p-4" rowSpan={2}>锯齿高度(W)<br />Segment height</th>
                    <th className="p-4" rowSpan={2}>齿数(S)<br />Segment quantity</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {arrowSpecRows.map((row) => (
                    <tr key={`arrow-${row[0]}`} className="border-t border-white/5">
                      {row.map((cell) => (
                        <td key={`${row[0]}-${cell}`} className="p-4">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-blue-500/60 bg-[rgba(10,22,56,0.66)] px-4 py-3">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
                {locale === "zh" ? "核心优势" : "Key Advantages"}
              </span>
              <span>- {locale === "zh" ? "台锯" : "Table Saw"}</span>
              <span>- {locale === "zh" ? "框架锯" : "Frame Saw"}</span>
              <span>- {locale === "zh" ? "高频焊" : "High-Frequency Welded"}</span>
              <span>- {locale === "zh" ? "湿切" : "Wet Cutting"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-start">
          <div className="w-[56%] overflow-hidden rounded-xl">
            <img src={publicPath("/image/huagangyan.png")} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="-ml-10 mt-32 w-[56%] overflow-hidden rounded-xl">
            <img src={publicPath("/image/paixvjvpian.png")} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第5页-38.PNG")} alt="" className="aspect-square w-full rounded object-cover" />
            <h3 className="mt-4 text-lg font-bold text-white">
              {locale === "zh" ? "有序排列花岗锯片规格表" : "Arix Granite Blade Spec."}
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              {locale === "zh"
                ? "特点：刀头上的金刚石按一定的规律分布，最大限度的利用金刚石，切削效果更好，寿命更长。"
                : "Advantage: Arix diamond on segments can make full use of diamond, to have better performance and longer life."}
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              {locale === "zh" ? "适合切割：花岗石、大理石、人造石英石、天然石英石" : "Great for granite, marble quartz and quartzite"}
            </p>
          </div>
        </aside>

        <div className="space-y-6 lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">Arix Granite Blade Spec.</span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径(D)<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>孔径(H)<br />Bore</th>
                    <th className="p-4" rowSpan={2}>锯齿长度(L)<br />Segment length</th>
                    <th className="p-4" rowSpan={2}>锯齿厚度(T)<br />Segment thickness</th>
                    <th className="p-4" rowSpan={2}>锯齿高度(W)<br />Segment height</th>
                    <th className="p-4" rowSpan={2}>齿数(S)<br />Segment quantity</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {orderedSpecRows.map((row) => (
                    <tr key={`ordered-${row[0]}`} className="border-t border-white/5">
                      {row.map((cell) => (
                        <td key={`${row[0]}-${cell}`} className="p-4">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-blue-500/60 bg-[rgba(10,22,56,0.66)] px-4 py-3">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
                {locale === "zh" ? "核心优势" : "Key Advantages"}
              </span>
              <span>- {locale === "zh" ? "台锯" : "Table Saw"}</span>
              <span>- {locale === "zh" ? "框架锯" : "Frame Saw"}</span>
              <span>- {locale === "zh" ? "高频焊" : "High-Frequency Welded"}</span>
              <span>- {locale === "zh" ? "湿切" : "Wet Cutting"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第5页-41.PNG")} alt="" className="aspect-square w-full rounded object-cover" />
            <h3 className="mt-4 text-lg font-bold text-white">
              {locale === "zh" ? "深U型有序排列花岗锯片规格表" : "Arix Granite Blade with U Segment Spec."}
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              {locale === "zh" ? "适合切割：花岗石、人造石英石、天然石英石" : "Great for granite, quartz and quartzite"}
            </p>
          </div>
        </aside>

        <div className="space-y-6 lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">Arix Granite Blade with U Segment Spec.</span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径(D)<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>孔径(H)<br />Bore</th>
                    <th className="p-4" rowSpan={2}>锯齿长度(L)<br />Segment length</th>
                    <th className="p-4" rowSpan={2}>锯齿厚度(T)<br />Segment thickness</th>
                    <th className="p-4" rowSpan={2}>锯齿高度(W)<br />Segment height</th>
                    <th className="p-4" rowSpan={2}>齿数(S)<br />Segment quantity</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {deepUSpecRows.map((row) => (
                    <tr key={`deep-u-${row[0]}`} className="border-t border-white/5">
                      {row.map((cell) => (
                        <td key={`${row[0]}-${cell}`} className="p-4">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-blue-500/60 bg-[rgba(10,22,56,0.66)] px-4 py-3">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
                {locale === "zh" ? "核心优势" : "Key Advantages"}
              </span>
              <span>- {locale === "zh" ? "台锯" : "Table Saw"}</span>
              <span>- {locale === "zh" ? "框架锯" : "Frame Saw"}</span>
              <span>- {locale === "zh" ? "高频焊" : "High-Frequency Welded"}</span>
              <span>- {locale === "zh" ? "湿切" : "Wet Cutting"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-slate-400">
        {locale === "zh" ? "想知道更多工具包，请联系我们" : "For more toolkits, please contact us"}
      </div>
    </>
  );
}
