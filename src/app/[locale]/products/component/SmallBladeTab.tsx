import { publicPath } from "@/lib/base-path";
import type { Locale } from "@/lib/site-content";
import { smallBladeRows, smallBladeGuRows, smallBladeTsRows, smallBladeMtpRows, smallBladeSbRows } from "./specData";

export function SmallBladeTab({ locale }: { locale: Locale }) {
  return (
    <>
      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="space-y-5 lg:col-span-1">
          <div className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <div className="relative">
              <img src={publicPath("/image/第8页-63.PNG")} alt="" className="aspect-square w-full rounded object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">
              {locale === "zh" ? "薄型小锯片" : "Thin Small Blade"}
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              {locale === "zh" ? "适用于瓷砖、岩板及超薄材料精细加工。" : "For ceramic tile and sintered stone precision processing."}
            </p>
          </div>
        </aside>

        <div className="space-y-6 lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">Turbo Dry Cutting Blade Spec.</span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径(D)<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>锯齿厚度(T)<br />Segment thickness</th>
                    <th className="p-4" rowSpan={2}>锯齿高度(W)<br />Segment height</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {smallBladeRows.map((row) => (
                    <tr key={row[0]} className="border-t border-white/5">
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
              <span>- {locale === "zh" ? "角磨机" : "Angle Grinder"}</span>
              <span>- {locale === "zh" ? "台锯" : "Table Saw"}</span>
              <span>- {locale === "zh" ? "开槽锯" : "Slot Saw"}</span>
              <span>- {locale === "zh" ? "干切" : "Dry Cutting"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第8页-64.PNG")} alt="" className="aspect-square w-full rounded object-cover" />
            <h3 className="mt-4 text-lg font-bold text-white">{locale === "zh" ? "分齿式GU片规格表" : "GU Blade Spec."}</h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
              <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
                <span className="font-bold text-white">{locale === "zh" ? "分齿式GU片规格表" : "GU Blade Spec."}</span>
                <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-[10px] tracking-widest text-slate-400">
                    <tr>
                      <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                      <th className="p-4 text-center" colSpan={2}>外径(D)<br />Outer diameter</th>
                      <th className="p-4" rowSpan={2}>锯齿厚度(T)<br />Segment thickness</th>
                      <th className="p-4" rowSpan={2}>锯齿高度(W)<br />Segment height</th>
                    </tr>
                    <tr>
                      <th className="p-4">Inch</th>
                      <th className="p-4">mm</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    {smallBladeGuRows.map((row) => (
                      <tr key={`gu-${row[0]}`} className="border-t border-white/5">
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
                <span>- {locale === "zh" ? "角磨机" : "Angle Grinder"}</span>
                <span>- {locale === "zh" ? "台锯" : "Table Saw"}</span>
                <span>- {locale === "zh" ? "开槽锯" : "Slot Saw"}</span>
                <span>- {locale === "zh" ? "干切" : "Dry Cutting"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第8页-65.PNG")} alt="" className="aspect-square w-full rounded object-cover" />
            <h3 className="mt-4 text-lg font-bold text-white">
              {locale === "zh" ? "冷压T齿凹形干片规格表" : "Cold-pressed Concave Blade with T Segment Spec."}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "冷压T齿凹形干片规格表" : "Cold-pressed Concave Blade with T Segment Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径(D)<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>锯齿厚度(T)<br />Segment thickness</th>
                    <th className="p-4" rowSpan={2}>锯齿高度(W)<br />Segment height</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {smallBladeTsRows.map((row) => (
                    <tr key={`ts-${row[0]}`} className="border-t border-white/5">
                      {row.map((cell) => (
                        <td key={`${row[0]}-${cell}`} className="p-4">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第8页-66.PNG")} alt="" className="aspect-square w-full rounded object-cover" />
            <h3 className="mt-4 text-lg font-bold text-white">
              {locale === "zh" ? "网格陶瓷波纹片（带加强环）规格表" : "Mesh Turbo Procelain Blade(with reinforced ring) Spec."}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "网格陶瓷波纹片（带加强环）规格表" : "Mesh Turbo Procelain Blade(with reinforced ring) Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径(D)<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>锯齿厚度(T)<br />Segment thickness</th>
                    <th className="p-4" rowSpan={2}>锯齿高度(W)<br />Segment height</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {smallBladeMtpRows.map((row) => (
                    <tr key={`mtp-${row[0]}`} className="border-t border-white/5">
                      {row.map((cell) => (
                        <td key={`${row[0]}-${cell}`} className="p-4">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第8页-69.PNG")} alt="" className="aspect-square w-full rounded object-cover" />
            <h3 className="mt-4 text-lg font-bold text-white">
              {locale === "zh" ? "割槽锯片规格表" : "Slot Blade Spec."}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "割槽锯片规格表" : "Slot Blade Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径(D)<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>锯齿厚度(T)<br />Segment thickness</th>
                    <th className="p-4" rowSpan={2}>锯齿高度(W)<br />Segment height</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {smallBladeSbRows.map((row) => (
                    <tr key={`sb-${row[0]}`} className="border-t border-white/5">
                      {row.map((cell) => (
                        <td key={`${row[0]}-${cell}`} className="p-4">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
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
