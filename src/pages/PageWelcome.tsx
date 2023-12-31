import axios from "axios";
import { useEffect, useState } from "react";

const backendUrl = 'http://localhost:4887';

export const PageWelcome = () => {
	const [backendAppName, setBackendAppName] = useState("");

	useEffect(() => {
		(async () => {
		const response = await axios.get(`${backendUrl}`);
			const _backendAppName = response.data.appName;
			setBackendAppName(_backendAppName);
		})();
	}, []);

	return (
		<>
			<p>This is the welcome page.</p>
			<p>Backend app name is: {backendAppName}</p>
		</>
	);
};
