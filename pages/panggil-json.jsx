// // pages/index.js
// import Head from "next/head";

// export default function Home(props) {
//   const posts = props.posts;
//   return (
//     <div style={{ padding: 30 }}>
//       <Head>
//         <title>KindaCode.com</title>
//       </Head>
//       <div>
//         {posts.map((post) => {
//           return (
//             <div
//               key={post.id}
//               style={{ padding: 20, borderBottom: "1px solid #ccc" }}
//             >
//               <h2>{post.title}</h2>
//               <p>{post.content}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// // Fetching data from the JSON file
// import fsPromises from "fs/promises";
// import path from "path";
// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), "status-pekerjaan.json");
//   const jsonData = await fsPromises.readFile(filePath);
//   const objectData = JSON.parse(jsonData);

//   return {
//     props: objectData,
//   };
// }
