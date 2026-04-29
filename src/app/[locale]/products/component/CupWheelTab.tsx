import { publicPath } from "@/lib/base-path";
import type { Locale } from "@/lib/site-content";

export function CupWheelTab({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第17页-166.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "磨皿" : "Cup Wheel"}
            </h3>
            <p className="text-sm text-slate-400">
              {locale === "zh"
                ? "主要用于石材边缘、表面曲面的倒角、整平、粗磨、细磨等"
                : "Mainly used for chamfering, beveling and grinding stone edges & surfaces."}
            </p>
            <div>
              <h4 className="text-sm font-bold text-blue-300">
                {locale === "zh" ? "适用机器 Applicable Machine" : "Applicable Machine"}
              </h4>
              <p className="mt-1 text-sm text-slate-300">
                {locale === "zh" ? "手提式磨机 Portable Grinding Machine" : "Portable Grinding Machine"}
              </p>
              <p className="text-sm text-slate-300">
                {locale === "zh" ? "专用翻新设备 Special Retread Equipment" : "Special Retread Equipment"}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-blue-300">
                {locale === "zh" ? "粒度 Grit" : "Grit"}
              </h4>
              <p className="mt-1 text-sm text-slate-300">40#、80#、120#</p>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "磨皿 Cup Wheel" : "Cup Wheel"}
              </span>
            </div>
            <div className="p-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <p className="text-sm text-slate-300">
                    {locale === "zh"
                      ? "主要用于石材边缘、表面曲面的倒角、整平、粗磨、细磨等"
                      : "Mainly used for chamfering, beveling and grinding stone edges & surfaces."}
                  </p>
                  <div>
                    <h4 className="text-sm font-bold text-blue-300">
                      {locale === "zh" ? "适用机器 Applicable Machine" : "Applicable Machine"}
                    </h4>
                    <p className="mt-1 text-sm text-slate-300">
                      {locale === "zh" ? "手提式磨机 Portable Grinding Machine" : "Portable Grinding Machine"}
                    </p>
                    <p className="text-sm text-slate-300">
                      {locale === "zh" ? "专用翻新设备 Special Retread Equipment" : "Special Retread Equipment"}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-blue-300">
                      {locale === "zh" ? "粒度 Grit" : "Grit"}
                    </h4>
                    <p className="mt-1 text-sm text-slate-300">40#、80#、120#</p>
                  </div>
                </div>
                <div>
                  <img src={publicPath("/image/第17页-166.PNG")} alt="" className="w-full rounded object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第17页-161.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "橡胶波纹磨皿" : "Rubber Cup Wheel"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "橡胶波纹磨皿规格表" : "Rubber Cup Wheel Spec."}
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
                    <th className="p-4" rowSpan={2}>粒度<br />Grit</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">RCW-04</td>
                    <td className="p-4">4</td>
                    <td className="p-4">100</td>
                    <td className="p-4">M14, 5/8"-11</td>
                    <td className="p-4 whitespace-pre-line">{locale === "zh" ? "粗 中 细\nC M F" : "C M F"}</td>
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
            <img src={publicPath("/image/第17页-164.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "内四齿树脂磨皿" : "Resin Filled Cup Wheel with Four Segments"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "内四齿树脂磨皿规格表" : "Resin Filled Cup Wheel with Four Segments Spec."}
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
                    <th className="p-4" rowSpan={2}>粒度<br />Grit</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">CWRF-04-4</td>
                    <td className="p-4">4</td>
                    <td className="p-4">100</td>
                    <td className="p-4">M14&nbsp;&nbsp;&nbsp;&nbsp;M16&nbsp;&nbsp;&nbsp;&nbsp;5/8"-11</td>
                    <td className="p-4 whitespace-pre-line">{locale === "zh" ? "粗 中 细\nC M F" : "C M F"}</td>
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
            <img src={publicPath("/image/第17页-163.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "内六齿树脂磨皿" : "Resin Filled Cup Wheel with Six Segments"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "内六齿树脂磨皿规格表" : "Resin Filled Cup Wheel with Six Segments Spec."}
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
                    <th className="p-4" rowSpan={2}>粒度<br />Grit</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">CWRF-04-6</td>
                    <td className="p-4">4</td>
                    <td className="p-4">100</td>
                    <td className="p-4">M14&nbsp;&nbsp;&nbsp;&nbsp;M16&nbsp;&nbsp;&nbsp;&nbsp;5/8"-11</td>
                    <td className="p-4 whitespace-pre-line">{locale === "zh" ? "粗 中 细\nC M F" : "C M F"}</td>
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
            <img src={publicPath("/image/第17页-162.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "内八齿树脂磨皿" : "Resin Filled Cup Wheel with Eight Segments"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "内八齿树脂磨皿规格表" : "Resin Filled Cup Wheel with Eight Segments Spec."}
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
                    <th className="p-4" rowSpan={2}>粒度<br />Grit</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">CWRF-04-8</td>
                    <td className="p-4">4</td>
                    <td className="p-4">100</td>
                    <td className="p-4" rowSpan={4}>M14&nbsp;&nbsp;&nbsp;&nbsp;M16&nbsp;&nbsp;&nbsp;&nbsp;5/8"-11</td>
                    <td className="p-4 whitespace-pre-line" rowSpan={4}>{locale === "zh" ? "粗 中 细\nC M F" : "C M F"}</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CWRF-05-8</td>
                    <td className="p-4">5</td>
                    <td className="p-4">125</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CWRF-06-8</td>
                    <td className="p-4">6</td>
                    <td className="p-4">150</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">CWRF-07-8</td>
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
            <img src={publicPath("/image/第18页-171.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "铁基内半圆树脂磨皿" : "Resin Filled Cup Wheel with Steel Body"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "铁基内半圆树脂磨皿规格表" : "Resin Filled Cup Wheel with Steel Body Spec."}
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
                    <th className="p-4" rowSpan={2}>粒度<br />Grit</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">CWRS-04</td>
                    <td className="p-4">4</td>
                    <td className="p-4">100</td>
                    <td className="p-4">M14&nbsp;&nbsp;&nbsp;&nbsp;M16&nbsp;&nbsp;&nbsp;&nbsp;5/8"-11</td>
                    <td className="p-4 whitespace-pre-line">{locale === "zh" ? "粗\nC" : "C"}</td>
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
            <img src={publicPath("/image/第18页-172.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "蜗牛锁铝磨皿" : "Snail Lock Cup Wheel"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "蜗牛锁铝磨皿规格表" : "Snail Lock Cup Wheel Spec."}
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
                    <th className="p-4" rowSpan={2}>粒度<br />Grit</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">CWSL-04</td>
                    <td className="p-4">4</td>
                    <td className="p-4">100</td>
                    <td className="p-4">M14&nbsp;&nbsp;&nbsp;&nbsp;5/8"-11</td>
                    <td className="p-4 whitespace-pre-line">{locale === "zh" ? "粗 中 细\nC M F" : "C M F"}</td>
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
            <img src={publicPath("/image/第18页-170.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "高档波纹磨皿" : "Premium Ripple Cup Wheel"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "高档波纹磨皿规格表" : "Premium Ripple Cup Wheel Spec."}
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
                    <th className="p-4" rowSpan={2}>粒度<br />Grit</th>
                  </tr>
                  <tr>
                    <th className="p-4">Inch</th>
                    <th className="p-4">mm</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">CWPR-04</td>
                    <td className="p-4">4</td>
                    <td className="p-4">100</td>
                    <td className="p-4">M14&nbsp;&nbsp;&nbsp;&nbsp;M16&nbsp;&nbsp;&nbsp;&nbsp;5/8"-11</td>
                    <td className="p-4 whitespace-pre-line">{locale === "zh" ? "粗\nC" : "C"}</td>
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
