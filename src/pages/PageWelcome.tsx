import axios from "axios";
import { useEffect, useState } from "react";

const backendUrl = "http://localhost:4887";

interface IFramework {
	name: string;
	url: string;
	description: string;
}

export const PageWelcome = () => {
	const [backendAppName, setBackendAppName] = useState("");
	const [frameworks, setFrameworks] = useState<IFramework[]>([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${backendUrl}`);
			const _backendAppName = response.data.appName;
			setBackendAppName(_backendAppName);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${backendUrl}/frameworks`);
			const _frameworks = response.data;
			setFrameworks(_frameworks);
		})();
	}, []);

	return (
		<>
			<p>This is the welcome page.</p>
			<p>Backend app name is: {backendAppName}</p>
			<h2 className="text-xl mt-6 mb-3">JavaScript Frameworks</h2>
			<ul className="list-disc ml-6">
				{frameworks.map((framework, index) => {
					return (
						<li key={index}>
							<a
								className="underline"
								target="_blank"
								href={framework.url}
							>
								{framework.name}
							</a>{" "}
							- {framework.description}
						</li>
					);
				})}
			</ul>
		</>
	);
};
