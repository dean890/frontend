

export default async function Home() {
  const res = await fetch("http://localhost:8080/api/hello");
  const text = await res.text();

  

  return (
    <div style={{ padding: 20}}>
      <h1>Next.js + Spring Boot Test</h1>
      <p>백엔드에서 온 메시지 : {text}</p>
    </div>
  );
}
