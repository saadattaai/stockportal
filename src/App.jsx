
import { Show, UserButton, SignIn } from "@clerk/react";
import "./App.css";




function App() {
  return (

    
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-2xl font-bold text-white">
          D
        </div>
    
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome Back
        </h1>

        <p className="mt-2 text-gray-500">
          Sign in to access your Finance Dashboard.
        </p>

        <Show when="signed-in">
          <div className="mt-6">
            <UserButton />
          </div>

          <a
            href="/dashboard"
            className="mt-6 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Go to Dashboard
          </a>
        </Show>

        <Show when="signed-out">
          <div className="mt-6">
            <SignIn fallbackRedirectUrl="/dashboard" />
          </div>
        </Show>

      </div>
    </div>
  );
}

export default App;
