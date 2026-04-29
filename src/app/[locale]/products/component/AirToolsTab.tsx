import { publicPath } from "@/lib/base-path";
import type { Locale } from "@/lib/site-content";

export function AirToolsTab({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第25页-242.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "后排气" : "Rear Exhaust"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "后排气 Rear Exhaust" : "Rear Exhaust"}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4">产品编号<br />Item No.</th>
                    <th className="p-4">连接方式<br />Thread</th>
                    <th className="p-4">参数<br />Parameters</th>
                    <th className="p-4">备注<br />Remark</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4" rowSpan={3}>ELA-601-01<br />ELA-601-01C<br />ELA-601-01L<br />ELA-601-01CL</td>
                    <td className="p-4">5/8"-11</td>
                    <td className="p-4">
                      耗气量Air Consumption: 16cfm(0.45m³/min)<br />
                      气压Air Pressure: 90Psi(0.62MPa)
                    </td>
                    <td className="p-4" rowSpan={3}>
                      {locale === "zh" ? "型号带C表示配C型把手" : "Model with C means C-shaped handle is assembled"}<br />
                      {locale === "zh" ? "型号带L表示配安全开关" : "Model with L means safety switch is assembled"}
                    </td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">M14</td>
                    <td className="p-4">
                      自由转速Variable Speed: 0 to 5500RPM<br />
                      主轴螺纹Shaft Thread: 5/8"-11 ; M14 ; M16<br />
                      进气口Air Inlet: 1/4" Npt
                    </td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">M16</td>
                    <td className="p-4">
                      最大垫片直径Max.Pad Diameter: 5"<br />
                      重量Weight: 2.5kg
                    </td>
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
            <img src={publicPath("/image/第25页-241.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "侧排气" : "Side Exhaust"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "侧排气 Side Exhaust" : "Side Exhaust"}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4">产品编号<br />Item No.</th>
                    <th className="p-4">连接方式<br />Thread</th>
                    <th className="p-4">参数<br />Parameters</th>
                    <th className="p-4">备注<br />Remark</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4" rowSpan={3}>ELA-602-01</td>
                    <td className="p-4">5/8"-11</td>
                    <td className="p-4">
                      耗气量Air Consumption: 16cfm(0.45m³/min)<br />
                      气压Air Pressure: 90Psi(0.62MPa)
                    </td>
                    <td className="p-4" rowSpan={3}>
                      {locale === "zh" ? "型号带C表示配C型把手" : "Model with C means C-shaped handle is assembled"}<br />
                      {locale === "zh" ? "型号带L表示配安全开关" : "Model with L means safety switch is assembled"}
                    </td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">M14</td>
                    <td className="p-4">
                      自由转速Variable Speed: 0 to 4500RPM<br />
                      主轴螺纹Shaft Thread: 5/8"-11 ; M14 ; M16<br />
                      进气口Air Inlet: 1/4" Npt
                    </td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">M16</td>
                    <td className="p-4">
                      最大垫片直径Max.Pad Diameter: 5"<br />
                      重量Weight: 1.8kg
                    </td>
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
            <img src={publicPath("/image/第27页-249.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "气动开槽机" : "Air Wet Fluting Machine"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "气动开槽机 Air Wet Fluting Machine" : "Air Wet Fluting Machine"}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4">产品编号<br />Item No.</th>
                    <th className="p-4">参数<br />Parameters</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4" rowSpan={9}>ELA-2208</td>
                    <td className="p-4">耗气量 Air Consumption: 16 cfm(0.45m³/min)</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">气压 Air Pressure: 90 Psi(0.62MPa)</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">自由转速 Variable Speed: 0-4000RPM</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">进气口 Air Inlet: PTI/4"-19</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">输出功率 Output: 360W</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">长度 Length: 14"</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">空压机要求 Air Compressor Required: 7.5 KW</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">磨轮直径 Grinding Wheel Diameter: 4"</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">重量 Weight: 2.0 kg</td>
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
            <img src={publicPath("/image/第27页-255.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "石材倒角磨边辅助座" : "Beveling Auxiliary Base"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "石材倒角磨边辅助座 Beveling Auxiliary Base" : "Beveling Auxiliary Base"}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4">倒角角度<br />Beveling angle</th>
                    <th className="p-4">倒角深度<br />Beveling depth</th>
                    <th className="p-4">最大磨片直径<br />Max.Pad size</th>
                    <th className="p-4">毛重<br />GW</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">15°-45°</td>
                    <td className="p-4">0.1-10mm</td>
                    <td className="p-4">4"(100mm)</td>
                    <td className="p-4">2.2kg</td>
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
            <img src={publicPath("/image/第27页-252.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "45度夹具" : "45 Degree Mitre Clamp"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "45度夹具 45 Degree Mitre Clamp" : "45 Degree Mitre Clamp"}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4">外形尺寸<br />Dimension</th>
                    <th className="p-4">所夹持最大厚度<br />Height</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">300x200x60mm</td>
                    <td className="p-4">Maximum 100mm slabs</td>
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
