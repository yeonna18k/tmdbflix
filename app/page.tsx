import UI from "./ui";

export const metadata = {
  title: "TMDBFLIX",
  description: "Netflix clone using TMDB API",
};

export default function Home() {
  return (
    <main>
      <UI />
    </main>
  );
}

// 기본적으로 page.tsx에서 client 컴포넌트를 사용하는 것은 좋지 않음
// 클라이언트 컴포넌트가 되어버리면 메타데이터같은 const를 활용할 수 없기 때문임
