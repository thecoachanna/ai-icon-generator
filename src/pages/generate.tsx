import { type NextPage } from "next";
import React, { useState } from "react";
import Head from "next/head";
import { Input } from "~/components/Input";
import { FormGroup } from "~/components/FormGroup";
import { api } from "~/utils/api";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "~/components/Button";

const GeneratePage: NextPage = () => {
  const [form, setForm] = useState({ 
    prompt: "",
  });

  const generateIcon = api.generate.generateIcon.useMutation({
    onSuccess(data) {
      console.log("mutation finished", data);
    }
  })

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(form);
    // submit form data to backend
    generateIcon.mutate({
      prompt: form.prompt
    })
  }

  function updateForm(key: string) { 
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      setForm((prev) => ({ ...prev, [key]: e.target.value }))
    }
  }

  const session = useSession();
  const isLoggedIn = !!session.data;
  
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">

    {/* Login Button */}
        {!isLoggedIn && (
          <Button onClick={() => {
            signIn().catch(console.error);
          }}>Login</Button>
        )}
    {/* Logout Button */}
         {isLoggedIn && (
          <Button onClick={() => {
            signOut().catch(console.error);
          }}>Logout</Button>
        )}
          
        <form action="" className="flex flex-col gap-4"
        onSubmit={handleFormSubmit}>
          <FormGroup>
            <label>Prompt</label>
            <Input
              value={form.prompt}
              onChange={updateForm("prompt")}/>
          </FormGroup>
          <Button className="rounded bg-blue-400 px-4 py-2 hover:bg-blue-500">
            Submit
          </Button>
        </form>
      </main>
    </>
  );
};

export default GeneratePage;
