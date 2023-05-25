import { type NextPage } from "next";
import Head from "next/head";


const GeneratePage: NextPage = () => {

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <main className="flex min-h-screen flex-col items-center justify-center">
              <form action="">
                <label htmlFor="">Prompt</label>
                <input type="text" />
                <button className="bg-blue-400 hover:bg-blue-500 p-4 ">Submit</button>
            </form>
      </main>
    </>
  );
};

export default GeneratePage;
