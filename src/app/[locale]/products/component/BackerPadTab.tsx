import { publicPath } from "@/lib/base-path";
import type { Locale } from "@/lib/site-content";

export function BackerPadTab({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第20页-190.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "软接头" : "Soft Rubber Backer Pad"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "软接头规格表 Soft Rubber Backer Pad Spec." : "Soft Rubber Backer Pad Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径(D)<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>连接方式<br />Thread</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">BUF-03</td>
                    <td className="p-4">3</td>
                    <td className="p-4">80</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={5}>{"M14 M16\n5/8\"-11"}</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">BUF-04</td>
                    <td className="p-4">4</td>
                    <td className="p-4">100</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">BUF-05</td>
                    <td className="p-4">5</td>
                    <td className="p-4">125</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">BUF-06</td>
                    <td className="p-4">6</td>
                    <td className="p-4">150</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">BUF-07</td>
                    <td className="p-4">7</td>
                    <td className="p-4">180</td>
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
            <img src={publicPath("/image/第20页-193.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "超软接头" : "Super Soft Rubber Backer Pad"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "超软接头规格表 Super Soft Rubber Backer Pad Spec." : "Super Soft Rubber Backer Pad Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径(D)<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>连接方式<br />Thread</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">BUSF-04</td>
                    <td className="p-4">4</td>
                    <td className="p-4">100</td>
                    <td className="p-4 whitespace-pre-line">{"M14 M16\n5/8\"-11"}</td>
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
            <img src={publicPath("/image/第20页-191.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "硬接头" : "Rigid Backer Pad"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "塑料接头规格表 Plastic Backer Pad Spec." : "Plastic Backer Pad Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径(D)<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>连接方式<br />Thread</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">BUP-04</td>
                    <td className="p-4">4</td>
                    <td className="p-4">100</td>
                    <td className="p-4 whitespace-pre-line">{"M14 M16\n5/8\"-11"}</td>
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
            <img src={publicPath("/image/第20页-197.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "铝接头" : "Aluminum Backer Pad"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "铝接头规格表 Aluminum Backer Pad Spec." : "Aluminum Backer Pad Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径(D)<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>连接方式<br />Thread</th>
                    <th className="p-4" rowSpan={2}>备注<br />Remark</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4 whitespace-pre-line">{"BUA-03\nBUAC-03"}</td>
                    <td className="p-4">3</td>
                    <td className="p-4">80</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={5}>{"M14 M16\n5/8\"-11"}</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={5}>{locale === "zh" ? "可配铜牙\nItem No. with\"C\" means\ncopper thread" : "Item No. with\"C\" means\ncopper thread"}</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4 whitespace-pre-line">{"BUA-04\nBUAC-04"}</td>
                    <td className="p-4">4</td>
                    <td className="p-4">100</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4 whitespace-pre-line">{"BUA-05\nBUAC-05"}</td>
                    <td className="p-4">5</td>
                    <td className="p-4">125</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4 whitespace-pre-line">{"BUA-06\nBUAC-06"}</td>
                    <td className="p-4">6</td>
                    <td className="p-4">150</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4 whitespace-pre-line">{"BUA-07\nBUAC-07"}</td>
                    <td className="p-4">7</td>
                    <td className="p-4">180</td>
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
            <img src={publicPath("/image/第20页-192.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "彩色铝接头" : "Colored Aluminum Backer Pad"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "彩色铝接头规格表 Colored Aluminum Backer Pad Spec." : "Colored Aluminum Backer Pad Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径(D)<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>连接方式<br />Thread</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">BUACC-04</td>
                    <td className="p-4">4</td>
                    <td className="p-4">100</td>
                    <td className="p-4 whitespace-pre-line">{"M14 M16\n5/8\"-11"}</td>
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
            <img src={publicPath("/image/第20页-195.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "蜗牛锁转换铝接头" : "Snail Lock Aluminum Adapter"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "蜗牛锁转换铝接头 Snail Lock Aluminum Adapter" : "Snail Lock Aluminum Adapter"}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径(D)<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>连接方式<br />Thread</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">SLAA-04</td>
                    <td className="p-4">4</td>
                    <td className="p-4">100</td>
                    <td className="p-4">M14 M16</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">SLAA-05</td>
                    <td className="p-4">5</td>
                    <td className="p-4">125</td>
                    <td className="p-4">M14 M30 5/8&quot;-11</td>
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
