// /* @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: 'npm run dev',
		port: 3000,
        reuseExistingServer: !process.env.CI
	}
};

export default config;
