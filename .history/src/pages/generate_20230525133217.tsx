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
                <Input>
                <button className="bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded">Submit</button>
            </form>
      </main>
    </>
  );
};

export default GeneratePage;
