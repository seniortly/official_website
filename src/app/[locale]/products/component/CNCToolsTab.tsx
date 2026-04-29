import { publicPath } from "@/lib/base-path";
import type { Locale } from "@/lib/site-content";
import { basinFingerBitRows, continuousStubbingWheelRows, standardStubbingWheelRows, vacuumBrazedStubbingWheelRows } from "./specData";

export function CNCToolsTab({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
          <img src={publicPath("/image/第14页-130.PNG")} alt="" className="aspect-[4/3] w-full object-cover" />
        </div>
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
          <img src={publicPath("/image/第14页-132.PNG")} alt="" className="aspect-[4/3] w-full object-cover" />
        </div>
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
          <img src={publicPath("/image/第14页-133.PNG")} alt="" className="aspect-[4/3] w-full object-cover" />
        </div>
      </div>
      <p className="text-center text-sm text-slate-400">
        {locale === "zh"
          ? "可根据客户实际需要定制各种规格和形状。Various spec. and shapes are available upon clients' request"
          : "Various spec. and shapes are available upon clients' request"}
      </p>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
        <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
          <span className="font-bold text-white">
            {locale === "zh" ? "台下盆铣刀规格表 Basin Finger Bit Spec." : "Basin Finger Bit Spec."}
          </span>
          <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-[10px] tracking-widest text-slate-400">
              <tr>
                <th className="p-4" rowSpan={2}>
                  {locale === "zh" ? "形状示意图\nStone profile" : "Stone profile"}
                </th>
                <th className="p-4" rowSpan={2}>
                  {locale === "zh" ? "产品编号\nItem No." : "Item No."}
                </th>
                <th className="p-4 text-center" colSpan={1}>
                  {locale === "zh" ? "外径(D)\nOuter diameter" : "Outer diameter"}
                </th>
                <th className="p-4" rowSpan={2}>
                  {locale === "zh" ? "刀头高度\nSegment height (mm)" : "Segment height (mm)"}
                </th>
                <th className="p-4" rowSpan={2}>
                  {locale === "zh" ? "连接方式\nThread size" : "Thread size"}
                </th>
              </tr>
              <tr>
                <th className="p-4">mm</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {basinFingerBitRows.map((row, idx) => {
                const prev = basinFingerBitRows[idx - 1];
                const showProfile = !prev || prev.profile !== row.profile;
                const profileCount = basinFingerBitRows.filter((r) => r.profile === row.profile).length;
                return (
                  <tr key={row.code} className="border-t border-white/5">
                    {showProfile ? (
                      <td className="p-4" rowSpan={profileCount}>
                        <img src={publicPath(row.profile)} alt="" className="mx-auto h-16 w-auto object-contain" />
                      </td>
                    ) : null}
                    <td className="p-4">{row.code}</td>
                    <td className="p-4">{row.diameter}</td>
                    <td className="p-4">{row.height}</td>
                    {showProfile ? (
                      <td className="p-4" rowSpan={profileCount}>
                        1/2&quot;Gas
                      </td>
                    ) : null}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="border-t border-white/10 p-4 text-center text-sm text-slate-400">
          {locale === "zh"
            ? "可以根据客户需要定制各式形状\nSink profiling finger bits can be customized made."
            : "Sink profiling finger bits can be customized made."}
        </div>

        <div className="mt-8 space-y-8">
          <div className="grid gap-6 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
                <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
                  <span className="font-bold text-white">
                    {locale === "zh" ? "连续式CNC磨铣轮规格表 Continuous Stubbing Wheel Spec." : "Continuous Stubbing Wheel Spec."}
                  </span>
                  <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="text-[10px] tracking-widest text-slate-400">
                      <tr>
                        <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                        <th className="p-4 text-center" colSpan={1}>外径(D)<br />Outer diameter</th>
                        <th className="p-4" rowSpan={2}>刀头高度<br />Segment height<br />(mm)</th>
                        <th className="p-4" rowSpan={2}>孔径<br />Arbor<br />(mm)</th>
                      </tr>
                      <tr>
                        <th className="p-4">mm</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      {continuousStubbingWheelRows.map((row) => (
                        <tr key={row[0]} className="border-t border-white/5">
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
            <aside className="lg:col-span-1">
              <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
                <img src={publicPath("/image/第15页-135.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
              </div>
            </aside>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
                <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
                  <span className="font-bold text-white">
                    {locale === "zh" ? "CNC磨铣轮规格表 Standard Stubbing Wheel Spec." : "Standard Stubbing Wheel Spec."}
                  </span>
                  <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="text-[10px] tracking-widest text-slate-400">
                      <tr>
                        <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                        <th className="p-4 text-center" colSpan={1}>外径(D)<br />Outer diameter</th>
                        <th className="p-4" rowSpan={2}>刀头高度<br />Segment height<br />(mm)</th>
                        <th className="p-4" rowSpan={2}>孔径<br />Arbor<br />(mm)</th>
                      </tr>
                      <tr>
                        <th className="p-4">mm</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      {standardStubbingWheelRows.map((row) => (
                        <tr key={row[0]} className="border-t border-white/5">
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
            <aside className="lg:col-span-1">
              <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
                <img src={publicPath("/image/第15页-136.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
              </div>
            </aside>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
                <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
                  <span className="font-bold text-white">
                    {locale === "zh" ? "钎焊磨铣轮规格表 Vacuum Brazed CNC Stubbing Wheel Spec." : "Vacuum Brazed CNC Stubbing Wheel Spec."}
                  </span>
                  <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="text-[10px] tracking-widest text-slate-400">
                      <tr>
                        <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                        <th className="p-4 text-center" colSpan={1}>外径(D)<br />Outer diameter</th>
                        <th className="p-4" rowSpan={2}>刀头高度<br />Segment height<br />(mm)</th>
                        <th className="p-4" rowSpan={2}>孔径<br />Arbor<br />(mm)</th>
                      </tr>
                      <tr>
                        <th className="p-4">mm</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      {vacuumBrazedStubbingWheelRows.map((row) => (
                        <tr key={row[0]} className="border-t border-white/5">
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
            <aside className="lg:col-span-1">
              <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
                <img src={publicPath("/image/第15页-137.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
              </div>
            </aside>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-slate-400">
        {locale === "zh" ? "想知道更多工具包，请联系我们" : "For more toolkits, please contact us"}
      </div>
    </div>
  );
}
