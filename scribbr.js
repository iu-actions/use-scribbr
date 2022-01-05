const { chrome } = require("playwright");

/**
 * Exports the bibliography as a Word document with Scribbr.
 */
(async () => {
	const browser = await chrome.launch({
		headless: true,
	});
	const context = await browser.newContext({
		acceptDownloads: true,
	});

	// Parse inputs
	const inputs = process.argv.slice(2);

	// Get backup location
	const [backup] = inputs;

	// Open new page
	const page = await context.newPage();

	// Go to https://www.scribbr.de/zitieren/apa-generator/
	await page.goto("https://www.scribbr.de/zitieren/apa-generator/");

	// Prepare backup
	await page.click('button:has-text("Sicherungskopie wiederherstellen")');

	// Prepare backup
	await page.click(
		"text=Sicherheitskopie wiederherstellenWähle eine Scribbr-Sicherheitskopie mit Drag-an >> div"
	);

	// Choose backup
	await page.setInputFiles('input[type="file"]', backup);

	// Upload backup
	await page.click('[data-test="restore-backup-modal:submit"]');

	// Export word document
	const [download] = await Promise.all([
		page.waitForEvent("download"),
		page.click('[data-test="initialized"] >> text=Zu Word exportieren'),
	]);

	// Save word document
	await download.saveAs("scribbr/bibliography.docx");

	// Close browser
	await browser.close();
})();
