import { publicPath } from "@/lib/base-path";
import type { Locale } from "@/lib/site-content";

export function ConcreteRingSawMachineTab({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第23页-223.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "环锯机" : "Concrete Ring Saw Machine"}
            </h3>
            <p className="text-sm text-slate-400">
              {locale === "zh"
                ? "主要用于混凝土墙体等坚硬材料的切割作业，切割深度可达传统锯片的两倍。"
                : "Mainly used for cutting hard materials such as concrete walls, with cutting depth up to twice that of traditional saw blades."}
            </p>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "环锯机 Concrete Ring Saw Machine" : "Concrete Ring Saw Machine"}
              </span>
            </div>
            <div className="p-6">
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="flex-1 space-y-2">
                  <p className="text-sm text-slate-300">
                    {locale === "zh"
                      ? "环锯机是一种特别的切割工具，主要用于混凝土墙体等坚硬材料的切割作业。环锯的切割深度可以达到传统锯片的两倍。"
                      : "A ring saw machine is a special cutting tool that is primarily used for cutting hard materials such as concrete walls. The cutting depth of a ring saw blade can be twice that of a traditional saw blade."}
                  </p>
                </div>
                <div className="w-full shrink-0 sm:w-64">
                  <div className="overflow-hidden rounded-lg border border-white/10 bg-[rgba(15,23,42,0.58)]">
                    <img src={publicPath("/image/第23页-215.PNG")} alt="" className="aspect-square w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
        <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
          <span className="font-bold text-white">
            {locale === "zh" ? "环锯机规格表 Ring Saw Machine Spec." : "Ring Saw Machine Spec."}
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-[10px] tracking-widest text-slate-400">
              <tr>
                <th className="p-4">产品编号<br />Item No.</th>
                <th className="p-4">空载转速<br />No load speed</th>
                <th className="p-4">负载功率<br />Load power</th>
                <th className="p-4">额定功率<br />No-load speed</th>
                <th className="p-4">切割深度<br />Cutting depth</th>
                <th className="p-4">锯片直径<br />Saw blade diameter</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-t border-white/5">
                <td className="p-4">RSM-M01</td>
                <td className="p-4">1200r/min</td>
                <td className="p-4">5000W</td>
                <td className="p-4">3000W</td>
                <td className="p-4">30cm</td>
                <td className="p-4">410mm</td>
              </tr>
              <tr className="border-t border-white/5">
                <td className="p-4">RSM-M02</td>
                <td className="p-4">1100r/min</td>
                <td className="p-4">6000W</td>
                <td className="p-4">3500W</td>
                <td className="p-4">40cm</td>
                <td className="p-4">550mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
        <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
          <span className="font-bold text-white">
            {locale === "zh" ? "环锯机规格表 Ring Saw Machine Spec." : "Ring Saw Machine Spec."}
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-[10px] tracking-widest text-slate-400">
              <tr>
                <th className="p-4">产品编号<br />Item No.</th>
                <th className="p-4">切割深度<br />Cutting depth</th>
                <th className="p-4">锯片直径<br />Blade diameter</th>
                <th className="p-4">空载转速<br />No-load speed</th>
                <th className="p-4">功率<br />Power</th>
                <th className="p-4">电压频率<br />Voltage frequency</th>
                <th className="p-4">包装尺寸<br />Package size</th>
                <th className="p-4">净重/毛重<br />NW/GW</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-t border-white/5">
                <td className="p-4">RSM-M03</td>
                <td className="p-4">300mm</td>
                <td className="p-4">410mm</td>
                <td className="p-4">2000r/min</td>
                <td className="p-4">8800W</td>
                <td className="p-4">220V</td>
                <td className="p-4">91*29*58CM/1pcs</td>
                <td className="p-4">15.3/17.3KG</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第23页-214.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "环锯（墙锯）" : "Ring Saw Blade"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "环锯（墙锯）规格表 Ring Saw Blade Spec." : "Ring Saw Blade Spec."}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4">产品编号<br />Item No.</th>
                    <th className="p-4">外径(D)<br />Outer diameter</th>
                    <th className="p-4">孔径(H)<br />Bore</th>
                    <th className="p-4">锯齿长度(L)<br />Segment length</th>
                    <th className="p-4">锯齿厚度(T)<br />Segment thickness</th>
                    <th className="p-4">锯齿高度(W)<br />Segment height</th>
                    <th className="p-4">齿数(S)<br />Segment quantity</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">RSB-M-410</td>
                    <td className="p-4">410</td>
                    <td className="p-4">335</td>
                    <td className="p-4">31</td>
                    <td className="p-4">5</td>
                    <td className="p-4">10</td>
                    <td className="p-4">25</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">RSB-M-550</td>
                    <td className="p-4">550</td>
                    <td className="p-4">400</td>
                    <td className="p-4">31</td>
                    <td className="p-4">5</td>
                    <td className="p-4">10</td>
                    <td className="p-4">38</td>
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
            <img src={publicPath("/image/第23页-216.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "环锯（墙锯）" : "Ring Saw Blade"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "环锯（墙锯）规格表 Ring Saw Blade Spec." : "Ring Saw Blade Spec."}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4">产品编号<br />Item No.</th>
                    <th className="p-4">外径(D)<br />Outer diameter</th>
                    <th className="p-4">孔径(H)<br />Bore</th>
                    <th className="p-4">锯齿长度(L)<br />Segment length</th>
                    <th className="p-4">锯齿厚度(T)<br />Segment thickness</th>
                    <th className="p-4">锯齿高度(W)<br />Segment height</th>
                    <th className="p-4">齿数(S)<br />Segment quantity</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">RSB-W-410</td>
                    <td className="p-4">410</td>
                    <td className="p-4">335</td>
                    <td className="p-4">33</td>
                    <td className="p-4">4.3</td>
                    <td className="p-4">10</td>
                    <td className="p-4">25</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">RSB-W-370</td>
                    <td className="p-4">370</td>
                    <td className="p-4">288</td>
                    <td className="p-4">33</td>
                    <td className="p-4">4.3</td>
                    <td className="p-4">10</td>
                    <td className="p-4">22</td>
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
            <img src={publicPath("/image/第23页-213.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "有序环锯（墙锯）" : "Arix Ring Saw Blade"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "有序环锯（墙锯）规格表 Arix Ring Saw Blade Spec." : "Arix Ring Saw Blade Spec."}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4">产品编号<br />Item No.</th>
                    <th className="p-4">外径(D)<br />Outer diameter</th>
                    <th className="p-4">孔径(H)<br />Bore</th>
                    <th className="p-4">锯齿长度(L)<br />Segment length</th>
                    <th className="p-4">锯齿厚度(T)<br />Segment thickness</th>
                    <th className="p-4">锯齿高度(W)<br />Segment height</th>
                    <th className="p-4">齿数(S)<br />Segment quantity</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">ARSB-W-410</td>
                    <td className="p-4">410</td>
                    <td className="p-4">335</td>
                    <td className="p-4">33</td>
                    <td className="p-4">4.3</td>
                    <td className="p-4">10</td>
                    <td className="p-4">25</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">ARSB-W-370</td>
                    <td className="p-4">370</td>
                    <td className="p-4">288</td>
                    <td className="p-4">33</td>
                    <td className="p-4">4.3</td>
                    <td className="p-4">10</td>
                    <td className="p-4">22</td>
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
