import { test, expect } from '@playwright/test';

test('Verify Get all manufactures api is successfully', async ({ request }) => {
    const response = await request.get("https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json");

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

test('Verify countries from NISSAN manufactures', async ({ request }) => {
    const response = await request.get("https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json");

    const responseBody = await response.json();
    const results = responseBody.Results;
    const expectedCountries = ["JAPAN", "UNITED STATES (USA)", "MEXICO"];
    let actualCountries: string[] = [];
    for (let result of results) {
        if (result.Mfr_CommonName?.toLowerCase() === "nissan") {
            actualCountries.push(result.Country.toUpperCase());
        }
    }
    expect(actualCountries).toStrictEqual(expectedCountries);

});