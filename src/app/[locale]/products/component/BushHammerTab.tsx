import { publicPath } from "@/lib/base-path";
import type { Locale } from "@/lib/site-content";

export function BushHammerTab({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第21页-201.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "荔枝面磨头" : "Bush Hammer"}
            </h3>
            <p className="text-sm text-slate-400">
              {locale === "zh"
                ? "主要用于打出石材的荔枝面"
                : "Mainly used to make bush hammered finish on stone surface"}
            </p>
            <p className="text-sm text-slate-400">
              {locale === "zh"
                ? "粗面细面任意可调"
                : "All grits are available to meet coarse to fine surface result"}
            </p>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "整体钨钢磨粒 Bush Hammer in Tungsten" : "Bush Hammer in Tungsten"}
              </span>
            </div>
            <div className="p-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <p className="text-sm text-slate-300">
                    {locale === "zh"
                      ? "主要用于打出石材的荔枝面"
                      : "Mainly used to make bush hammered finish on stone surface"}
                  </p>
                  <p className="text-sm text-slate-300">
                    {locale === "zh"
                      ? "粗面细面任意可调"
                      : "All grits are available to meet coarse to fine surface result"}
                  </p>
                </div>
                <div>
                  <img src={publicPath("/image/第21页-201.PNG")} alt="" className="w-full rounded object-cover" />
                  <p className="mt-2 text-center text-xs text-slate-400">
                    {locale === "zh" ? "整体钨钢磨粒 Bush Hammer in Tungsten" : "Bush Hammer in Tungsten"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第21页-200.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "普通荔枝面磨头（手扶磨机用）" : "Bush Hammer"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "普通荔枝面磨头规格表（手扶磨机用） Bush Hammer Spec." : "Bush Hammer Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>磨粒数量<br />Roller quantity</th>
                    <th className="p-4" rowSpan={2}>连接方式<br />Thread size</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">BH-08-04T</td>
                    <td className="p-4">8</td>
                    <td className="p-4">200</td>
                    <td className="p-4">4</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={2}>{locale === "zh" ? "快速接头\nFast connection" : "Fast connection"}</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">BH-10-05T</td>
                    <td className="p-4">10</td>
                    <td className="p-4">250</td>
                    <td className="p-4">5</td>
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
            <img src={publicPath("/image/第21页-202.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "小荔枝面磨头（手持小磨机用）" : "Small Bush Hammer"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "小荔枝面磨头（手持小磨机用）规格表 Small Bush Hammer Spec." : "Small Bush Hammer Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>磨粒数量<br />Roller quantity</th>
                    <th className="p-4" rowSpan={2}>连接方式<br />Thread size</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">BHSM-05-37T</td>
                    <td className="p-4">5</td>
                    <td className="p-4">125</td>
                    <td className="p-4">3</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={2}>{"M14 M16\n5/8\"-11"}</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">BHSM-06-04T</td>
                    <td className="p-4">6</td>
                    <td className="p-4">150</td>
                    <td className="p-4">4</td>
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
            <img src={publicPath("/image/第21页-198.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "下沉式荔枝面磨头" : "Sunk Bush Hammer"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "下沉式荔枝面磨头规格表 Sunk Bush Hammer Spec." : "Sunk Bush Hammer Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>磨粒数量<br />Roller quantity</th>
                    <th className="p-4" rowSpan={2}>连接方式<br />Thread size</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">BHSU-12-06T</td>
                    <td className="p-4">12</td>
                    <td className="p-4">300</td>
                    <td className="p-4">6</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={4}>{locale === "zh" ? "根据机器情况而定\ndepending on\nthe machine" : "depending on\nthe machine"}</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">BHSU-14-08T</td>
                    <td className="p-4">14</td>
                    <td className="p-4">350</td>
                    <td className="p-4">8</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">BHSU-16-10T</td>
                    <td className="p-4">16</td>
                    <td className="p-4">400</td>
                    <td className="p-4">10</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">BHSU-18-12T</td>
                    <td className="p-4">18</td>
                    <td className="p-4">450</td>
                    <td className="p-4">12</td>
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
            <img src={publicPath("/image/第21页-199.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "法兰克福荔枝面磨头" : "Frankfurt Bush Hammer"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "法兰克福荔枝面磨头规格表 Frankfurt Bush Hammer" : "Frankfurt Bush Hammer Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4">产品编号<br />Item No.</th>
                    <th className="p-4">规格<br />Dimension</th>
                    <th className="p-4">磨粒数量<br />Roller quantity</th>
                    <th className="p-4">连接方式<br />Thread size</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">BHFR-02-0S</td>
                    <td className="p-4">φ50×50T×60S</td>
                    <td className="p-4">1</td>
                    <td className="p-4">frankurt type</td>
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
