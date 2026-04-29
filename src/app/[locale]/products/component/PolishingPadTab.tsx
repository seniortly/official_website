import { publicPath } from "@/lib/base-path";
import type { Locale } from "@/lib/site-content";

export function PolishingPadTab({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第19页-185.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "软磨片" : "Polishing Pad"}
            </h3>
            <p className="text-sm text-slate-400">
              {locale === "zh"
                ? "主要用于异形石材的加工、抛光研磨顺序：由粗号到细号，最后抛光"
                : "Mainly used to polish irregular stone shapes from coarse to fine and buff finally"}
            </p>
            <div>
              <h4 className="text-sm font-bold text-blue-300">
                {locale === "zh" ? "适用机器 Applicable Machine" : "Applicable Machine"}
              </h4>
              <p className="mt-1 text-sm text-slate-300">
                {locale === "zh" ? "手提式气动磨机 Portable Air polisher" : "Portable Air polisher"}
              </p>
              <p className="text-sm text-slate-300">
                {locale === "zh" ? "手提式电动磨机 Portable Electric polisher" : "Portable Electric polisher"}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-blue-300">
                {locale === "zh" ? "类型 Type" : "Type"}
              </h4>
              <p className="mt-1 text-sm text-slate-300">
                {locale === "zh" ? "干磨片 Dry polishing pad" : "Dry polishing pad"}
              </p>
              <p className="text-sm text-slate-300">
                {locale === "zh" ? "湿磨片 Wet polishing pad" : "Wet polishing pad"}
              </p>
              <p className="text-sm text-slate-300">
                {locale === "zh" ? "快速片 Fast polishing pad" : "Fast polishing pad"}
              </p>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "软磨片 Polishing Pad" : "Polishing Pad"}
              </span>
            </div>
            <div className="p-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <p className="text-sm text-slate-300">
                    {locale === "zh"
                      ? "4步干湿两用磨片，3种花纹，适用于花岗岩、大理石、人造石英石、玉石等，上光迅速且耐用。"
                      : "4-steps Dry&Wet use polishing Pad, available in 3 patterns, suitable for granite, marble, quartz, jade, and more. It provides fast and durable polishing with a glossy finish."}
                  </p>
                  <div>
                    <h4 className="text-sm font-bold text-blue-300">
                      {locale === "zh" ? "适用机器 Applicable Machine" : "Applicable Machine"}
                    </h4>
                    <p className="mt-1 text-sm text-slate-300">
                      {locale === "zh" ? "手提式气动磨机 Portable Air polisher" : "Portable Air polisher"}
                    </p>
                    <p className="text-sm text-slate-300">
                      {locale === "zh" ? "手提式电动磨机 Portable Electric polisher" : "Portable Electric polisher"}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-blue-300">
                      {locale === "zh" ? "类型 Type" : "Type"}
                    </h4>
                    <p className="mt-1 text-sm text-slate-300">
                      {locale === "zh" ? "干磨片 Dry polishing pad" : "Dry polishing pad"}
                    </p>
                    <p className="text-sm text-slate-300">
                      {locale === "zh" ? "湿磨片 Wet polishing pad" : "Wet polishing pad"}
                    </p>
                    <p className="text-sm text-slate-300">
                      {locale === "zh" ? "快速片 Fast polishing pad" : "Fast polishing pad"}
                    </p>
                  </div>
                </div>
                <div>
                  <img src={publicPath("/image/第19页-185.PNG")} alt="" className="w-full rounded object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第19页-184.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "高档三道干湿两用软磨片" : "Three-Step White Dry&Wet Polishing Pad"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "高档三道干湿两用软磨片规格表" : "Three-Step White Dry&Wet Polishing Pad Spec."}
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
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">TWDP04</td>
                    <td className="p-4">4</td>
                    <td className="p-4">100</td>
                    <td className="p-4">1# 2# 3#</td>
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
            <img src={publicPath("/image/第19页-183.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "四道干湿磨片" : "Four-Step Dry&Wet Polishing Pad"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "四道干湿磨片规格表" : "Four-Step Dry&Wet Polishing Pad Spec."}
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
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">DDP04</td>
                    <td className="p-4">4</td>
                    <td className="p-4">100</td>
                    <td className="p-4">1# 2# 3# 4#</td>
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
            <img src={publicPath("/image/第19页-182.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "白色软磨片" : "White Polishing Pad"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "白色软磨片规格表" : "White Polishing Pad Spec."}
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
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">WWP03</td>
                    <td className="p-4">3</td>
                    <td className="p-4">80</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={5}>{"50# 100# 200# 400#\n800# 1500# 3000# buff"}</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">WWP04</td>
                    <td className="p-4">4</td>
                    <td className="p-4">100</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">WWP05</td>
                    <td className="p-4">5</td>
                    <td className="p-4">125</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">WWP06</td>
                    <td className="p-4">6</td>
                    <td className="p-4">150</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">WWP08</td>
                    <td className="p-4">8</td>
                    <td className="p-4">200</td>
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
            <img src={publicPath("/image/第19页-181.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "水磨片" : "Wet Polishing Pad"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "水磨片规格表" : "Wet Polishing Pad Spec."}
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
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">WGP03</td>
                    <td className="p-4">3</td>
                    <td className="p-4">80</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={5}>{"50# 100# 200# 400#\n800# 1500# 3000# buff"}</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">WGP04</td>
                    <td className="p-4">4</td>
                    <td className="p-4">100</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">WGP05</td>
                    <td className="p-4">5</td>
                    <td className="p-4">125</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">WGP06</td>
                    <td className="p-4">6</td>
                    <td className="p-4">150</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">WGP08</td>
                    <td className="p-4">8</td>
                    <td className="p-4">200</td>
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
