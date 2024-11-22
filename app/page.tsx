import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '最初のページ',
  description: 'Playwrightハンズオンの最初のステップ',
};

export default function Home() {
  return (
    <main>
      <h1>Playwrightハンズオン</h1>
      <p>あなたは1週間後にはE２Eテストのエキスパートです。</p>
      <p>
        <button>操作ボタン</button>
      </p>
    </main>
  );
}
