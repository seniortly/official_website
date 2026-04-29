import { publicPath } from "@/lib/base-path";
import type { Locale } from "@/lib/site-content";

export function ConcreteSawBladeTab({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第24页-233.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "混凝土锯片" : "Concrete Saw Blade"}
            </h3>
            <p className="text-sm text-slate-400">
              {locale === "zh"
                ? "采用先进有序排列技术，可高效切割混凝土中的钢筋，最大可切割10mm钢筋。"
                : "Made by advanced diamond layering technology, can cut the max. 10mm rebar in concrete easily."}
            </p>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "混凝土锯片 Concrete Saw Blade" : "Concrete Saw Blade"}
              </span>
            </div>
            <div className="p-6">
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="flex-1 space-y-2">
                  <p className="text-sm text-slate-300">
                    {locale === "zh"
                      ? "采用现今市场上最先进的有序排列技术生产的混凝土锯片，能有效地切割混凝土里面的钢筋，最大可切割10mm的钢筋。有效率高，寿命长的特点。"
                      : "The arix segments on this concrete blade is made by the most advanced diamond layering technology, can cut the max. 10mm rebar in concrete easily. Very efficient and durable."}
                  </p>
                </div>
                <div className="w-full shrink-0 sm:w-64">
                  <div className="overflow-hidden rounded-lg border border-white/10 bg-[rgba(15,23,42,0.58)]">
                    <img src={publicPath("/image/第24页-233.PNG")} alt="" className="aspect-square w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第24页-227.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "有序排列平齿（墙锯）" : "Laser-welding Arix Wall Blade"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "有序排列平齿（墙锯）规格表 Laser-welding Arix Wall Blade Spec." : "Laser-welding Arix Wall Blade Spec."}
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
                    <td className="p-4">LWAWB-300</td>
                    <td className="p-4">300</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.2</td>
                    <td className="p-4">12</td>
                    <td className="p-4">21</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">LWAWB-350</td>
                    <td className="p-4">350</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.2</td>
                    <td className="p-4">12</td>
                    <td className="p-4">24</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">LWAWB-400</td>
                    <td className="p-4">400</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.6</td>
                    <td className="p-4">12</td>
                    <td className="p-4">28</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">LWAWB-450</td>
                    <td className="p-4">450</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.8</td>
                    <td className="p-4">12</td>
                    <td className="p-4">32</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">LWAWB-500</td>
                    <td className="p-4">500</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.8</td>
                    <td className="p-4">12</td>
                    <td className="p-4">35</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">LWAWB-550</td>
                    <td className="p-4">550</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">4.5</td>
                    <td className="p-4">12</td>
                    <td className="p-4">38</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">LWAWB-600</td>
                    <td className="p-4">600</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">4.5</td>
                    <td className="p-4">12</td>
                    <td className="p-4">42</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">LWAWB-700</td>
                    <td className="p-4">700</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">5</td>
                    <td className="p-4">12</td>
                    <td className="p-4">48</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">LWAWB-800</td>
                    <td className="p-4">800</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">5</td>
                    <td className="p-4">12</td>
                    <td className="p-4">54</td>
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
            <img src={publicPath("/image/第24页-226.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "有序排列阴阳齿（墙锯）" : "Laser-welding Arix Wall Blade"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "有序排列阴阳齿（墙锯）规格表 Laser-welding Arix Wall Blade Spec." : "Laser-welding Arix Wall Blade Spec."}
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
                    <td className="p-4">S-LWAWB-300</td>
                    <td className="p-4">300</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.2</td>
                    <td className="p-4">12</td>
                    <td className="p-4">21</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">S-LWAWB-350</td>
                    <td className="p-4">350</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.2</td>
                    <td className="p-4">12</td>
                    <td className="p-4">24</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">S-LWAWB-400</td>
                    <td className="p-4">400</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.6</td>
                    <td className="p-4">12</td>
                    <td className="p-4">28</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">S-LWAWB-450</td>
                    <td className="p-4">450</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.8</td>
                    <td className="p-4">12</td>
                    <td className="p-4">32</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">S-LWAWB-500</td>
                    <td className="p-4">500</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.8</td>
                    <td className="p-4">12</td>
                    <td className="p-4">35</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">S-LWAWB-550</td>
                    <td className="p-4">550</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">4.5</td>
                    <td className="p-4">12</td>
                    <td className="p-4">38</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">S-LWAWB-600</td>
                    <td className="p-4">600</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">4.5</td>
                    <td className="p-4">12</td>
                    <td className="p-4">42</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">S-LWAWB-700</td>
                    <td className="p-4">700</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">5</td>
                    <td className="p-4">12</td>
                    <td className="p-4">48</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">S-LWAWB-800</td>
                    <td className="p-4">800</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">5</td>
                    <td className="p-4">12</td>
                    <td className="p-4">54</td>
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
            <img src={publicPath("/image/第24页-230.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "有序排列双U齿（墙锯）" : "Laser-welding Arix Wall Blade"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "有序排列双U齿（墙锯）规格表 Laser-welding Arix Wall Blade Spec." : "Laser-welding Arix Wall Blade Spec."}
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
                    <td className="p-4">2U-LWAWB-300</td>
                    <td className="p-4">300</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.2</td>
                    <td className="p-4">12</td>
                    <td className="p-4">21</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">2U-LWAWB-350</td>
                    <td className="p-4">350</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.2</td>
                    <td className="p-4">12</td>
                    <td className="p-4">24</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">2U-LWAWB-400</td>
                    <td className="p-4">400</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.6</td>
                    <td className="p-4">12</td>
                    <td className="p-4">28</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">2U-LWAWB-450</td>
                    <td className="p-4">450</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.8</td>
                    <td className="p-4">12</td>
                    <td className="p-4">32</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">2U-LWAWB-500</td>
                    <td className="p-4">500</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.8</td>
                    <td className="p-4">12</td>
                    <td className="p-4">35</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">2U-LWAWB-550</td>
                    <td className="p-4">550</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">4.5</td>
                    <td className="p-4">12</td>
                    <td className="p-4">38</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">2U-LWAWB-600</td>
                    <td className="p-4">600</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">4.5</td>
                    <td className="p-4">12</td>
                    <td className="p-4">42</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">2U-LWAWB-700</td>
                    <td className="p-4">700</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">5</td>
                    <td className="p-4">12</td>
                    <td className="p-4">48</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">2U-LWAWB-800</td>
                    <td className="p-4">800</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">5</td>
                    <td className="p-4">12</td>
                    <td className="p-4">54</td>
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
            <img src={publicPath("/image/第24页-232.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "斜波纹齿（墙锯）" : "Laser-welding Wall Blade"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "斜波纹齿（墙锯）规格表 Laser-welding Wall Blade Spec." : "Laser-welding Wall Blade Spec."}
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
                    <td className="p-4">T-LWWB-300</td>
                    <td className="p-4">300</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.2</td>
                    <td className="p-4">12</td>
                    <td className="p-4">21</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">T-LWWB-350</td>
                    <td className="p-4">350</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.2</td>
                    <td className="p-4">12</td>
                    <td className="p-4">24</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">T-LWWB-400</td>
                    <td className="p-4">400</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.6</td>
                    <td className="p-4">12</td>
                    <td className="p-4">28</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">T-LWWB-450</td>
                    <td className="p-4">450</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.8</td>
                    <td className="p-4">12</td>
                    <td className="p-4">32</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">T-LWWB-500</td>
                    <td className="p-4">500</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.8</td>
                    <td className="p-4">12</td>
                    <td className="p-4">35</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">T-LWWB-550</td>
                    <td className="p-4">550</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">4.5</td>
                    <td className="p-4">12</td>
                    <td className="p-4">38</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">T-LWWB-600</td>
                    <td className="p-4">600</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">4.5</td>
                    <td className="p-4">12</td>
                    <td className="p-4">42</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">T-LWWB-700</td>
                    <td className="p-4">700</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">5</td>
                    <td className="p-4">12</td>
                    <td className="p-4">48</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">T-LWWB-800</td>
                    <td className="p-4">800</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">5</td>
                    <td className="p-4">12</td>
                    <td className="p-4">54</td>
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
            <img src={publicPath("/image/第24页-231.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "马路沥青片（带保护齿）" : "Laser-welding Asphalt Road Blade"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "马路沥青片（带保护齿）规格表 Laser-welding Asphalt Road Blade Spec." : "Laser-welding Asphalt Road Blade Spec."}
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
                    <td className="p-4">LWARB-300</td>
                    <td className="p-4">300</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.2</td>
                    <td className="p-4">12</td>
                    <td className="p-4">21</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">LWARB-350</td>
                    <td className="p-4">350</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.2</td>
                    <td className="p-4">12</td>
                    <td className="p-4">24</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">LWARB-400</td>
                    <td className="p-4">400</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.6</td>
                    <td className="p-4">12</td>
                    <td className="p-4">28</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">LWARB-450</td>
                    <td className="p-4">450</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.8</td>
                    <td className="p-4">12</td>
                    <td className="p-4">32</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">LWARB-500</td>
                    <td className="p-4">500</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">3.8</td>
                    <td className="p-4">12</td>
                    <td className="p-4">35</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">LWARB-550</td>
                    <td className="p-4">550</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">4.5</td>
                    <td className="p-4">12</td>
                    <td className="p-4">38</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">LWARB-600</td>
                    <td className="p-4">600</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">4.5</td>
                    <td className="p-4">12</td>
                    <td className="p-4">42</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">LWARB-700</td>
                    <td className="p-4">700</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">5</td>
                    <td className="p-4">12</td>
                    <td className="p-4">48</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">LWARB-800</td>
                    <td className="p-4">800</td>
                    <td className="p-4">25.4</td>
                    <td className="p-4">40</td>
                    <td className="p-4">5</td>
                    <td className="p-4">12</td>
                    <td className="p-4">54</td>
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
