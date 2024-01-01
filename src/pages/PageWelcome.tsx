import axios from "axios";
import { useEffect, useState } from "react";
import * as config from "../config";

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
			try {
				const response = await axios.get(`${config.getBackendUrl()}`);
				const _backendAppName = response.data.appName;
				setBackendAppName(_backendAppName);
			} catch {
				setBackendAppName("ERROR");
			}
		})();
	}, []);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(
					`${config.getBackendUrl()}/frameworks`
				);
				const _frameworks = response.data;
				setFrameworks(_frameworks);
			} catch {
				setFrameworks([]);
			}
		})();
	}, []);

	return (
		<>
			<p>This is the welcome page.</p>
			<p>Backend URL is: {config.getBackendUrl()}</p>
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
