export const getBackendUrl = (): string => {
	const backendUrl = String(import.meta.env.VITE_BACKEND_URL);
	return backendUrl !== 'undefined' ? backendUrl : 'ERROR: NO BACKEND URL FOUND';
}