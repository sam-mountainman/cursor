import { LoginForm } from "@/components/login-form";
import { Suspense } from "react";

type Props = {
  searchParams: Promise<{ next?: string }>;
};

async function LoginFormWithParams({ searchParams }: Props) {
  const params = await searchParams;
  const nextPath = typeof params.next === "string" ? params.next : undefined;

  return <LoginForm nextPath={nextPath} />;
}

export default function Page({ searchParams }: Props) {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Suspense fallback={<LoginForm />}>
          <LoginFormWithParams searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
