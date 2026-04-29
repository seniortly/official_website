import { publicPath } from "@/lib/base-path";
import type { Locale } from "@/lib/site-content";

export function RouterBitTab({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-8">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
        <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
          <span className="font-bold text-white">
            {locale === "zh" ? "小金刚（锣边轮）Router Bit" : "Router Bit"}
          </span>
        </div>
        <div className="p-6">
          <div className="mb-6 space-y-2">
            <p className="text-sm text-slate-300">
              {locale === "zh" ? "连接方式Thread Size：M8/M10" : "Thread Size: M8/M10"}
            </p>
            <p className="text-sm text-slate-300">
              {locale === "zh" ? "功能：用加工和修整石材边沿" : "Application: Used for processing and trimming stone edge."}
            </p>
            <p className="text-sm text-slate-300">
              {locale === "zh" ? "Application: Used for processing and trimming stone edge." : ""}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-3">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-[rgba(15,23,42,0.58)]">
                <img src={publicPath("/image/第13页-114.PNG")} alt="" className="aspect-square w-full object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-blue-300">
                  {locale === "zh" ? "节块小金刚 Segmented Router Bit" : "Segmented Router Bit"}
                </h4>
                <p className="text-xs text-slate-400">
                  {locale === "zh" ? "型号Profile: A/B/E/F/H/L/O/Q/T/V......" : "Profile: A/B/E/F/H/L/O/Q/T/V......"}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-[rgba(15,23,42,0.58)]">
                <img src={publicPath("/image/第13页-115.PNG")} alt="" className="aspect-square w-full object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-blue-300">
                  {locale === "zh" ? "连续式小金刚 Continuous Router Bit" : "Continuous Router Bit"}
                </h4>
                <p className="text-xs text-slate-400">
                  {locale === "zh" ? "型号Profile: A/B/E/F/H/L/O/Q/T/V......" : "Profile: A/B/E/F/H/L/O/Q/T/V......"}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-[rgba(15,23,42,0.58)]">
                <img src={publicPath("/image/第13页-117.PNG")} alt="" className="aspect-square w-full object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-blue-300">
                  {locale === "zh" ? "节块手提轮 Segmented Handy Router Bit" : "Segmented Handy Router Bit"}
                </h4>
                <p className="text-xs text-slate-400">
                  {locale === "zh" ? "型号Profile: A/B/E/F/H/L/O/Q/T/V......" : "Profile: A/B/E/F/H/L/O/Q/T/V......"}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-[rgba(15,23,42,0.58)]">
                <img src={publicPath("/image/第13页-116.PNG")} alt="" className="aspect-square w-full object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-blue-300">
                  {locale === "zh" ? "电镀小金刚 Electroplated Router Bit" : "Electroplated Router Bit"}
                </h4>
                <p className="text-xs text-slate-400">
                  {locale === "zh" ? "型号Profile: A/B/E/F/H/L/O/Q/T/V......" : "Profile: A/B/E/F/H/L/O/Q/T/V......"}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-[rgba(15,23,42,0.58)]">
                <img src={publicPath("/image/第13页-118.PNG")} alt="" className="aspect-square w-full object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-blue-300">
                  {locale === "zh" ? "钎焊手提轮 Vacuum Brazed Handy Router Bit" : "Vacuum Brazed Handy Router Bit"}
                </h4>
                <p className="text-xs text-slate-400">
                  {locale === "zh" ? "型号Profile: A/B/E/F/H/L/O/Q/T/V......" : "Profile: A/B/E/F/H/L/O/Q/T/V......"}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-[rgba(15,23,42,0.58)]">
                <img src={publicPath("/image/第13页-129.PNG")} alt="" className="aspect-square w-full object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-blue-300">
                  {locale === "zh" ? "树脂小金刚 Resin Router Bit" : "Resin Router Bit"}
                </h4>
                <p className="text-xs text-slate-400">
                  {locale === "zh" ? "型号Profile: A/B/E/F/H/L/O/Q/T/V......" : "Profile: A/B/E/F/H/L/O/Q/T/V......"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="space-y-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
            <img src={publicPath("/image/第13页-119.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <img src={publicPath("/image/第13页-120.PNG")} alt="" className="aspect-[4/3] w-full rounded object-cover" />
            <h3 className="text-lg font-bold text-white">
              {locale === "zh" ? "小金刚机器 Router Bit Machine" : "Router Bit Machine"}
            </h3>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
              <span className="font-bold text-white">
                {locale === "zh" ? "小金刚机器 Router Bit Machine" : "Router Bit Machine"}
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-[10px] tracking-widest text-slate-400">
                  <tr>
                    <th className="p-4">产品编号<br />Item No.</th>
                    <th className="p-4">电压<br />Voltage</th>
                    <th className="p-4">功率<br />Power</th>
                    <th className="p-4">转速<br />RPM</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-white/5">
                    <td className="p-4">PM-C</td>
                    <td className="p-4">220V</td>
                    <td className="p-4">3HP</td>
                    <td className="p-4">0-8000</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">PM-T1</td>
                    <td className="p-4">220/380V</td>
                    <td className="p-4">1HP</td>
                    <td className="p-4">3000</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-4">PM-T2</td>
                    <td className="p-4">220V</td>
                    <td className="p-4">3HP</td>
                    <td className="p-4">2800-7500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
        <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
          <span className="font-bold text-white">
            {locale === "zh" ? "产品细节 Product Details" : "Product Details"}
          </span>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="overflow-hidden rounded-lg border border-white/10 bg-[rgba(15,23,42,0.58)]">
              <img src={publicPath("/image/第13页-121.PNG")} alt="" className="aspect-square w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg border border-white/10 bg-[rgba(15,23,42,0.58)]">
              <img src={publicPath("/image/第13页-122.PNG")} alt="" className="aspect-square w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg border border-white/10 bg-[rgba(15,23,42,0.58)]">
              <img src={publicPath("/image/第13页-123.PNG")} alt="" className="aspect-square w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg border border-white/10 bg-[rgba(15,23,42,0.58)]">
              <img src={publicPath("/image/第13页-124.PNG")} alt="" className="aspect-square w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg border border-white/10 bg-[rgba(15,23,42,0.58)]">
              <img src={publicPath("/image/第13页-125.PNG")} alt="" className="aspect-square w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg border border-white/10 bg-[rgba(15,23,42,0.58)]">
              <img src={publicPath("/image/第13页-126.PNG")} alt="" className="aspect-square w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg border border-white/10 bg-[rgba(15,23,42,0.58)]">
              <img src={publicPath("/image/第13页-127.PNG")} alt="" className="aspect-square w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg border border-white/10 bg-[rgba(15,23,42,0.58)]">
              <img src={publicPath("/image/第13页-128.PNG")} alt="" className="aspect-square w-full object-cover" />
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
