import { publicPath } from "@/lib/base-path";
import type { Locale } from "@/lib/site-content";

export function GrindingDiscTab({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第18页-173.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "磨盘" : "Grinding Disc"}
            </h3>
            <p className="text-sm text-slate-400">
              {locale === "zh"
                ? "功能：用于自动磨机对石材的粗磨、细磨、精磨和抛光"
                : "Application: Used to do coarse, medium, fine grinding and polishing on automatic machine"}
            </p>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "磨盘 Grinding Disc" : "Grinding Disc"}
              </span>
            </div>
            <div className="p-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <p className="text-sm text-slate-300">
                    {locale === "zh"
                      ? "功能：用于自动磨机对石材的粗磨、细磨、精磨和抛光"
                      : "Application: Used to do coarse, medium, fine grinding and polishing on automatic machine"}
                  </p>
                </div>
                <div>
                  <img src={publicPath("/image/第18页-173.PNG")} alt="" className="w-full rounded object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第18页-173.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "节块式磨盘（金属磨边轮）" : "Segmented Metal Edge Disc"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "节块式磨盘（金属磨边轮）规格表" : "Segmented Metal Edge Disc Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>粒度<br />Grit</th>
                    <th className="p-4" rowSpan={2}>连接方式<br />Connecting way</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">SDSM-06</td>
                    <td className="p-4">6</td>
                    <td className="p-4">150</td>
                    <td className="p-4">50# / 100# / 200#</td>
                    <td className="p-4 whitespace-pre-line">{locale === "zh" ? "根据机器情况而定" : "Depending on the machine"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第18页-176.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "连续式磨盘（金属磨边轮）" : "Continuous Metal Edge Disc"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "连续式磨盘（金属磨边轮）规格表" : "Continuous Metal Edge Disc Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>粒度<br />Grit</th>
                    <th className="p-4" rowSpan={2}>连接方式<br />Connecting way</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">SDM-04</td>
                    <td className="p-4">4</td>
                    <td className="p-4">100</td>
                    <td className="p-4" rowSpan={3}>50#<br />100#<br />200#</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={3}>{locale === "zh" ? "根据机器情况而定" : "Depending on the machine"}</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">SDM-05</td>
                    <td className="p-4">5</td>
                    <td className="p-4">125</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">SDM-06</td>
                    <td className="p-4">6</td>
                    <td className="p-4">150</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第18页-175.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "树脂磨盘（树脂磨边轮）" : "Resin Edge Disc"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "树脂磨盘（树脂磨边轮）规格表" : "Resin Edge Disc Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>粒度<br />Grit</th>
                    <th className="p-4" rowSpan={2}>连接方式<br />Connecting way</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">SDR-04</td>
                    <td className="p-4">4</td>
                    <td className="p-4">100</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={3}>{"50# 100#\n200# 400#\n600# 800#\n1500# BUFF"}</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={3}>{locale === "zh" ? "根据机器情况而定" : "Depending on the machine"}</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">SDR-05</td>
                    <td className="p-4">5</td>
                    <td className="p-4">125</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">SDR-06</td>
                    <td className="p-4">6</td>
                    <td className="p-4">150</td>
                  </tr>
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
