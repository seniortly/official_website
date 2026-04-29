import { publicPath } from "@/lib/base-path";
import type { Locale } from "@/lib/site-content";

export function CoreDrillTab({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第21页-203.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "PC钻管" : "PC Core Drill"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "PC钻管规格表 PC Core Drill Spec." : "PC Core Drill Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>长度<br />Length</th>
                    <th className="p-4" rowSpan={2}>用途<br />Application</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDPC-016</td>
                    <td className="p-4">0.16</td>
                    <td className="p-4">4</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={7}>{"125/117"}</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={7}>{locale === "zh" ? "主要用于花岗石、陶瓷、微晶石、石英石背面45°斜钻和侧面的直钻\nMainly used for 45° angle drill and straight drill on granite, ceramics, crystallized stone and quartz." : "Mainly used for 45° angle drill and straight drill on granite, ceramics, crystallized stone and quartz."}</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDPC-020</td>
                    <td className="p-4">0.20</td>
                    <td className="p-4">5</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDPC-024</td>
                    <td className="p-4">0.24</td>
                    <td className="p-4">6</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDPC-028</td>
                    <td className="p-4">0.28</td>
                    <td className="p-4">7</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDPC-032</td>
                    <td className="p-4">0.32</td>
                    <td className="p-4">8</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDPC-036</td>
                    <td className="p-4">0.36</td>
                    <td className="p-4">9</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDPC-040</td>
                    <td className="p-4">0.40</td>
                    <td className="p-4">10</td>
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
            <img src={publicPath("/image/第21页-204.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "扩孔钻" : "Anchor Bit"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "扩孔钻规格表 Anchor Bit Spec." : "Anchor Bit Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4">产品编号<br />Item No.</th>
                    <th className="p-4">类型<br />Type</th>
                    <th className="p-4">规格（D）<br />Dimension</th>
                    <th className="p-4">用途<br />Application</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">ABS-035</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={4}>{locale === "zh" ? "单层\nSingle Layer" : "Single Layer"}</td>
                    <td className="p-4">φ9 × 45L × M14</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={4}>{locale === "zh" ? "用于石材背栓孔的钻、扩孔\nMainly used for drilling and reaming back-bolt holes on the stone." : "Mainly used for drilling and reaming back-bolt holes on the stone."}</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">ABS-043</td>
                    <td className="p-4">φ11 × 45L × M14</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">ABS-041</td>
                    <td className="p-4">φ10.5 × 48L × M14</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">ABS-049</td>
                    <td className="p-4">φ12.5 × 48L × M14</td>
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
            <img src={publicPath("/image/第22页-208.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <img src={publicPath("/image/第22页-209.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "花岗岩钻管" : "Granite Core Drill"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "花岗岩钻管规格表 Granite Core Drill Spec." : "Granite Core Drill Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径(D)<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>锯齿厚度(T)<br />Segment thickness (mm)</th>
                    <th className="p-4" rowSpan={2}>锯齿高度(W)<br />Segment height(mm)</th>
                    <th className="p-4" rowSpan={2}>长度<br />Length (mm)</th>
                    <th className="p-4" rowSpan={2}>连接方式<br />Thread size</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">GDR-024</td>
                    <td className="p-4">0.24</td>
                    <td className="p-4">6</td>
                    <td className="p-4" rowSpan={4}></td>
                    <td className="p-4" rowSpan={4}>10</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={11}>{"85/100"}</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={4}>{"φ 10\nM14\n5/8\"-11\n1/2\"G"}</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">GDR-032</td>
                    <td className="p-4">0.32</td>
                    <td className="p-4">8</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">GDR-040</td>
                    <td className="p-4">0.40</td>
                    <td className="p-4">10</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">GDR-048</td>
                    <td className="p-4">0.48</td>
                    <td className="p-4">12</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">GDR-080</td>
                    <td className="p-4">0.80</td>
                    <td className="p-4">20</td>
                    <td className="p-4" rowSpan={7}>2.2/3.5</td>
                    <td className="p-4" rowSpan={5}>10</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={7}>{"φ 12\nM14\n5/8\"-11\n1/2\"G"}</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">GDR-100</td>
                    <td className="p-4">1.00</td>
                    <td className="p-4">25</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">GDR-120</td>
                    <td className="p-4">1.20</td>
                    <td className="p-4">30</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">GDR-130</td>
                    <td className="p-4">1.30</td>
                    <td className="p-4">32</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">GDR-140</td>
                    <td className="p-4">1.40</td>
                    <td className="p-4">35</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">GDR-150</td>
                    <td className="p-4">1.50</td>
                    <td className="p-4">38</td>
                    <td className="p-4" rowSpan={2}>8</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">GDR-160</td>
                    <td className="p-4">1.60</td>
                    <td className="p-4">40</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">GDR-200</td>
                    <td className="p-4">2.00</td>
                    <td className="p-4">50</td>
                    <td className="p-4">2.2/3.5</td>
                    <td className="p-4">8</td>
                    <td className="p-4">85/100</td>
                    <td className="p-4 whitespace-pre-line">{"φ 12\nM14\n5/8\"-11\n1/2\"G"}</td>
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
            <img src={publicPath("/image/第22页-207.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "陶瓷钻管" : "Ceramic Core Drill"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "陶瓷钻管规格表 Ceramic Core Drill Spec." : "Ceramic Core Drill Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径(D)<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>锯齿厚度(T)<br />Segment thickness (mm)</th>
                    <th className="p-4" rowSpan={2}>锯齿高度(W)<br />Segment height(mm)</th>
                    <th className="p-4" rowSpan={2}>长度<br />Length (mm)</th>
                    <th className="p-4" rowSpan={2}>连接方式<br />Thread size</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDR-080</td>
                    <td className="p-4">0.80</td>
                    <td className="p-4">20</td>
                    <td className="p-4" rowSpan={7}>2.2</td>
                    <td className="p-4" rowSpan={11}>10</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={11}>{"85/100"}</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={11}>{"φ 12\nM14\n5/8\"-11\n1/2\"G"}</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDR-100</td>
                    <td className="p-4">1.00</td>
                    <td className="p-4">25</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDR-120</td>
                    <td className="p-4">1.20</td>
                    <td className="p-4">30</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDR-130</td>
                    <td className="p-4">1.30</td>
                    <td className="p-4">32</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDR-140</td>
                    <td className="p-4">1.40</td>
                    <td className="p-4">35</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDR-150</td>
                    <td className="p-4">1.50</td>
                    <td className="p-4">38</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDR-160</td>
                    <td className="p-4">1.60</td>
                    <td className="p-4">40</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDR-180</td>
                    <td className="p-4">1.80</td>
                    <td className="p-4">45</td>
                    <td className="p-4" rowSpan={4}>2.6</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDR-200</td>
                    <td className="p-4">2.00</td>
                    <td className="p-4">50</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDR-240</td>
                    <td className="p-4">2.40</td>
                    <td className="p-4">60</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDR-300</td>
                    <td className="p-4">3.00</td>
                    <td className="p-4">75</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDR-400</td>
                    <td className="p-4">4.00</td>
                    <td className="p-4">100</td>
                    <td className="p-4">2.6</td>
                    <td className="p-4">10</td>
                    <td className="p-4">85/100</td>
                    <td className="p-4 whitespace-pre-line">{"φ 12\nM14\n5/8\"-11\n1/2\"G"}</td>
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
            <img src={publicPath("/image/第22页-206.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "玻璃钻管" : "Glass Core Drill"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "玻璃钻管规格表 Glass Core Drill Spec." : "Glass Core Drill Spec."}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4" rowSpan={2}>产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>外径(D)<br />Outer diameter</th>
                    <th className="p-4" rowSpan={2}>锯齿厚度(T)<br />Segment thickness (mm)</th>
                    <th className="p-4" rowSpan={2}>锯齿高度(W)<br />Segment height(mm)</th>
                    <th className="p-4" rowSpan={2}>长度<br />Length (mm)</th>
                    <th className="p-4" rowSpan={2}>连接方式<br />Thread size</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDG-080</td>
                    <td className="p-4">0.80</td>
                    <td className="p-4">20</td>
                    <td className="p-4" rowSpan={7}>1.0</td>
                    <td className="p-4" rowSpan={7}>8</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={7}>{"68"}</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={7}>{"φ 12\nM14\n5/8\"-11\n1/2\"G"}</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDG-100</td>
                    <td className="p-4">1.00</td>
                    <td className="p-4">25</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDG-120</td>
                    <td className="p-4">1.20</td>
                    <td className="p-4">30</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDG-130</td>
                    <td className="p-4">1.30</td>
                    <td className="p-4">32</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDG-140</td>
                    <td className="p-4">1.40</td>
                    <td className="p-4">35</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDG-150</td>
                    <td className="p-4">1.50</td>
                    <td className="p-4">38</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDG-160</td>
                    <td className="p-4">1.60</td>
                    <td className="p-4">40</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CDG-200</td>
                    <td className="p-4">2.00</td>
                    <td className="p-4">50</td>
                    <td className="p-4">1.0</td>
                    <td className="p-4">8</td>
                    <td className="p-4">68</td>
                    <td className="p-4 whitespace-pre-line">{"φ 12\nM14\n5/8\"-11\n1/2\"G"}</td>
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
