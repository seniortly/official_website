export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#020617] px-6 text-slate-200">
      <div className="max-w-xl text-center">
        <h1 className="text-2xl font-bold text-white">TY Diamond Tools</h1>
        <p className="mt-3 text-sm text-slate-400">
          Redirecting to Chinese homepage...
        </p>
        <p className="mt-2 text-xs text-slate-500">
          如果没有自动跳转，请点击
          {" "}
          <a className="text-blue-400 hover:text-blue-300" href="/zh/">
            /zh/
          </a>
        </p>
        <meta httpEquiv="refresh" content="0;url=/zh/" />
      </div>
    </main>
  );
}
