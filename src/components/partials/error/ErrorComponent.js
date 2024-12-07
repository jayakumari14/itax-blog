"use client"
import { useRouter } from "next/navigation";
export default function ErrorComponent(props) {
	const { message, type, info } = props;
	const router = useRouter();
	return (
		<div className="bg-neutral-50 min-h-[calc(100vh-7.25rem)] grid place-content-center ">
			<div className="text-center sm:text-start">
				<h1 className="mt-4 text-4xl text-gray-800 font-bold tracking-tighter">
					Uppsss... {type}
				</h1>
				<h2 className="mt-4 text-2xl text-gray-600 font-semibold tracking-tighter">
					{info}
				</h2>
				<p className="mt-4 max-w-sm text-sm text-gray-500 tracking-tighter">
					{message}
				</p>
				<div className="mt-4 flex sm:justify-start justify-center flex-wrap gap-2">
					<button
                        className="btn-info" 
                        onClick={() => router.back()}>
						Go Back
					</button>
					<button
						className="btn-danger"
						onClick={() => router.refresh()}
					>
						Reload
					</button>
				</div>
			</div>
		</div>
	);
}
