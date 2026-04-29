import { publicPath } from "@/lib/base-path";
import type { Locale } from "@/lib/site-content";

export function AntiquingBrushTab({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第20页-194.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "仿古刷" : "Antiquing Brush"}
            </h3>
            <p className="text-sm text-slate-400">
              {locale === "zh"
                ? "主要用于石材的凹凸面、仿古面的抛光（哑光）处理"
                : "Mainly used to do antiquing finishing on stone"}
            </p>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "仿古刷规格表 Antiquing Brush Spec." : "Antiquing Brush Spec."}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4">产品编号<br />Item No.</th>
                    <th className="p-4 text-center" colSpan={2}>类型/规格（mm）<br />Type/Dimension</th>
                    <th className="p-4">目数<br />Grit</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">ABFI</td>
                    <td className="p-4">{locale === "zh" ? "布拉型" : "Fickert"}</td>
                    <td className="p-4"></td>
                    <td className="p-4 whitespace-pre-line" rowSpan={8}>{"36#\n46#\n60#\n80#\n120#\n180#\n240#\n320#"}</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">ABFR</td>
                    <td className="p-4">{locale === "zh" ? "法兰克福" : "Frankfurt"}</td>
                    <td className="p-4"></td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">ABR040</td>
                    <td className="p-4" rowSpan={6}>{locale === "zh" ? "圆型" : "Round"}</td>
                    <td className="p-4">φ100</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">ABR060</td>
                    <td className="p-4">φ150</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">ABR070</td>
                    <td className="p-4">φ180</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">ABR080</td>
                    <td className="p-4">φ200</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">ABR100</td>
                    <td className="p-4">φ250</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">ABR120</td>
                    <td className="p-4">φ300</td>
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
