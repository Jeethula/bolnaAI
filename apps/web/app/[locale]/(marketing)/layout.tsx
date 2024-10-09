// import { Footer } from "@marketing/shared/components/Footer";
import { NavBar } from "@marketing/shared/components/NavBar";
import { UserContextProvider } from "@saas/auth/lib/user-context";
import type { PropsWithChildren } from "react";

export default function MarketingLayout({ children }: PropsWithChildren) {
	return (
		<UserContextProvider initialUser={null}>
			<main className=" flex min-h-screen min-w-screen bg-[#F9FEFE] text-black ">
			<section className="w-[20%] p-3">
				<NavBar />
			</section>
			<section className="w-[80%]">
				<div className="min-h-screen ">{children}</div>
			</section>
			</main>
			{/* <Footer /> */}
		</UserContextProvider>
	);
}
